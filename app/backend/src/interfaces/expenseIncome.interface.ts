import z from 'zod';

const expenseIncomeZodSchema = z.object({
  id: z.number().optional(),
  user_id: z.number(),
  category_id: z.number(),
  wallet_id: z.number(),
  value: z.number(),
  type: z.enum(['expense', 'income']),
  transact_date: z.date(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type IExpenseIncome = z.infer<typeof expenseIncomeZodSchema>;
export default expenseIncomeZodSchema;
