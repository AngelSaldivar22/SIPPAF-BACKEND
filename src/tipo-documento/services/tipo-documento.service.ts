import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CrearTipoDocumentoDto } from "src/tipo-documento/dto/crear-tipo-documento.dto";
import { UpdateTipoDocumentoDto } from "src/tipo-documento/dto/actualizar-tipo-documento.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { TipoDocumento } from "../model/tipo-documento.entity";

@Injectable()
export class TipoDocumentoService {    
    
    constructor(@InjectRepository(TipoDocumento) private tipoDocumentoRepository: Repository<TipoDocumento>) { }

    public async createFile(tipoDocumento: CrearTipoDocumentoDto) {

        try {
            const fileTypeFound = await this.tipoDocumentoRepository.findOne({
                where: {
                    id_TipoDocumento: tipoDocumento.id_TipoDocumento
                }
            })            
            
            if (fileTypeFound) {
                return new HttpException('El tipo de documento ya existe', RESPONSE_CODES.ERROR_DB_CODE);
            }
            if (!fileTypeFound) {
                const newTipoDocumento = this.tipoDocumentoRepository.create(tipoDocumento);
                return this.tipoDocumentoRepository.save(newTipoDocumento);
            }
            
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getFiles() {
        try {
            return this.tipoDocumentoRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getFile(id: number) {
        try {
            return this.tipoDocumentoRepository.findOne({
                where: {
                    id_TipoDocumento: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async deleteFileType(id: number) {
        try {
            return this.tipoDocumentoRepository.delete({id_TipoDocumento: id})
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateFile(id: number, archivo: UpdateTipoDocumentoDto) {
        try {
            return this.tipoDocumentoRepository.update({id_TipoDocumento: id}, archivo)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}