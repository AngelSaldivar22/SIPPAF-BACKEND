import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { UpdateCoperDto } from "../dto/actualizar-coper.dto";
import { CrearCoperDto } from "../dto/crear-coper.dto";
import { Coper } from "../model/coper.entity";
import { CoperResponse } from "../response/coper-response";
import { CoperService } from "../services/coper.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { BorradoLogicoCoperDto } from "../dto/borradologico-coper.dto";

@Controller('coper')
export class CoperController {

    constructor(private coperService: CoperService) {}

    @Get()
    public async getCopers(): Promise<BaseResponse<Array<Coper>>> {
        const respuesta = await this.coperService.getCoppers();
        const resultado: BaseResponse<Array<CoperResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getCoper(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Coper>> {
        const respuesta = await this.coperService.getCopper(id);
        const resultado : BaseResponse<Array<CoperResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearCoper(@Body() newCoper: CrearCoperDto): Promise<BaseResponse<CrearCoperDto>> {
        const respuesta = await this.coperService.createCopper(newCoper);
        const resultado : BaseResponse<Array<CoperResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async deleteCopper(@Param('id', ParseIntPipe) id: number, @Body() cop: BorradoLogicoCoperDto): Promise<BaseResponse<void>> {
        await this.coperService.updateCopper(id,cop);
        const resultado : BaseResponse<Array<CoperResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateCopper(@Param('id', ParseIntPipe) id: number, @Body() cop: UpdateCoperDto): Promise<BaseResponse<void>> {
        await this.coperService.updateCopper(id, cop);
        const resultado : BaseResponse<Array<CoperResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}