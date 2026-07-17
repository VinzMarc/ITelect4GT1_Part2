import type { User, Course, Submission, ApiResponse, UserSummary, SubmissionUpdate, UserWithoutEmail, CourseCatalog } from "../types/index";
import { UserRole } from "../types/index";

// ===== PRIMITIVE TYPE ANNOTATIONS =====
// Variables with explicit types
const projectName: string = "itelect4-project";
const currentYear: number = 2026;
const isFullStack: boolean = true;
const nothing: null = null;
const notSet: undefined = undefined;

// Function: typed parameters + typed return value
function greet(name: string, year: number): string {
  return `Welcome to ${name} -- AY ${year}!`;
}

// void: function that does NOT return a value
function logMessage(message: string): void {
  console.log(message);
}

logMessage(greet(projectName, currentYear));

// ===== USING INTERFACES =====
const student: User = {
  id: 1,
  name: "Juan dela Cruz",
  email: "juan@example.com",
  role: UserRole.Student,
  isActive: true,
};

const course: Course = {
  code: "ITELECT4",
  title: "IT Elective 4",
  units: 3,
  semester: "1st Semester 2026-2027",
};

const submission: Submission = {
  id: 1,
  studentId: 1,
  courseCode: "ITELECT4",
  repoUrl: "https://github.com/example/repo",
  submittedAt: new Date(),
};

const studentSummary: UserSummary = {
  id: student.id,
  name: student.name,
  role: student.role,
};

const updatedSubmission: SubmissionUpdate = {
  score: 95,
};

const studentWithoutEmail: UserWithoutEmail = {
  id: student.id,
  name: student.name,
  role: student.role,
  isActive: student.isActive,
};

const courseCatalog: CourseCatalog = {
  [course.code]: course,
};

const apiResponse: ApiResponse<User> = {
  success: true,
  data: student,
  message: "User retrieved successfully.",
};

console.log(student);
console.log(studentSummary);
console.log(course);
console.log(courseCatalog);
console.log(submission);
console.log(updatedSubmission);
console.log(studentWithoutEmail);
console.log(apiResponse);

// ===== SPECIAL TYPES =====
// any -- disables TypeScript type checking
// [!] Avoid using this; it defeats the purpose of TypeScript
let anything: any = "hello";
anything = 42; // No error
anything = true; // No error

// unknown -- the safer version of any
// You MUST check the type before using it
let userInput: unknown = "test";
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // OK -- TypeScript knows it's a string here
}

// Generic helper functions
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

function getById<T extends { id: number }>(items: T[], id: number): T | undefined {
  return items.find((item) => item.id === id);
}

// never -- a function that NEVER returns
// Used when a function always throws an error or loops forever
function throwError(message: string): never {
  throw new Error(message);
}

const users: User[] = [student];
const foundUser = getById(users, 1);
const firstCourse = getFirst([course]);

console.log(foundUser);
console.log(firstCourse);

