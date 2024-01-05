import { Injectable, HttpException, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "../model/usuario.entity";
import { Repository } from "typeorm";
import { CrearUsuarioDto } from '../dto/crear-usuario.dto'
import { UpdateUsuarioDto } from "../dto/actualizar-usuario.dto";
import { RESPONSE_CODES } from "src/ultils/enums/messages-enum";

@Injectable()
export class UsuarioService {    
    
    constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) { }

    public async createUser(user: CrearUsuarioDto) {

        try {
            const userFound = await this.usuarioRepository.findOne({
                where: {
                    s_CorreoElectronico: user.s_CorreoElectronico
                }
            })            
            
            if (userFound) {
                return new HttpException('El usuario ya existe', RESPONSE_CODES.ERROR_DB_CODE);
            }
            const newUsuario = this.usuarioRepository.create(user);
            return this.usuarioRepository.save(newUsuario);
        } catch (error) {
            throw new Error(error.message);
        }
    }
    
    public async getUsers() {
        try {
            return this.usuarioRepository.find();   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async getUser(id: number) {
        try {
            return this.usuarioRepository.findOne({
                where: {
                    id_Usuario: id
                }
            })   
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    public async deleteUser(id: number) {
        try {
            return this.usuarioRepository.delete({id_Usuario: id})
        } catch (error) {
            throw new Error(error.message);
        }        
    }

    updateUser(id: number, user: UpdateUsuarioDto) {
        try {
            return this.usuarioRepository.update({id_Usuario: id}, user)   
        } catch (error) {
            throw new Error(error.message);
        }        
    }
}