import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_AtencionesAcreditados'})
export class Atenciones {
    @PrimaryGeneratedColumn('increment')
    id_AtencionAcreditado: number;
    @Column()
    f_Atencion: string;
    @Column()
    id_MedioAtencion: number;
    @Column()
    s_QuienElaboro: string;
    @Column()
    s_Tercero: string;
    @Column()
    s_Calle: string;
    @Column()
    id_EntidadFederativa: number;
    @Column()
    s_Municipio: string;
    @Column()
    s_Telefono: string;
    @Column()
    s_CorreoElectronico: string;
    @Column()
    id_TipoPropuesta: number;
    @Column()
    id_Especialista: number;
    @Column()
    d_MontoPropuesta: string;
    @Column()
    s_Observaciones: string;
    @Column()
    swc_Activo: boolean;
}