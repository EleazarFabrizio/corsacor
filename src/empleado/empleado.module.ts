import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';

@Module({
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
  imports: [TypeOrmModule.forFeature([Empleado])],
  exports:[EmpleadoService]
})
export class EmpleadoModule {}
