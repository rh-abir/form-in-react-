import { z } from "zod";
export const SignUpSchema = z.object({
  name: z.string().min(3, { message: "name is required" }),
  email: z.string().email().min(1, { message: "Email is Required" }),
  password: z.string().min(8, "passowrd is Too Short"),
});

export type TNormalForm = z.infer<typeof SignUpSchema>;
