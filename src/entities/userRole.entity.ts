import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { RoleList } from '../models/roleList';

@Entity('userRoles')
export class UserRoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  uuid: string;

  @ManyToOne(() => UserEntity, (user) => user.uuid)
  user: Promise<UserEntity>;
  @Column()
  userUuid: string;

  @Column()
  role: RoleList;
}
