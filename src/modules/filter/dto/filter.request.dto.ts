import { IsString } from 'class-validator';

export class SelectGeneroRequest {
  @IsString()
  genero: string;
}

export class SelectFacultadRequest {
  @IsString()
  facultad: string;
}

export class UpdateGeneroRequest {
  @IsString()
  genero: string;
}

export class UpdateFacultadRequest {
  @IsString()
  facultad: string;
}