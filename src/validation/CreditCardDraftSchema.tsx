import { z } from "zod"

export const creditCardDraftSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^(\d{13,19})$/, { message: "Card number must only be numeric and between 13 to 19 digits." }),
    // .refine((value) => {}), for client side Luhn 10 validations
  userName: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." }),
  cardLimit: z
    .string()
    .regex(/^\d+$/, { message: "Card limit must be a numeric value." })
    .transform((value) => parseInt(value))
    .refine((value) => value > 1000, { message: "Card limit must be greater than 1000" })
    .refine((value) => value < 10000, { message: "Card limit must be less than 10000" }),
})