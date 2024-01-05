import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Atenciones } from "../model/atenciones.entity";
import { Repository } from "typeorm";
import { CrearAtencionesDto } from '../dto/crear-atenciones.dto'
import { UpdateAtencionDto } from "../dto/actualizar-atenciones.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";
import { BorradoLogicoAtencionesDto } from "../dto/borrado-logico-atenciones.dto";

@Injectable()
export class AtencionesService {    
    
    constructor(@InjectRepository(Atenciones) private atencionesRepository: Repository<Atenciones>) { }

    public async createAtent(aten: CrearAtencionesDto) {

        try {
            const newAtencion = this.atencionesRepository.create(aten);
            return this.atencionesRepository.save(newAtencion);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getAtents() {
        try {
            return this.atencionesRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getAtent(id: number) {
        try {
            return this.atencionesRepository.findOne({
                where: {
                    id_AtencionAcreditado: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    deleteAtent(id: number, aten: BorradoLogicoAtencionesDto) {
        try {
            return this.atencionesRepository.update({id_AtencionAcreditado: id},aten)
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateAtent(id: number, aten: UpdateAtencionDto) {
        try {
            return this.atencionesRepository.update({id_AtencionAcreditado: id}, aten)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}