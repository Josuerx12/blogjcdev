import { z } from "zod";

export const newPostSchema = z.object({
  title: z
    .string({ message: "Titulo é obrigatorio para criar um novo post!" })
    .min(3, {
      message:
        "Titulo deve conter pelo menos 3 caracteres para criar um novo post.",
    }),
  body: z
    .string({ message: "Corpo do post é obrigatorio!" })
    .min(5, {
      message:
        "O Corpo do post deve conter pelo menos 5 caracteres para ser valido!",
    }),
  tagList: z
    .string({ message: "TAGS devem ser adicionadas e separadas por virgulas." })
    .min(2, { message: "Tags deve conter pelo menos 2 caracteres!" }),
});
