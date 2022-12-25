import z from 'zod';

const cardZodSchema = z.object({
  id: z.number().optional(),
  brand_id: z.number(),
  user_id: z.number(),
  limit: z.number(),
  target: z.string(),
  pay_date: z.date(),
  close_date: z.date(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type ICard = z.infer<typeof cardZodSchema>;
export default cardZodSchema;
