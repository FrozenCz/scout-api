import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';

@Entity('categories')
@Tree('closure-table')
export class CategoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @TreeChildren({ cascade: true })
  children: CategoryEntity[];

  @TreeParent()
  parent: CategoryEntity;
}
