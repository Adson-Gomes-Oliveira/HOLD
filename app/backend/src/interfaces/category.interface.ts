import z from 'zod';

const categoryZodSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
});

export type ICategory = z.infer<typeof categoryZodSchema>;
export default categoryZodSchema;
