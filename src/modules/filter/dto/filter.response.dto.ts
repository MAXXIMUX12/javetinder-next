export class ListGeneroResponse {
  generos: string[];
}

export class ListFacultadResponse {
  facultades: string[];
}

export class FilterResponse {
  genero?: string;
  facultad?: string;
  carrera?: string;
}

export class DeleteFilterResponse {
  deleted: boolean;
}
