import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
  phone: z.string().optional(),
});

export type ContactData = z.infer<typeof contactSchema>;
