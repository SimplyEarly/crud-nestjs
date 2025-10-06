import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/prisma.service';
import { hash } from "bcryptjs";

@Injectable()
export class UsuariosService {
  constructor(private prisma: PrismaService){}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const encryptedPassword = await hash(createUsuarioDto.password, 11);

    const usuarioCreated = this.prisma.usuario.create({ 
      data: { ...createUsuarioDto, password: encryptedPassword, },
    });


    return usuarioCreated;
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    console.log(' ~ updateUsuarioDto:', updateUsuarioDto)
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
  

}
