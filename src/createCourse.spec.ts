import { expect, it } from "vitest";
import { createCourse } from "./createCourse";

it('should return the course object on success', async () => {
  const course = await createCourse({ name: 'Curso de Testes' });

  expect(course).toEqual({
    id: expect.any(String),
    name: 'Curso de Testes',
  });
});