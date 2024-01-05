import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Coper } from "../model/coper.entity";
import { Repository } from "typeorm";
import { CrearCoperDto } from '../dto/crear-coper.dto'
import { UpdateCoperDto } from "../dto/actualizar-coper.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { BorradoLogicoCoperDto } from "../dto/borradologico-coper.dto";

@Injectable()
export class CoperService {    
    
    constructor(@InjectRepository(Coper) private coperRepository: Repository<Coper>) { }

    public async createCopper(cop: CrearCoperDto) {

        try {
            const newCoper = this.coperRepository.create(cop);
            return this.coperRepository.save(newCoper);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    //Obtiene Copers
    public async getCoppers() {
        try {
            return this.coperRepository.find();   

        } catch (error) {
            throw new Error(error.message);
        }        
    }

    //Obtiene un coper
    public async getCopper(id: number) {
        try {
            return this.coperRepository.findOne({
                where: {
                    id_RegistroCOPER: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    //borrrado logico
    deleteCopper(id: number, cop: BorradoLogicoCoperDto) {
        try {
            return this.coperRepository.update({id_RegistroCOPER: id}, cop)
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateCopper(id: number, cop: UpdateCoperDto) {
        try {
            return this.coperRepository.update({id_RegistroCOPER: id}, cop)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    
}