export abstract class BaseMapper<Dto, Entity> {
  abstract toEntity(dto: Dto): Entity;
  abstract toDto(entity: Entity): Dto;

  toEntityList(dtos: Dto[]): Entity[] {
    return dtos.map((dto) => this.toEntity(dto));
  }
}
