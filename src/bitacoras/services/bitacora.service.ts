import { Injectable, HttpException, InternalServerErrorException, Options } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bitacora } from "src/bitacoras/model/bitacora.entity";
import { Repository } from "typeorm";
import { CrearBitacoraDto } from 'src/bitacoras/dto/crear-bitacora.dto';
import {FiltrarBitacoraDto} from 'src/bitacoras/dto/filtrado-bitacora.dto';
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";

@Injectable()
export class BitacoraService {    
    
    constructor(@InjectRepository(Bitacora) private bitacoraRepository: Repository<Bitacora>) { }

    public async createBitacora(bitacora: CrearBitacoraDto) {
        try {
            const newBitacora = this.bitacoraRepository.create(bitacora);
            return this.bitacoraRepository.save(newBitacora);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getBitacoras() {
        try {
            return this.bitacoraRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getBitacora(id: number) {
        try {
            return this.bitacoraRepository.findOne({
                where: {
                    id_Bitacora: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getBitacoraxAcre(acreditado: number) {
        try {
            return this.bitacoraRepository.findBy({id_Acreditado: acreditado})   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getBitacoraxProp(propuesta: number) {
        try {
            return this.bitacoraRepository.findBy({id_Propuesta:propuesta})   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getBitacoraxEsp(especialista: number) {
        try {
            return this.bitacoraRepository.findBy({id_Especialista:especialista})   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getBitacoraxFecha(fechaIni: string, fechaFin:string) {
        try {
            return this.bitacoraRepository.findBy({f_Inicial:fechaIni, f_Final:fechaFin})   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    
    public async getFilterBitacoras(bitacora: FiltrarBitacoraDto) {
        try {
            return this.bitacoraRepository.findOneBy(bitacora) 
        } catch (error) {
            throw new Error(error.message);
        }        
    }


    /***
    deletePropuesta(id: number,propuesta: DesactivaPropuestaDto) {
        try {
            return this.propuestaRepository.update({id_Propuesta: id}, propuesta)
        } catch (error) {
            throw new Error(error.message);
        }        
    }
    ***/

    /***
    updatePropuesta(id: number, propuesta: UpdateBitacoraDto) {
        try {
            return this.bitacoraRepository.update({id_Propuesta: id}, propuesta)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
    ***/
}