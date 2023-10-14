import { IsEmail, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entity/user.entity';

export class CreateUserDTO {
  @IsNotEmpty()
  @ApiProperty({ description: "The user's name" })
  name: string;

  @IsEmail()
  @ApiProperty({ description: "The user's email address" })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ description: "The user's password" })
  password: string;

  @IsOptional()
  @ApiProperty({ description: "The user's phone number (optional)" })
  phone: string;

  @IsNotEmpty()
  @IsEnum(UserRole, { groups: ['all'] })
  @ApiProperty({
    description:
      "The user's role (e.g., farmer, individual_buyer, business_buyer)",
  })
  role: UserRole;
}
