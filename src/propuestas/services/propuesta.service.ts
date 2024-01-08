import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Propuesta } from "src/propuestas/model/propuesta.entity";
import { Repository } from "typeorm";
import { CrearPropuestaDto } from 'src/propuestas/dto/crear-propuesta.dto'
import { UpdatePropuestaDto } from "src/propuestas/dto/actualizar-propuesta.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { DesactivaPropuestaDto } from "../dto/desactivado-propuesta.dto";

@Injectable()
export class PropuestaService {    
    
    constructor(@InjectRepository(Propuesta) private propuestaRepository: Repository<Propuesta>) { }

    public async createPropuesta(propuesta: CrearPropuestaDto) {
        try {
            const propuestaFound = await this.propuestaRepository.findOne({
                where: {
                   // id_Propuesta: propuesta.id_Propuesta,
                    id_Acreditado: propuesta.id_Acreditado,
                    f_RecepcionINDEP: propuesta.f_RecepcionINDEP,
                    f_RecepcionCRCA: propuesta.f_RecepcionCRCA,
                    f_RecepcionDocumento: propuesta.f_RecepcionDocumento,
                    id_TipoPropuesta: propuesta.id_TipoPropuesta,
                    d_MontoMN: propuesta.d_MontoMN,
                    d_MontoUSD: propuesta.d_MontoUSD,
                    s_MontoLetraMN: propuesta.s_MontoLetraMN,
                    s_MontoLetraUSD: propuesta.s_MontoLetraUSD,
                    d_ValorCOPER: propuesta.d_ValorCOPER,
                    i_PlazoTotal: propuesta.i_PlazoTotal,
                    s_NumeroVolante: propuesta.s_NumeroVolante,
                    s_Observaciones: propuesta.s_Observaciones,
                    id_Usuario: propuesta.id_Usuario,
                    id_Especialista: propuesta.id_Especialista,
                    f_Captura: propuesta.f_Captura,
                    swc_Activo:propuesta.swc_Activo
                }
            })            
            if (propuestaFound) {
                return new HttpException('La propuesta ya existe', RESPONSE_CODES.ERROR_DB_CODE);
            }
            const newPropuesta = this.propuestaRepository.create(propuesta);
            return this.propuestaRepository.save(newPropuesta);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getPropuestas() {
        try {
            return this.propuestaRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getPropuesta(id: number) {
        try {
            return this.propuestaRepository.findOne({
                where: {
                    id_Propuesta: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    deletePropuesta(id: number,propuesta: DesactivaPropuestaDto) {
        try {
            return this.propuestaRepository.update({id_Propuesta: id}, propuesta)
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updatePropuesta(id: number, propuesta: UpdatePropuestaDto) {
        try {
            return this.propuestaRepository.update({id_Propuesta: id}, propuesta)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}