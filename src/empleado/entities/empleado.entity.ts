import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id_Empleado: number;

  @Column()
  Legajo: number;

  @Column()
  Apellido: string;

  @Column()
  Nombre: string;

  @Column()
  Documento: string;

  @Column()
  Telefono: string;

  @Column()
  Email: string;

  @Column()
  Id_Ciudad: number;

  @Column()
  Id_Categoria_Empleado: number;

  @Column({ default: true })
  Activo: boolean;
}