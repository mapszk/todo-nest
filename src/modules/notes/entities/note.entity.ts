import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true })
  description: string;
}
