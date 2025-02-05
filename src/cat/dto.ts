export class CreateCatDto {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}

export class UpdateCatDto extends CreateCatDto {}

export class ListAllEntities {
  readonly limit: number;
}
