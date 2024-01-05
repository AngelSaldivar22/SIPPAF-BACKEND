import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, Timestamp } from "typeorm";


@Entity({name: 'tb_SeguimientosCOPER'})
export class Acuerdos {
    @PrimaryGeneratedColumn('increment')
    id_SeguimientoCOPER: number;
    @Column()
    i_NumeroSesion: number;
    @Column()
    f_Asignada: string;
    @Column()
    f_Presentacion: string;
    @Column()
    s_Acuerdo: string;
    @Column()
    f_Vencimiento: string;
    @Column()
    id_Documento: number;
    @Column()
    swc_Activo: boolean;
}