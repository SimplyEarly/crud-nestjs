import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';
import { ApiProperty } from '@nestjs/swagger';


export class DeleteUsuarioDto extends PartialType(CreateUsuarioDto) {
    @ApiProperty({
        description: 'Email do usuário',
        example: 'teste@teste.com', 
    })
    email: string;


    @ApiProperty({
        description: "Nome de usuário",
    })
    nome: string;


    @ApiProperty({
        description: "A senha deve ter no mínimo 6 caracteres",
        example: "senhaforte1234",
        minLength: 6,
    })
    password: string;



    @ApiProperty({
        description: "Idade da pessoa (só o número)",
    })
    idade: number;



    @ApiProperty({
        description: "Número de celular com DDD",
        example:"11976042007",
        minLength: 11,
    })
    celular: string;
}