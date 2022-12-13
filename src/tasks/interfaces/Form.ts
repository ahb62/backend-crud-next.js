import { Document } from "mongoose";

export interface Form extends Document {
  id?: number;
  firstname: string;
  lastname: string;
  age: number;
  birthDate: Date;
  startDate: Date;
  cost: number;
}
