import { ItemStatus } from 'src/items/item-status.enum';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

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

  @ManyToOne(() => User, (user) => user.items)
  user: User;

  @Column()
  userId: string;
}
