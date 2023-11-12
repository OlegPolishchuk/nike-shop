import { z } from 'zod';

export const CheckoutFormSchema = z.object({
  firstName: z.string({ required_error: 'Please enter your first name' }).trim(),
  lastName: z.string({ required_error: 'Please enter your last name' }).trim(),
  address: z.string({ required_error: 'Please enter address' }).trim(),
  email: z.string().email(),
  phone: z.string(),
});
