import { z } from "zod";

export const registerUserSchema = z.object({
  name: z.string({ message: "Nome é obrigatorio!" }),
  lastName: z.string({ message: "Nome é obrigatorio!" }),
  email: z
    .string({ message: "Email é obrigatorio" })
    .email({ message: "E-mail deve ser valido!" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no minimo 6 caracteres!" }),
});

export const signInUserSchema = z.object({
  email: z
    .string({ message: "E-mail é obrigatorio para realizar o login." })
    .email({ message: "E-mail precisa ser valido para continuar." }),
  password: z.string({
    message: "Senha é obrigatoria para tentativa de login.",
  }),
});
