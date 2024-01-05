import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_RegistrosCOPER'})
export class Coper {
    @PrimaryGeneratedColumn('increment')
    id_RegistroCOPER: number;
    @Column()
    i_NumeroSesion: number;
    @Column()
    f_Sesion: string;
    @Column()
    id_Usuario: number;
    @Column()
    f_Captura: string;
    @Column()
    s_Observaciones: string;
    @Column()
    swc_Activo: boolean;
}