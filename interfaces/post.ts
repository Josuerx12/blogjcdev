import { Prisma } from "@prisma/client";

export interface IPost {
  id: string;
  title: string;
  body: string;
  image: string;
  tagList: string[];
}
