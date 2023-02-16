import { ItemStatus } from 'src/items/item-status.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  // 主キーか自動採番, 引数省略で連番になる
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // 通常のカラム
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  status: ItemStatus;

  @Column()
  createdAt: string;

  @Column()
  updatedAt: string;
}
