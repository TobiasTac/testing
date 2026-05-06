import { randomUUID } from "node:crypto";

export class CourseRepository {
  create(name: string) {
    return {
      id: randomUUID(),
      name: name,
      createdAt: new Date(),
    };
  }
}
