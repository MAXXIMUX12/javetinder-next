import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class Filter {
  @Prop()
  genero?: string;

  @Prop()
  facultad?: string;

  @Prop()
  carrera?: string;
}

export const FilterSchema = SchemaFactory.createForClass(Filter);
