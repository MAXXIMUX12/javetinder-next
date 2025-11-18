import { IsOptional, IsString, IsArray, IsBoolean } from "class-validator";

export class UpdateProfileRequestDto {
    @IsOptional()
    @IsString()
    career?: string;

    @IsOptional()
    @IsArray()
    images?: string[];

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsBoolean()
    lookingForSeriousRelationship?: boolean;
}