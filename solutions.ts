const multiplyValue = (value: number, multiplier: number = 2): void => {
  return console.log(value * multiplier);
};

const processInput = <T>(value: T): T | void => {
  if (typeof value === "string") return console.log(value.toLowerCase().trim());
  else if (typeof value === "number") return console.log(value * 10);
  else if (typeof value === "boolean") {
    const tf = true ? "Active" : "Inactive";
    return console.log(tf);
  }
};

const formatCoordinate = (
  tuple: readonly [lalitude: number, longitude: number, locationName: string],
): void => {
  return console.log(`Location : ${tuple[2]} (${tuple[0]}, ${tuple[1]})`);
};

const concatenateArrays = <T>(...arrays: T[][]): T | void => {
  return console.log(arrays);
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] | void => {
  const result = courses.filter(
    (course) => course.isPublished && minStudents <= course.students,
  );
  return console.log(result);
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

getPopularCourses(courses, 80);

const pluckValues = <T, k extends keyof T>(items: T[], key: k): T[k][] => {
  return items.map((item) => item[key]);
};

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string | void {
    return console.log(
      `Employee -> ${this.name}, Salary -> ${this.baseSalary}`,
    );
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string | void {
    return console.log(`Manager of ${this.department} -> ${this.name}`);
  }
}

const manager = new Manager("Alice", 50000, "Engineering");

export {};

const validateAgeAsync = (age: number): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    if (18 <= age) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Error : Access Denied: Must be 18 or older"));
    }
  });
};

await validateAgeAsync(20);

await validateAgeAsync(15);
