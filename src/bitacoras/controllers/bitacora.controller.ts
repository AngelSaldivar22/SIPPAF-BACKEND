import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Put, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CrearBitacoraDto } from "src/bitacoras/dto/crear-bitacora.dto";
import { FiltrarBitacoraDto } from "src/bitacoras/dto/filtrado-bitacora.dto";
import { Bitacora } from "src/bitacoras/model/bitacora.entity";
import { BitacoraResponse } from "src/bitacoras/response/bitacora-response";
import { BitacoraService } from "src/bitacoras/services/bitacora.service";
import { RESPONSE_CODES, INTERNAL_MESSAGES } from "src/ultils/enums/messages-enum";
import { BaseResponse } from "src/ultils/response/base-response";


@ApiTags("Bitacoras")
@Controller('bitacoras')
export class BitacoraController {

    constructor(private bitacoraService: BitacoraService) {}

    //Busca totas las bitacoras
    @Get()
    public async getBitacoras(): Promise<BaseResponse<Array<Bitacora>>> {
        const respuesta = await this.bitacoraService.getBitacoras();
        const resultado: BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    //Busca por número de Bitacora
    @Get(':id')
    public async getBitacora(@Param('id', ParseIntPipe) id: number): Promise<BaseResponse<Bitacora>> {
        const respuesta = await this.bitacoraService.getBitacora(id);
        const resultado : BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    //Filtrado id acreditado
    @Get('/buscaA/:acreditado')
    public async getBiatcoraxAcreditado(@Param('acreditado', ParseIntPipe) acreditado: number): Promise<BaseResponse<void>> {
      //  await this.bitacoraService.getFilterBitacoras(acreditado, bitacora);
        const respuesta = await this.bitacoraService.getBitacoraxAcre(acreditado);
        const resultado : BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    //Filtrado id propuesta
    @Get('/buscaP/:propuesta')
    public async getBitacoraxPro(@Param('propuesta', ParseIntPipe) propuesta: number, @Body() bitacora: FiltrarBitacoraDto): Promise<BaseResponse<void>> {
        //  await this.bitacoraService.getFilterBitacoras(acreditado, bitacora);
        const respuesta = await this.bitacoraService.getBitacoraxProp(propuesta);
        const resultado : BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    
        //Filtrado id acreditado
        @Get('/buscaE/:especialista')
        public async getBiatcoraxEspecialista(@Param('especialista', ParseIntPipe) especialista: number): Promise<BaseResponse<void>> {
          //  await this.bitacoraService.getFilterBitacoras(acreditado, bitacora);
            const respuesta = await this.bitacoraService.getBitacoraxEsp(especialista);
            const resultado : BaseResponse<Array<BitacoraResponse>> = {
                code: RESPONSE_CODES.SUCCESFULL,
                message: INTERNAL_MESSAGES.SUCCESFULL,
                data: respuesta,
                internalCode: '',
                correlationId: ''
            }
            return resultado;
        }




    //Filtrado general
    @Get('/filtrado/')
    public async getBitacoraFilter(@Body() bitacora: Array<FiltrarBitacoraDto>): Promise<BaseResponse<void>> {
        //  await this.bitacoraService.getFilterBitacoras(acreditado, bitacora);
        const respuesta = await this.bitacoraService.getFilterBitacoras(bitacora);
        const resultado : BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }


    
    @Post()
    public async crearBitacora(@Body() newBitacora: CrearBitacoraDto): Promise<BaseResponse<CrearBitacoraDto>> {
        const respuesta = await this.bitacoraService.createBitacora(newBitacora);
        const resultado : BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: respuesta,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }

    /***
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
    ***/

    /***
    @Patch(':id')
    public async updateUser(@Param('id', ParseIntPipe) id: number, @Body() propuesta: UpdateBitacoraDto): Promise<BaseResponse<void>> {
        await this.bitacoraService.updatePropuesta(id, propuesta);
        const resultado : BaseResponse<Array<BitacoraResponse>> = {
            code: RESPONSE_CODES.SUCCESFULL,
            message: INTERNAL_MESSAGES.SUCCESFULL,
            data: null,
            internalCode: '',
            correlationId: ''
        }
        return resultado;
    }
    ***/
}