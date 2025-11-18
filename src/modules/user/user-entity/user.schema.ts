import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Filter, FilterSchema } from 'src/modules/filter/entity/filter.schema';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  career: string;

  @Prop([String])
  images: string[];

  @Prop()
  age: number;

  @Prop()
  description: string;

  @Prop({ type: [String], default: [] })
  likes: string[];   // IDs de usuarios a los que dio like

  @Prop({ type: [String], default: [] })
  matches: string[]; // IDs de matches confirmados

  @Prop({ type: FilterSchema, default: {} })
  filters: Filter;
}

export const UserSchema = SchemaFactory.createForClass(User);
