import { PartialType } from '@nestjs/mapped-types';
import { RegisterDto } from './register';

export class UpdateUserDto extends PartialType(RegisterDto) {}
