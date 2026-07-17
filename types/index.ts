// ===== ENUMS =====
// Enums are a way to define a set of named constant values.

export enum UserRole {
  Student = "student",
  Admin = "admin",
  Instructor = "instructor",
}

// ===== GENERIC INTERFACES =====
// A generic type lets us create reusable shapes for many data types.

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// ===== INTERFACES =====
// An interface defines the SHAPE of an object -- what fields it must have.

export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole; // use the enum values
  isActive: boolean;
  score?: number; // optional score on the user record
}

export interface Course {
  code: string;
  title: string;
  units: number;
  semester: string;
}

export interface Submission {
  id: number;
  studentId: number;
  courseCode: string;
  repoUrl: string;
  submittedAt: Date;
  score?: number; // ? means this field is optional
}

// ===== UTILITY TYPES =====
// These utilities help shape existing types for special cases.

export type UserSummary = Pick<User, "id" | "name" | "role">;
export type SubmissionUpdate = Partial<Submission>;
export type UserWithoutEmail = Omit<User, "email">;
export type CourseCatalog = Record<string, Course>;
 
// ===== LOST & FOUND APP TYPES =====
export enum ItemType {
  Lost = "lost",
  Found = "found",
}

export enum ClaimStatus {
  Pending = "pending",
  Verified = "verified",
  Completed = "completed",
}

export interface Item {
  id: number;
  title: string;
  description?: string;
  location?: string;
  type: ItemType; // lost or found
  reportedBy: number; // user id
  reportedAt: Date;
  isClaimed?: boolean;
}

export interface Claim {
  id: number;
  itemId: number;
  claimerId: number; // user who claims the item
  status: ClaimStatus;
  requestedAt: Date;
  verifiedBy?: number; // admin user id who verifies
  verifiedAt?: Date;
  notes?: string;
}

export type ItemSummary = Pick<Item, "id" | "title" | "type" | "location" | "isClaimed">;
 
