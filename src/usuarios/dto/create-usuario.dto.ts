import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {

    @ApiProperty({
        description: 'Email do usuário',
        example: 'teste@teste.com', 
    })
    @IsNotEmpty({ message: 'O campo "email" não pode ficar vazio. Por favor, coloque seu email!'})
    @IsString({ message: 'O campo "email" precisa ser uma string!'})
    email: string;


    @ApiProperty({
        description: "Nome de usuário"
    })
    @IsNotEmpty({ message: 'O campo "nome" não pode ficar vazio. Por favor, coloque seu nome!'})
    @IsString({ message: 'O campo "nome" precisa ser uma string!'})
    nome: string;


    @ApiProperty({
        description: "A senha deve ter no mínimo 6 caracteres",
        example: "senhaforte1234",
        minLength: 6,
    })
    @IsNotEmpty({ message: 'O campo "senha" não pode ficar vazio. Por favor, coloque uma senha!'})
    @IsString({ message: 'O campo "senha" precisa ser uma string!'})
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.'})
    password: string;



    @ApiProperty({
        description: "Idade da pessoa (só o número)",
    })
    @IsNotEmpty({ message: 'O campo "idade" não pode ficar vazio. Por favor, coloque sua idade!'})
    idade: number;



    @ApiProperty({
        description: "Número de celular com DDD",
        example:"11976042007",
        minLength: 11,
    })
    @IsNotEmpty({ message: 'O campo "celular" não pode ficar vazio. Por favor, coloque seu número de celular!'})
    @IsString({ message: 'O campo "celular" precisa ser uma string!'})
    @MinLength(11, { message: 'O número de celular deve ter no mínimo 11 caracteres (coloque o DDD).'})
    celular: string;

}
