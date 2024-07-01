import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Servicio {
  @PrimaryGeneratedColumn()
  id_Servicio: number;

  @Column()
  Nombre: string;

  @Column()
  Cuit: string;

  @Column()
  Direccion: string;

  @Column()
  Id_Ciudad: number;

  @Column()
  Telefono: string;

  @Column()
  Id_Categoria_Servicio: number;

  @Column()
  Descripcion: string;

  @Column({ default: false })
  Eliminado: boolean;
}