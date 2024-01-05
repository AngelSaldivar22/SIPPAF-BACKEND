import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Acuerdos } from "../model/acuerdos.entity";
import { Repository } from "typeorm";
import { CrearAcuerdoDto } from '../dto/crear-acuerdos.dto'
import { UpdateAcuerdoDto } from "../dto/actualizar-acuerdos.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { BorradoLogicoAcuerdoDto } from "../dto/borradologico-acuerdos.dto";

@Injectable()
export class AcuerdoService {    
    
    constructor(@InjectRepository(Acuerdos) private acuerdooRepository: Repository<Acuerdos>) { 

    }

    public async createAcu(acu: CrearAcuerdoDto) {
        const newAcuerdo = this.acuerdooRepository.create(acu);
        return this.acuerdooRepository.save(newAcuerdo);
    }
    
    //Obtiene Acuerdos
    public async getAcus() {
        try {
            return this.acuerdooRepository.find();   

        } catch (error) {
            throw new Error(error.message);
        }        
    }

    //Obtiene un acreditado
    public async getAcu(id: number) {
        try {
            return this.acuerdooRepository.findOne({
                where: {
                    id_SeguimientoCOPER: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    //borrrado logico
    deleteAcu(id: number, acu: BorradoLogicoAcuerdoDto ) {
        try {
            return this.acuerdooRepository.update({id_SeguimientoCOPER: id}, acu)
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateAcu(id: number, acu: UpdateAcuerdoDto) {
        try {
            return this.acuerdooRepository.update({id_SeguimientoCOPER: id}, acu)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    
}