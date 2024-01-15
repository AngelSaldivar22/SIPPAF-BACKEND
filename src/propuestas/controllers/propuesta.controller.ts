import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { CrearPropuestaDto } from "src/propuestas/dto/crear-propuesta.dto";
import { UpdatePropuestaDto } from "src/propuestas/dto/actualizar-propuesta.dto";
import { Propuesta } from "src/propuestas/model/propuesta.entity";
import { PropuestaResponse } from "src/propuestas/response/propuesta-response";
import { PropuestaService } from "src/propuestas/services/propuesta.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { DesactivaPropuestaDto } from "../dto/desactivado-propuesta.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("Propuestas")
@Controller('propuestas')
export class PropuestaController {

    constructor(private propuestaService: PropuestaService) {}

    @Get()
    public async getPropuestas(): Promise<BaseResponse<Array<Propuesta>>> {
        const respuesta = await this.propuestaService.getPropuestas();
        const resultado: BaseResponse<Array<PropuestaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getUser(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Propuesta>> {
        const respuesta = await this.propuestaService.getPropuesta(id);
        const resultado : BaseResponse<Array<PropuestaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearUsuario(@Body() newPropuesta: CrearPropuestaDto): Promise<BaseResponse<CrearPropuestaDto>> {
        const respuesta = await this.propuestaService.createPropuesta(newPropuesta);
        const resultado : BaseResponse<Array<PropuestaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch('remove/:id')
    public async deleteUser(@Param('id', ParseIntPipe) id: number, @Body() propuesta: DesactivaPropuestaDto): Promise<BaseResponse<void>> {
        await this.propuestaService.deletePropuesta(id, propuesta);
        const resultado : BaseResponse<Array<PropuestaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: propuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateUser(@Param('id', ParseIntPipe) id: number, @Body() propuesta: UpdatePropuestaDto): Promise<BaseResponse<void>> {
        await this.propuestaService.updatePropuesta(id, propuesta);
        const resultado : BaseResponse<Array<PropuestaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}