import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_Propuestas'})
export class Propuesta {
    @PrimaryGeneratedColumn('increment')
    id_Propuesta: number;
    
    @Column()
    id_Acreditado: number;
    
    @Column()
    f_RecepcionINDEP: string;
    
    @Column()
    f_RecepcionCRCA: string;

    @Column()
    f_RecepcionDocumento: string;

    @Column()
    id_TipoPropuesta: number;

    @Column()
    d_MontoMN: number;

    @Column()
    d_MontoUSD: number;

    @Column()
    s_MontoLetraMN: string;

    @Column()
    s_MontoLetraUSD: string;

    @Column()
    d_ValorCOPER: string;

    @Column()
    i_PlazoTotal: number;

    @Column()
    s_NumeroVolante: number;

    @Column()
    s_Observaciones: string;

    @Column()
    id_Usuario: number;

    @Column()
    id_Especialista: number;

    @Column()
    f_Captura: string;

    @Column()
    swc_Activo:boolean;
}