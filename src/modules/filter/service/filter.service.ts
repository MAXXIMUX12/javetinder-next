import { Injectable, NotFoundException } from '@nestjs/common';
import { FilterRepository } from '../repository/filter.repository';

@Injectable()
export class FilterService {
    constructor(private readonly filterRepository: FilterRepository) {}

    listGeneros() {
        return ["Male", "Female"];
    }

    listFacultades() {
        return [ 
            "Economic and admin Sciences", 
            "Humanities and Social Sciences",
            "Health Sciences",
            "Creation and Habitat",
            "Engineering"
        ];
    }

    async selectGenero(userId: string, genero: string) {
        const user = await this.filterRepository.setFilter(userId, 'filters.genero', genero);
        if (!user) {throw new NotFoundException("User not found");}
        return user.filters;
    }

    async selectFacultad(userId: string, facultad: string) {
        const user = await this.filterRepository.setFilter(userId, 'filters.facultad', facultad);
        if (!user) {throw new NotFoundException("User not found");}
        return user.filters;
    }

    updateGenero(userId: string, genero: string) {
        return this.selectGenero(userId, genero);
    }

    updateFacultad(userId: string, facultad: string) {
        return this.selectFacultad(userId, facultad);
    }

    async deleteFilter(userId: string, filter: 'genero' | 'facultad' | 'carrera') {
        const user = await this.filterRepository.removeFilter(
            userId,
            `filters.${filter}`,
        );
        if (!user) {throw new NotFoundException('User not found');}
        return { deleted: true };
    }

}
