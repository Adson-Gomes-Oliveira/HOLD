import z from 'zod';

const cardBrandZodSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});

export type ICardBrand = z.infer<typeof cardBrandZodSchema>;
export default cardBrandZodSchema;
