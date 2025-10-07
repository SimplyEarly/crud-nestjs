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

  async findAll() {
    return await this.prisma.usuario.findMany();
  }

  async findOne(id: number) {
    const usuarioCadastrado = await this.prisma.usuario.findUnique({
      where: {id},
    });

    if(!usuarioCadastrado) {
      throw new Error('Usuário não cadastrado!')
    }
    return usuarioCadastrado;
  }

  async update(id: number, data: UpdateUsuarioDto) {
    const usuarioCadastrado = await this.prisma.usuario.findUnique({
      where: {
        id,
      }
    });

    if(!usuarioCadastrado) {
        throw new Error('Usuário não encontrado!');
    }
    return await this.prisma.usuario.update({
        data, 
        where: {
            id,
      }
    });
  }

  async remove(id: number) {
    const usuarioCadastrado = await this.prisma.usuario.findUnique({
      where: {id}

    })

    if(!usuarioCadastrado) {
      throw new Error ('Usuário não encontrado!')
    }

    return await this.prisma.usuario.delete({
      where: {id}
    })
}

}