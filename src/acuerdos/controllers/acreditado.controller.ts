import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { UpdateAcreditadoDto } from "../dto/actualizar-acreditado.dto";
import { CrearAcreditadoDto } from "../dto/crear-acreditado.dto";
import { Acreditado } from "../model/acreditado.entity";
import { AcreditadoResponse } from "../response/acreditado-response";
import { AcreditadoService } from "../services/acreditado.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { BorradoLogicoAcreditadoDto } from "../dto/borradologico-acreditado.dto";

@Controller('acreditados')
export class AcreditadoController {

    constructor(private acreditadoService: AcreditadoService) {}

    @Get()
    public async getAcreditados(): Promise<BaseResponse<Array<Acreditado>>> {
        const respuesta = await this.acreditadoService.getAccredits();
        const resultado: BaseResponse<Array<AcreditadoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getAcreditado(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Acreditado>> {
        const respuesta = await this.acreditadoService.getAccredit(id);
        const resultado : BaseResponse<Array<AcreditadoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearAcreditado(@Body() newAcreditado: CrearAcreditadoDto): Promise<BaseResponse<CrearAcreditadoDto>> {
        const respuesta = await this.acreditadoService.createAccredit(newAcreditado);
        const resultado : BaseResponse<Array<AcreditadoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch('remove/:id')
    public async deleteAccredit(@Param('id', ParseIntPipe) id: number, @Body() acre: BorradoLogicoAcreditadoDto): Promise<BaseResponse<void>> {
        await this.acreditadoService.updateAccredit(id,acre);
        const resultado : BaseResponse<Array<AcreditadoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateAccredit(@Param('id', ParseIntPipe) id: number, @Body() acre: UpdateAcreditadoDto): Promise<BaseResponse<void>> {
        await this.acreditadoService.updateAccredit(id, acre);
        const resultado : BaseResponse<Array<AcreditadoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}