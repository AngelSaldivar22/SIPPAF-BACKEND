import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { UpdateUsuarioDto } from "src/dto/actualizar-usuario.dto";
import { CrearUsuarioDto } from "src/dto/crear-usuario.dto";
import { Usuario } from "src/model/usuario.entity";
import { UsuarioResponse } from "src/response/usuario-response";
import { UsuarioService } from "src/services/usuario.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";

@Controller('usuarios')
export class UsuarioController {

    constructor(private usuarioService: UsuarioService) {}

    @Get()
    public async getUsuarios(): Promise<BaseResponse<Array<Usuario>>> {
        const respuesta = await this.usuarioService.getUsers();
        const resultado: BaseResponse<Array<UsuarioResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getUser(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Usuario>> {
        const respuesta = await this.usuarioService.getUser(id);
        const resultado : BaseResponse<Array<UsuarioResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearUsuario(@Body() newUsuario: CrearUsuarioDto): Promise<BaseResponse<CrearUsuarioDto>> {
        const respuesta = await this.usuarioService.createUser(newUsuario);
        const resultado : BaseResponse<Array<UsuarioResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Delete(':id')
    public async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<void>> {
        await this.usuarioService.deleteUser(id);
        const resultado : BaseResponse<Array<UsuarioResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUsuarioDto): Promise<BaseResponse<void>> {
        await this.usuarioService.updateUser(id, user);
        const resultado : BaseResponse<Array<UsuarioResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}