import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_Acreditados'})
export class Acreditado {
    @PrimaryGeneratedColumn('increment')
    id_Acreditado: number;
    @Column()
    s_Acreditado: string;
    @Column()
    s_PersonasRelacionadas: string;
    @Column()
    id_TipoCartera: number;
    @Column()
    id_SucursalBancaria: number;
    @Column()
    s_Calle: string;
    @Column()
    s_Colonia: string;
    @Column()
    s_Municipio: string;
    @Column()
    id_EntidadFederativa: number;
    @Column()
    s_Telefono: string;
    @Column()
    s_CorreoElectronico: string;
    @Column()
    s_Observaciones: string;
    @Column()
    id_Usuario: number;
    @Column()
    f_Captura: string;
    @Column()
    swc_Activo: boolean;
}