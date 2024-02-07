import { IsString } from "class-validator";

export class CreateMessageDto {
    // Content comes with the body of the request
    @IsString()
    content: string;
}