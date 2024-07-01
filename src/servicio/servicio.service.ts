import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Servicio } from './entities/servicio.entity';

@Injectable()
export class ServicioService {

  @InjectRepository(Servicio)
  private ServicioRepository: Repository<Servicio>

  async create(createServicioDto: CreateServicioDto) {
    try {
      await this.ServicioRepository.save(createServicioDto);
      return {
        statusCode:200,
        msg: 'Se realizó con éxito la inserción',
      };
    }
    catch (error){
      return new BadRequestException(error);
    }
    };

  async findAll() {
    return await this.ServicioRepository.find();
  }

  async findOne(id: number) {
    return await this.ServicioRepository.findOneBy({id_Servicio:id});;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto) {
    await this.ServicioRepository.update(id,updateServicioDto);
  }

  async remove(id: number) {
    const servicio = await this.ServicioRepository.findOneBy({id_Servicio:id});
    if (!servicio) {
      throw new NotFoundException(`Servicio con id ${id} no encontrado`);
    }
    
    // Cambiar el estado a inactivo en lugar de eliminar físicamente
    servicio.Eliminado = true;
  
    return await this.ServicioRepository.save(servicio);
  }
}
