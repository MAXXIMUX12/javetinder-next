import { Controller, Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FilterService } from '../service/filter.service';
import { SelectGeneroRequest, SelectFacultadRequest, UpdateGeneroRequest, UpdateFacultadRequest } from '../dto/filter.request.dto';

@Controller('filter')
export class FilterController {
    constructor(private readonly filterService: FilterService) {}

    @Get('genero')
    listGeneros() {
        return this.filterService.listGeneros();
    }

    @Get('facultad')
    listFacultades() {
        return this.filterService.listFacultades();
    }

    @Post('select/genero/:userId')
    selectGenero(@Param('userId') userId: string, @Body() body: SelectGeneroRequest) {
        return this.filterService.selectGenero(userId, body.genero);
    }

    @Post('select/facultad/:userId')
    selectFacultad(@Param('userId') userId: string, @Body() body: SelectFacultadRequest) {
        return this.filterService.selectFacultad(userId, body.facultad);
    }

    @Put('update/genero/:userId')
    updateGenero(@Param('userId') userId: string, @Body() body: UpdateGeneroRequest) {
        return this.filterService.updateGenero(userId, body.genero);
    }

    @Put('update/facultad/:userId')
    updateFacultad(@Param('userId') userId: string, @Body() body: UpdateFacultadRequest) {
        return this.filterService.updateFacultad(userId, body.facultad);
    }

    @Delete('delete/:userId/:filter')
    deleteFilter(@Param('userId') userId: string, @Param('filter') filter: 'genero' | 'facultad' | 'carrera') {
        return this.filterService.deleteFilter(userId, filter);
    }

}
