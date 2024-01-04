import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_Usuarios'})
export class Usuario {
    @PrimaryGeneratedColumn('increment')
    id_Usuario: number;
    @Column()
    s_Usuario: string;
    @Column()
    id_Perfil: number;
    @Column()
    s_Contrasenia: string;
    @Column()
    s_CorreoElectronico: string;
    @Column()
    swc_ReiniciarContrasenia: boolean
    @Column()
    swc_Habilitar: boolean
    @Column()
    swc_Activo: boolean
}