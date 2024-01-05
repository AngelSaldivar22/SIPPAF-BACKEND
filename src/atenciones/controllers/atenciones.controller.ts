import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { CrearAtencionesDto } from "../dto/crear-atenciones.dto";
import { Atenciones } from "../model/atenciones.entity";
import { AtencionesResponse } from "../response/atenciones-response";
import { AtencionesService } from "../services/atenciones.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { BorradoLogicoAtencionesDto } from "../dto/borrado-logico-atenciones.dto";
import { UpdateAtencionDto } from "../dto/actualizar-atenciones.dto";

@Controller('atenciones')
export class AtencionesController {

    constructor(private atencionService: AtencionesService) {}

    @Get()
    public async getAtenciones(): Promise<BaseResponse<Array<Atenciones>>> {
        const respuesta = await this.atencionService.getAtents();
        const resultado: BaseResponse<Array<AtencionesResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getAtencion(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Atenciones>> {
        const respuesta = await this.atencionService.getAtent(id);
        const resultado : BaseResponse<Array<AtencionesResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearAtencion(@Body() newAtencion: CrearAtencionesDto): Promise<BaseResponse<CrearAtencionesDto>> {
        const respuesta = await this.atencionService.createAtent(newAtencion);
        const resultado : BaseResponse<Array<AtencionesResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async deleteAtencion(@Param('id', ParseIntPipe) id: number,@Body() aten: BorradoLogicoAtencionesDto): Promise<BaseResponse<void>> {
        await this.atencionService.updateAtent(id,aten);
        const resultado : BaseResponse<Array<AtencionesResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }


    @Patch(':id')
    public async updateAtent(@Param('id', ParseIntPipe) id: number, @Body() aten: UpdateAtencionDto): Promise<BaseResponse<void>> {
        await this.atencionService.updateAtent(id, aten);
        const resultado : BaseResponse<Array<AtencionesResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}