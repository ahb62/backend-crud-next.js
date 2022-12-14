import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Form } from './interfaces/Form';
import { CreateFormDto } from './dto/create-form.dto';
@Injectable()
export class FormService {
  constructor(@InjectModel("Form") private formModel: Model<Form>) {}

  async getForms() {
    return await this.formModel.find();
  }

  async getForm(id: string) {
    return await this.formModel.findById(id);
  }

  async createPost(form: CreateFormDto) {
    const newForm = new this.formModel(form);
    await newForm.save();
    console.log(newForm);
    return "saved!";
  }

  async updateForm(id: any) {
    await this.formModel.findById(id);
    
  }
}
