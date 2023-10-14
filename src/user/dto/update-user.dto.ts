import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {
  @IsOptional()
  @ApiProperty({ description: "The user's phone number (optional)" })
  phone: string;

  @IsNotEmpty()
  @ApiProperty({ description: "The user's name" })
  name: string;
}
