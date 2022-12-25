import z from 'zod';

const expenseCreditZodSchema = z.object({
  id: z.number().optional(),
  user_id: z.number(),
  category_id: z.number(),
  wallet_id: z.number(),
  value: z.number(),
  transact_date: z.date(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type IExpenseCredit = z.infer<typeof expenseCreditZodSchema>;
export default expenseCreditZodSchema;
