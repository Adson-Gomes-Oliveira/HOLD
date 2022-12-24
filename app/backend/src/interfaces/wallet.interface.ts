import z from 'zod';

const walletZodSchema = z.object({
  id: z.number().optional(),
  user_id: z.number(),
  fin_plan_id: z.number(),
  title: z.string(),
  value: z.number(),
  bank_wallet: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
});

export type IWallet = z.infer<typeof walletZodSchema>;
export default walletZodSchema;
