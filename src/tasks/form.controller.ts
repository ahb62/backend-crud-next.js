import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { FormService } from './form.service';

import { Form } from './interfaces/Form';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  @Get()
  getForms(): Promise<Form[]> {
    return this.formService.getForms();
  }

  @Get(':formId')
  getForm(@Param('formId') formId) {
    return this.formService.getForm(formId);
  }

  @Post()
  createPost(@Body() form: CreateFormDto) {
    return this.formService.createPost(form);
  }


}
