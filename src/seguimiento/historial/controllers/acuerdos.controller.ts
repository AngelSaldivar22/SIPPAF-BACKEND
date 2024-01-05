import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { Acuerdos } from "../model/acuerdos.entity";
import { AcuerdosResponse } from "../response/acuerdos-response";
import { AcuerdoService } from "../services/acuerdos.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { CrearAcuerdoDto } from "../dto/crear-acuerdos.dto";
import { BorradoLogicoAcuerdoDto } from "../dto/borradologico-acuerdos.dto";
import { UpdateAcuerdoDto } from "../dto/actualizar-acuerdos.dto";

@Controller('historial')
export class HistorialController {

    constructor(private acuerdoService: AcuerdoService) {}

    @Get()
    public async getAcuerdos(): Promise<BaseResponse<Array<Acuerdos>>> {
        const respuesta = await this.acuerdoService.getAcus();
        const resultado: BaseResponse<Array<AcuerdosResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getAcuerdo(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Acuerdos>> {
        const respuesta = await this.acuerdoService.getAcu(id);
        const resultado : BaseResponse<Array<AcuerdosResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearAcuerdo(@Body() newAcuerdo: CrearAcuerdoDto): Promise<BaseResponse<CrearAcuerdoDto>> {
        const respuesta = await this.acuerdoService.createAcu(newAcuerdo);
        const resultado : BaseResponse<Array<AcuerdosResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async deleteAcuerdo(@Param('id', ParseIntPipe) id: number, @Body() acu: BorradoLogicoAcuerdoDto): Promise<BaseResponse<void>> {
        await this.acuerdoService.updateAcu(id,acu);
        const resultado : BaseResponse<Array<AcuerdosResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateAcuerdo(@Param('id', ParseIntPipe) id: number, @Body() acu: UpdateAcuerdoDto): Promise<BaseResponse<void>> {
        await this.acuerdoService.updateAcu(id, acu);
        const resultado : BaseResponse<Array<AcuerdosResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}