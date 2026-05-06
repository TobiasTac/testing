import { randomUUID } from "node:crypto";

type CreateCourseInput = {
  name: string;
}

type CreateCourseOutput = {
  id: string;
  name: string;
  createdAt: Date;
}

export async function createCourse(input: CreateCourseInput): Promise<CreateCourseOutput> {
  if (!input.name.trim()) {
    throw new Error('Name is required');
  }
  
  return {
    id: randomUUID(),
    name: input.name,
    createdAt: new Date(),
  };
}