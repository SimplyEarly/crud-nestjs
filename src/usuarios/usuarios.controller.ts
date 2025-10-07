import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetUsuarioDto } from './dto/get-usuario.dto';


@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @ApiBody({
    type: CreateUsuarioDto,
    description: 'Espaço para a criação de um novo usuário!'
  })
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  @ApiResponse({
    type: GetUsuarioDto,
    description: 'Espaço para consulta dos dados dos usuários cadastrados!'
  })
  @Get()
  async findAll() {
    return this.usuariosService.findAll();
  }

  @ApiResponse({
    type: GetUsuarioDto,
    description: 'Espaço para consulta dos dados do usuário através do ID!'
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  @ApiBody({
    type: UpdateUsuarioDto,
    description: 'Espaço para edição dos dados do usuário cadastrado!'
  })
  @Patch(':id')
  async update(@Param('id') id: number, @Body() data: UpdateUsuarioDto) {
    return await this.usuariosService.update(Number(id), data);
  }

  @ApiBody({
    type: UpdateUsuarioDto,
    description: 'Espaço para deletar os dados do usuário cadastrado através do ID!'
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
