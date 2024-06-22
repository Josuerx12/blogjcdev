import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string({ message: "É obrigatoria" }),
  lastName: z.string({ message: "É obrigatoria" }),
  email: z
    .string({ message: "Email é obrigatorio" })
    .email({ message: "E-mail deve ser valido!" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no minimo 6 caracteres!" }),
});
