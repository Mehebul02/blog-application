import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown> = {}) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchableFields: string[]) {
        const searchTerm = this.query?.search as string;
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchableFields.map((field) => ({
                    [field]: { $regex: searchTerm, $options: 'i' },
                }) as FilterQuery<T>),
            });
        }

        return this;
    }

    filter() {
        const queryObj = { ...this.query };

        // Exclude fields used for other operations
        const excludeField = ["search", "sortBy", "sortOrder", "limit", "page", "fields"];
        excludeField.forEach((el) => delete queryObj[el]);

        // Add custom filtering logic if needed (e.g., filter by authorId)
        if (queryObj.filter) {
            queryObj["author"] = queryObj.filter; // Map `filter` to `author`
            delete queryObj.filter;
        }

        this.modelQuery = this.modelQuery.find(queryObj);
        return this;
    }

    sort() {
        const sortBy = (this.query.sortBy as string) || "createdAt";
        const sortOrder = this.query.sortOrder === "desc" ? "-" : "";
        this.modelQuery = this.modelQuery.sort(`${sortOrder}${sortBy}`);

        return this;
    }

    paginate() {
        const page = Number(this.query.page) || 1;
        const limit = Number(this.query.limit) || 10;
        const skip = (page - 1) * limit;

        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this;
    }

    fields() {
        const fields = (this.query.fields as string)?.split(',').join(' ') || '-__v';
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }
}

export default QueryBuilder;
