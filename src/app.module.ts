import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadoModule } from './empleado/empleado.module';

import { Empleado } from './empleado/entities/empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpleadoController } from './empleado/empleado.controller';
import { EmpleadoService } from './empleado/empleado.service';
/*import { AuthModule } from './auth/auth.module';*/
import { ServicioModule } from './servicio/servicio.module';
import { Servicio } from './servicio/entities/servicio.entity';

@Module({
  imports: [EmpleadoModule, TypeOrmModule.forFeature([Empleado]),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'corsacor',
    entities: [Empleado,Servicio],
    synchronize: true,
  }),
  ServicioModule, /*AuthModule*/],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
