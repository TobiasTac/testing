import { randomUUID } from "node:crypto";

type FindByIdResult = null | {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  createdAt: Date;
}

export class CourseRepository {
  async findById(courseId: string): Promise<FindByIdResult> {
    console.log(`> Searching course ${courseId} in the database...`);

    return {
      id: randomUUID(),
      name: `Course - ${Math.random()}`,
      createdAt: new Date(),
    }
  }

  async create(name: string) {
    console.log('> Saving course to database...')

    return {
      id: randomUUID(),
      name: name,
      createdAt: new Date(),
    };
  }
}
