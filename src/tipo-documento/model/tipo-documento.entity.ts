import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";



@Entity({name: 'tbC_TiposDocumentos'})
export class TipoDocumento {
    @PrimaryGeneratedColumn({type: 'int'})
    id_TipoDocumento: number;

    @Column({type: 'varchar', nullable: false, default: ''})
    s_TipoDocumento: string;

    @Column({type: 'boolean', nullable: false, default: false})
    swc_Activo: boolean;
}