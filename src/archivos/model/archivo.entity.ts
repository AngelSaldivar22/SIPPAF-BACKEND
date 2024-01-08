import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";


@Entity({name: 'tb_Documentos'})
export class Archivo {
    @PrimaryGeneratedColumn({type: 'int'})
    id_Documento: number;
    @Column()
    id_Propuesta: number;
    @Column()
    id_TipoDocumento: number;
     @Column()
     i_identificadorEtapa: number;
     @Column()
     id_Etapa: number;
     @Column()
     s_NombreDocumento: string;
     @Column()
     b_DocumentoBinario: string;
     @Column()
     swc_Activo: boolean;
}