import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_Bitacora'})
export class Bitacora {
    @PrimaryGeneratedColumn('increment')
    id_Bitacora: number;
    
    @Column()
    id_Acreditado: number;
    
    @Column()
    id_Propuesta: number;
    
    @Column()
    id_Especialista: number;

    @Column()
    id_TipoActividad: number;

    @Column()
    s_Descripcion: string;

    @Column()
    id_Documento: number;

    @Column()
    s_DireccionIP: string;

    @Column()
    f_Inicial: string;

    @Column()
    f_Final: string;

    @Column()
    swc_Activo: boolean;
}