import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('advertisements')
export class AdvertisementEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: AdvertisementStatus;
}

export enum AdvertisementStatus {
  created,
  in_approval,
  active,
  returned,
  canceled,
}
