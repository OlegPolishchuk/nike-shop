import { z } from 'zod';

export const CheckoutFormSchema = z.object({
  firstName: z.string().min(1, { message: 'Please enter your first name' }).trim(),
  lastName: z.string().min(1, { message: 'Please enter your last name' }).trim(),
  address: z.string().min(4, { message: 'Please enter address' }).trim(),
  email: z.string(),
  phone: z.string(),
});
