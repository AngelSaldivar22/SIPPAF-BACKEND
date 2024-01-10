import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Propuesta } from "src/propuestas/model/propuesta.entity";
import { TipoDocumento } from "src/tipo-documento/model/tipo-documento.entity";
import { Etapa } from "src/etapa/model/etapa.entity";



@Entity({name: 'tb_Documentos'})
export class Archivo {
    @PrimaryGeneratedColumn({type: 'int'})
    id_Documento: number;

    @ManyToOne(() => Propuesta, (propuesta) => propuesta.id_Propuesta)
    @JoinColumn({ name: "id_Propuesta" }) 
    propuesta: Propuesta;

    @ManyToOne(() => TipoDocumento, (tipoDocumento) => tipoDocumento.id_TipoDocumento)
    @JoinColumn({ name: "id_TipoDocumento" })
    tipoDocumento: TipoDocumento;

    @ManyToOne(() => Etapa, (etapa) => etapa.id_Etapa)
    @JoinColumn({ name: "id_Etapa" })
    etapa: Etapa;

    @ManyToOne(() => Etapa, (i_Etapa) => i_Etapa.id_Etapa )
    @JoinColumn({ name: "i_IdentificadorEtapa" })
    i_etapa: Etapa

    @Column({type: 'varchar', nullable: false, default: ''})
    s_NombreDocumento: string;

    @Column({type: 'varchar', nullable: false, default: ''})
    b_DocumentoBinario: string | null;

    @Column({type: 'boolean', nullable: false, default: false})
    swc_Activo: boolean;
}