import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Propuesta } from "src/propuestas/model/propuesta.entity";



@Entity({name: 'tbC_TipoDocumentos'})
export class TipoDocumento {
    @PrimaryGeneratedColumn({type: 'int'})
    id_TipoDocumento: number;

    @Column({type: 'varchar', nullable: false, default: ''})
    s_TipoDocumento: string;

    @Column({type: 'boolean', nullable: false, default: ''})
    swc_Activo: boolean;
}