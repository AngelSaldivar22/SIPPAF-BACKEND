import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";



@Entity({name: 'tbC_Etapa'})
export class Etapa {
    @PrimaryGeneratedColumn({type: 'int'})
    id_Etapa: number;

    @Column({type: 'varchar', nullable: false, default: ''})
    s_Etapa: string;

    @Column({type: 'boolean', nullable: false, default: false})
    swc_Activo: boolean;
}