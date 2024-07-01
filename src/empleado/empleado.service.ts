import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';

import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Empleado } from './entities/empleado.entity';


@Injectable()
export class EmpleadoService {

  @InjectRepository(Empleado)
  private EmpleadoRepository: Repository<Empleado>

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    try {
      const empleado = this.EmpleadoRepository.create(createEmpleadoDto);
      await this.EmpleadoRepository.save(empleado);
      return {
        statusCode: 200,
        msg: 'Se realizó con éxito la inserción',
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  public async findAll() {
    return await this.EmpleadoRepository.find();
  }

  public async findOne(id: number) {
    return await this.EmpleadoRepository.findOneBy({id_Empleado:id});;
  }

  public async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    await this.EmpleadoRepository.update(id,updateEmpleadoDto);
  }

  async remove(id: number) {
    const empleado = await this.EmpleadoRepository.findOneBy({id_Empleado:id});
    if (!empleado) {
      throw new NotFoundException(`Empleado con id ${id} no encontrado`);
    }
    
    // Cambiar el estado a inactivo en lugar de eliminar físicamente
    empleado.Activo = false;
  
    return await this.EmpleadoRepository.save(empleado);
  }
}
