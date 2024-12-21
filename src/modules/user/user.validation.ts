import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1).max(20),
        email: z.string().email(),
        password: z.string({
            invalid_type_error: 'Password must be string',
        })
            .max(20, { message: 'Password can not be more than 20 characters' })
            .optional(),
        role: z.enum(['admin', 'user']),
        isBlocked: z.boolean().optional(),

    })
})

export const UserValidation = {
    createUserValidationSchema
}