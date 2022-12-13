import { Module } from "@nestjs/common";
import { FormService } from "./form.service";
import { FormController } from "./form.controller";
import { FormSchema } from "./schemas/form.schema";
import { MongooseModule } from "@nestjs/mongoose";
@Module({
  imports: [MongooseModule.forFeature([{ name: "Form", schema: FormSchema }])],
  controllers: [FormController],
  providers: [FormService],
})
export class FormModule {}
