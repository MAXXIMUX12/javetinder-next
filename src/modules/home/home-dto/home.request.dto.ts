import { IsString } from "class-validator";
export class MatchRequestDto {
    @IsString()
    userId: string;
    @IsString()
    targetId: string;
    @IsString()
    like: boolean;
}