import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post(':userId')
  create(
    @Body() createProfileDto: CreateProfileDto,
    @Param('userId') userId: string,
  ) {
    return this.profileService.create(createProfileDto, +userId);
  }

  @Get()
  findAll() {
    return this.profileService.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.profileService.findOne(+userId);
  }

  @Patch(':userId')
  update(
    @Param('userId') userId: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.profileService.update(+userId, updateProfileDto);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.profileService.remove(+userId);
  }
}
