import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { Etapa } from "src/etapa/model/etapa.entity";
import { EtapaService } from "../services/etapa.service";
import { EtapaResponse } from "../response/etapa.response";
import { UpdateEtapaDto } from "../dto/actualizar-etapa.dto";
import { CrearEtapaDto } from "../dto/crear-etapa.dto";

@Controller('/tipo-documento')
export class EtapaController { 

    constructor(private etapaService: EtapaService) {}

    @Get()
    public async getEtapas(): Promise<BaseResponse<Array<Etapa>>> {
        const respuesta = await this.etapaService.getEtapas();
        const resultado: BaseResponse<Array<EtapaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getEtapa(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Etapa>> {
        const respuesta = await this.etapaService.getEtapa(id);
        const resultado : BaseResponse<Array<EtapaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearEtapa(@Body() newEtapa: CrearEtapaDto): Promise<BaseResponse<CrearEtapaDto>> {
        const respuesta = await this.etapaService.createEtapa(newEtapa);
        const resultado : BaseResponse<Array<EtapaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Delete(':id')
    public async deleteEtapa(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<void>> {
        await this.etapaService.deleteEtapa(id);
        const resultado : BaseResponse<Array<EtapaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateEtapa(@Param('id', ParseIntPipe) id: number, @Body() fileTypeName: UpdateEtapaDto): Promise<BaseResponse<void>> {
        await this.etapaService.updateEtapa(id, fileTypeName);
        const resultado : BaseResponse<Array<EtapaResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}