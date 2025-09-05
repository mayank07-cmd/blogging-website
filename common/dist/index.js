import z from "zod";
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
});
export const updateBlogInput = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
});
//# sourceMappingURL=index.js.map