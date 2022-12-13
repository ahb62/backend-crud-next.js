import { Schema } from "mongoose";

export const FormSchema = new Schema({
  firstname: String,
  lastname: String,
  age: Number,
  birthDate: Date,
  startDate: Date,
  cost: Number,
});
