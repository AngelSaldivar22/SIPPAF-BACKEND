import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UpdateArchivoDto } from "src/archivos/dto/actualizar-archivo.dto";
import { CrearArchivoDto } from "src/archivos/dto/crear-archivo.dto";
import { DesactivaArchivoDto } from "src/archivos/dto/desactiva-archivo.dto";
import { Archivo } from "src/archivos/model/archivo.entity";
import { ArchivoResponse } from "src/archivos/response/archivo-response";
import { ArchivoService } from "src/archivos/services/archivo.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";


@ApiTags("archivos")
@Controller('archivos')
export class ArchivoController {

    constructor(private archivoService: ArchivoService) {}

    // @Get()
    // public async getArchivos(): Promise<BaseResponse<Array<Archivo>>> {
    //     const respuesta = await this.archivoService.getFiles();
    //     const resultado: BaseResponse<Array<ArchivoResponse>> = {
    //         code: RESPONSE_CODES.SUCCESFULL,
    //         message: INTERNAL_MESSAGES.SUCCESFULL,
    //         data: respuesta,
    //         internalCode: '',
    //         correlationId: ''
    //     }
    //     return resultado;
    // }

    @Get()
    public async getArchivos(): Promise<BaseResponse<Array<ArchivoResponse>>> {
        const respuesta = await this.archivoService.getFiles();
        const resultado: BaseResponse<Array<ArchivoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta.map(archivo => new ArchivoResponse(archivo)), // Mapear a ArchivoResponse si es necesario
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    // @Get(':id')
    // public async getFile(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Archivo>> {
    //     const respuesta = await this.archivoService.getFile(id);
    //     const resultado : BaseResponse<Array<ArchivoResponse>> = {
    //         code: RESPONSE_CODES.SUCCESFULL,
    //         message: INTERNAL_MESSAGES.SUCCESFULL,
    //         data: respuesta,
    //         internalCode: '',
    //         correlationId: ''
    //     }
    //     return resultado;
    // }

    @Get(':id')
    public async getFile(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<ArchivoResponse>> {
        const respuesta = await this.archivoService.getFile(id);
        const resultado : BaseResponse<ArchivoResponse> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: new ArchivoResponse(respuesta), // Mapear a ArchivoResponse si es necesario
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Post()
    public async crearArchivo(@Body() newArchivo: CrearArchivoDto): Promise<BaseResponse<CrearArchivoDto>> {
        const respuesta = await this.archivoService.createFile(newArchivo);
        const resultado : BaseResponse<Array<ArchivoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch('remove/:id')
    public async deleteFile(@Param('id', ParseIntPipe) id: number, @Body() archivo: DesactivaArchivoDto): Promise<BaseResponse<void>> {
        await this.archivoService.deleteFile(id, archivo);
        const resultado : BaseResponse<Array<ArchivoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: archivo,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    @Patch(':id')
    public async updateFile(@Param('id', ParseIntPipe) id: number, @Body() fileName: UpdateArchivoDto): Promise<BaseResponse<void>> {
        await this.archivoService.updateFile(id, fileName);
        const resultado : BaseResponse<Array<ArchivoResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
}