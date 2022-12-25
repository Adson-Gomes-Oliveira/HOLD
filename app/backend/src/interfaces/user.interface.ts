import z from 'zod';

const userZodSchema = z.object({
  id: z.number().optional(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string(),
  password: z.string(),
  profile_picture: z.string(),
  security_question: z.string(),
  badges: z.string(),
  active: z.boolean(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type IUser = z.infer<typeof userZodSchema>;
export default userZodSchema;
