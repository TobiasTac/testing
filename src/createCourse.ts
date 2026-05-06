import { randomUUID } from "node:crypto";

type CreateCourseInput = {
  name: string;
}

type CreateCourseOutput = {
  id: string;
  name: string;
}

export async function createCourse(input: CreateCourseInput): Promise<CreateCourseOutput> {
  return {
    id: randomUUID(),
    name: input.name,
  };
}