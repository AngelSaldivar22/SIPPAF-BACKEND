import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CrearTipoDocumentoDto } from "src/tipo-documento/dto/crear-tipo-documento.dto";
import { UpdateTipoDocumentoDto } from "src/tipo-documento/dto/actualizar-tipo-documento.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { Etapa } from "../model/etapa.entity";
import { CrearEtapaDto } from "../dto/crear-etapa.dto";
import { UpdateEtapaDto } from "../dto/actualizar-etapa.dto";

@Injectable()
export class EtapaService {    
    
    constructor(@InjectRepository(Etapa) private etapaRepository: Repository<Etapa>) { }

    public async createEtapa(etapa: CrearEtapaDto) {

        try {
            const fileTypeFound = await this.etapaRepository.findOne({
                where: {
                    id_Etapa: etapa.id_Etapa
                }
            })            
            
            if (fileTypeFound) {
                return new HttpException('La etapa ya existe', RESPONSE_CODES.ERROR_DB_CODE);
            }
                const newEtapa = this.etapaRepository.create(etapa);
                return this.etapaRepository.save(newEtapa);
            
            
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getEtapas() {
        try {
            return this.etapaRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getEtapa(id: number) {
        try {
            return this.etapaRepository.findOne({
                where: {
                    id_Etapa: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async deleteEtapa(id: number) {
        try {
            return this.etapaRepository.delete({id_Etapa: id})
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async updateEtapa(id: number, etapa: UpdateEtapaDto) {
        try {
            return this.etapaRepository.update({id_Etapa: id}, etapa)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}