import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArtigoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Title: string;

  @Column()
  Text: string;

  @Column()
  Categoria: string;
}
