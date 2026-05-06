import { expect, it } from "vitest";

import { CourseMapper } from "./CourseMapper";

it('should convert an CourseAPI to a CourseDomain', () => {
  const course = CourseMapper.toDomain({
    course: {
      name: 'Curso de React',
    },
  });

  expect(course).toEqual({
    name: 'Curso de React',
  });
});