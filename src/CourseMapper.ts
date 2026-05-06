type CourseDomain = {
  name: string;
}

type CourseAPI = {
  course: {
    name: string;
  }
}

export class CourseMapper {
  static toDomain(courseAPI: CourseAPI): CourseDomain {
    return {
      name: courseAPI.course.name,
    };
  }

  static toAPI(courseDomain: CourseDomain): CourseAPI {
    return {
      course: {
        name: courseDomain.name,
      },
    };
  }
}