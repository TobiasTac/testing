import { describe, expect, it, vi } from "vitest";
import { CourseRepository } from "./CourseRepository";
import { getCourseById } from "./getCourseById";

describe('getCourseById', () => {
  it('should return the course on success', async () => {
    const course = await getCourseById('course-123');

    expect(course).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      createdAt: expect.any(Date),
    });
  });

  it('should throw if the course was not found', async () => {
    vi
      .spyOn(CourseRepository.prototype, 'findById')
      .mockResolvedValue(null);

    const coursePromise = getCourseById('course-123');

    await expect(coursePromise).rejects.toThrow(new Error('Course not found'));
  });
})