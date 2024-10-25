import { z } from "zod";

const nameSchema = z.object({
  first: z.string(),
  last: z.string(),
});

export const userSchema = z.object({
  id: z.number(),
  name: nameSchema,
  email: z.string(),
  phone: z.string(),
  createdAt: z.string(),
  status: z.string(),
  type: z.string(),
});

export type User = z.infer<typeof userSchema>;
