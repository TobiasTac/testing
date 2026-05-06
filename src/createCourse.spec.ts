import { expect, it, vi } from "vitest";
import { CourseRepository } from "./CourseRepository";
import { createCourse } from "./createCourse";

vi.useFakeTimers();
vi.setSystemTime(new Date(2026, 4, 6))

it('should return the course object on success', async () => {
  const course = await createCourse({ name: 'Curso de Testes' });

  expect(course).toEqual({
    id: expect.any(String),
    name: 'Curso de Testes',
    createdAt: new Date(),
  });
});

it('should throw if no name is provided', async () => {
  const coursePromise = createCourse({ name: '' });

  await expect(coursePromise).rejects.toThrow(new Error('Name is required'));
});

it('should call CourseRepository.create correctly', async () => {
  const createSpy = vi.spyOn(CourseRepository.prototype, 'create')

  await createCourse({ name: 'Curso de Testes' });

  expect(createSpy).toHaveBeenCalledWith('Curso de Testes');
  expect(createSpy).toHaveBeenCalledTimes(1);
})