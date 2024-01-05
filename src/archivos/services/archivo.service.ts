import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CrearArchivoDto } from "src/archivos/dto/crear-archivo.dto";
import { UpdateArchivoDto } from "src/archivos/dto/actualizar-archivo.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { Archivo } from "../model/archivo.entity";

@Injectable()
export class ArchivoService {    
    
    constructor(@InjectRepository(Archivo) private archivoRepository: Repository<Archivo>) { }

    public async createFile(user: CrearArchivoDto) {

        try {
            const fileFound = await this.archivoRepository.findOne({
                where: {
                    s_CorreoElectronico: user.s_CorreoElectronico
                }
            })            
            
            if (fileFound) {
                return new HttpException('El archivo ya existe', RESPONSE_CODES.ERROR_DB_CODE);
            }
            const newArchivo = this.archivoRepository.create(user);
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
                    id_Usuario: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async deleteFile(id: number) {
        try {
            return this.archivoRepository.delete({id_Usuario: id})
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateFile(id: number, user: UpdateArchivoDto) {
        try {
            return this.archivoRepository.update({id_Usuario: id}, user)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}