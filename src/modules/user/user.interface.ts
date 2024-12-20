

export type IUser ={
    username: string; 
    email: string; 
    password: string; 
    role: "admin" | "user"; 
    isBlocked: boolean;
}