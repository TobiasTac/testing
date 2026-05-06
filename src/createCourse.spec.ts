import { expect, it } from "vitest";
import { createCourse } from "./createCourse";

it('should return the course object on success', async () => {
  const course = await createCourse({ name: 'Curso de Testes' });

  expect(course).toEqual({
    id: expect.any(String),
    name: 'Curso de Testes',
  });
});

it('should throw if no name is provided', async () => {
  const coursePromise = createCourse({ name: '' });

  await expect(coursePromise).rejects.toThrow(new Error('Name is required'));
});