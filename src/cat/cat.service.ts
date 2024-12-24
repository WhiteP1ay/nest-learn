import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { ListAllEntities } from './dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CatService {
  private readonly cats: Cat[] = [];
  constructor(private readonly configService: ConfigService) {
    console.log('DB_USER', this.configService.get('DB_USER'));
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(query: ListAllEntities): Cat[] {
    return this.cats.slice(0, query.limit);
  }
}
