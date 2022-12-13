import { DateSchemaDefinition } from "mongoose";

export class CreateFormDto {
  firstname: string;
  lastname: string;
  age: number;
  birthDate: Date;
  startDate: Date;
  cost: number;
}
