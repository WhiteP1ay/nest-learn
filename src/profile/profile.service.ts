import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  create(createProfileDto: CreateProfileDto, userId: number) {
    return this.profileRepository.save({
      ...createProfileDto,
      user: { id: userId },
      created_at: new Date(),
      updated_at: new Date(),
    });
  }

  findAll() {
    return this.profileRepository.find({
      relations: ['user'],
    });
  }

  findOne(userId: number) {
    return this.profileRepository.findOne({
      where: { user: { id: userId } },
    });
  }

  async update(userId: number, updateProfileDto: UpdateProfileDto) {
    const profile = await this.findOne(userId);
    if (!profile) {
      throw new Error('Profile not found');
    }

    return this.profileRepository.save({
      ...profile,
      ...updateProfileDto,
      updated_at: new Date(),
    });
  }

  remove(userId: number) {
    return this.profileRepository.delete({
      user: { id: userId },
    });
  }
}
