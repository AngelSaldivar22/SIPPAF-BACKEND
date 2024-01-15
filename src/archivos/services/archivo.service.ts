import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CrearArchivoDto } from "src/archivos/dto/crear-archivo.dto";
import { UpdateArchivoDto } from "src/archivos/dto/actualizar-archivo.dto";
import { DesactivaArchivoDto } from "../dto/desactiva-archivo.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { Archivo } from "../model/archivo.entity";

@Injectable()
export class ArchivoService {    
    
    constructor(@InjectRepository(Archivo) private archivoRepository: Repository<Archivo>) { }

    public async createFile(archivo: CrearArchivoDto) {

        try {
            // const fileFound = await this.archivoRepository.findOne({
            //     where: {
            //         id_Documento: archivo.id_Documento
            //     }
            // })            
            
            // if (fileFound) {
            //     return new HttpException('El archivo ya existe', RESPONSE_CODES.ERROR_DB_CODE);
            // }
            const newArchivo = this.archivoRepository.create(archivo);
            return this.archivoRepository.save(newArchivo);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getFiles() {
        try {
            return this.archivoRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getFile(id: number) {
        try {
            return this.archivoRepository.findOne({
                where: {
                    id_Documento: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async deleteFile(id: number,archivo: DesactivaArchivoDto) {
        try {
            return this.archivoRepository.update({id_Documento: id}, archivo)
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async updateFile(id: number, archivo: UpdateArchivoDto) {
        try {
            return this.archivoRepository.update({id_Documento: id}, archivo)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}