import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Acreditado } from "../model/acreditado.entity";
import { Repository } from "typeorm";
import { CrearAcreditadoDto } from '../dto/crear-acreditado.dto'
import { UpdateAcreditadoDto } from "../dto/actualizar-acreditado.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { BorradoLogicoAcreditadoDto } from "../dto/borradologico-acreditado.dto";

@Injectable()
export class AcreditadoService {    
    
    constructor(@InjectRepository(Acreditado) private acreditadoRepository: Repository<Acreditado>) { }

    public async createAccredit(acre: CrearAcreditadoDto) {

        try {
            /*const acreFound = await this.acreditadoRepository.findOne({
                where: {
                    s_CorreoElectronico: acre.s_CorreoElectronico
                }
            })            
            
            if (acreFound) {
                return new HttpException('El acreditado ya existe', RESPONSE_CODES.ERROR_DB_CODE)
                ;
            }*/
            const newAcreditado = this.acreditadoRepository.create(acre);
            return this.acreditadoRepository.save(newAcreditado);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    //Obtiene Acreditados
    public async getAccredits() {
        try {
            return this.acreditadoRepository.find();   

        } catch (error) {
            throw new Error(error.message);
        }        
    }

    //Obtiene un acreditado
    public async getAccredit(id: number) {
        try {
            return this.acreditadoRepository.findOne({
                where: {
                    id_Acreditado: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    //borrrado logico
    deleteAccredit(id: number, acre: BorradoLogicoAcreditadoDto ) {
        try {
            return this.acreditadoRepository.update({id_Acreditado: id}, acre)
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateAccredit(id: number, acre: UpdateAcreditadoDto) {
        try {
            return this.acreditadoRepository.update({id_Acreditado: id}, acre)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    
}