import { z } from "zod";

export const userNameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(10, "Username must not be more than 10 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special characters");

export const signUpSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters" })
    .max(20, { message: "Password must not be more than 20 characters" }),
});
