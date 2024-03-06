import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('advertisements')
export class AdvertisementEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;
}
