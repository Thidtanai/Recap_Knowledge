import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as bcrypt from 'bcrypt';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  // not required for google signin but still need validation.
  @Prop()
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  tel: string;

  @Prop()
  googleId: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

// pre middleware: do something previous saved
UserSchema.pre('save', async function (next) {
  // hashing password
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
