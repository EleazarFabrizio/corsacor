export class CreateEmpleadoDto {
  Legajo: number;
  Apellido: string;
  Nombre: string;
  Documento: string;
  Telefono: string;
  Email: string;
  Id_Ciudad: number;
  Id_Categoria_Empleado: number;
  Activo: boolean;
}