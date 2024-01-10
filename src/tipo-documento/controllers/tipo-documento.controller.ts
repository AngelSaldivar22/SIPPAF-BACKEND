import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { TipoDocumentoService } from "src/tipo-documento/services/tipo-documento.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";
import { TipoDocumentoResponse } from "../response/tipo-documento.response";
import { TipoDocumento } from "src/tipo-documento/model/tipo-documento.entity";
import { CrearTipoDocumentoDto } from "src/tipo-documento/dto/crear-tipo-documento.dto";
import { UpdateTipoDocumentoDto } from "../dto/actualizar-tipo-documento.dto";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("Tipos de Documentos")
@Controller('tipo-documento')
export class TipoDocumentoController { 

    constructor(private tipoDocumentoService: TipoDocumentoService) {}

    @Get()
    public async getTipoDocumentos(): Promise<BaseResponse<Array<TipoDocumento>>> {
        const respuesta = await this.tipoDocumentoService.getFileTypes();
        const resultado: BaseResponse<Array<TipoDocumentoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Get(':id')
    public async getFile(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<TipoDocumento>> {
        const respuesta = await this.tipoDocumentoService.getFileType(id);
        const resultado : BaseResponse<Array<TipoDocumentoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearTipoDocumento(@Body() newTipoDocumento: CrearTipoDocumentoDto): Promise<BaseResponse<CrearTipoDocumentoDto>> {
        const respuesta = await this.tipoDocumentoService.createFileType(newTipoDocumento);
        const resultado : BaseResponse<Array<TipoDocumentoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Delete(':id')
    public async deleteFileType(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<void>> {
        await this.tipoDocumentoService.deleteFileType(id);
        const resultado : BaseResponse<Array<TipoDocumentoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateFile(@Param('id', ParseIntPipe) id: number, @Body() fileTypeName: UpdateTipoDocumentoDto): Promise<BaseResponse<void>> {
        await this.tipoDocumentoService.updateFile(id, fileTypeName);
        const resultado : BaseResponse<Array<TipoDocumentoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}