import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Servicio } from './entities/servicio.entity';

@Module({
  controllers: [ServicioController],
  providers: [ServicioService],
  imports: [TypeOrmModule.forFeature([Servicio])],
  exports:[ServicioService]
})
export class ServicioModule {}
