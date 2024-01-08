import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, JoinColumn, ManyToOne } from "typeorm";
import { Propuesta } from "src/propuestas/model/propuesta.entity";



@Entity({name: 'tb_Documentos'})
export class Archivo {
    @PrimaryGeneratedColumn({type: 'int'})
    id_Documento: number;

    @ManyToOne(() => Propuesta, (propuesta) => propuesta.id_Propuesta)
    @JoinColumn({ name: "id_Propuesta" }) 
    propuesta: Propuesta;

    // @ManyToOne(() => TipoDocumento, (tipoDocumento) => tipoDocumento.id_TipoDocumento)
    // @JoinColumn({ name: "id_TipoDocumento" })
    // tipoDocumento: TipoDocumento;
    // @Column({type: 'int', nullable: false, default: ''})
    // id_TipoDocumento: number;
    // @Column({type: 'int', nullable: false, default: ''})
    // i_identificadorEtapa: number;
    // @Column({type: 'int', nullable: false, default: ''})
    // id_Etapa: number;
    //  @Column({type: 'int', nullable: false, default: ''})
    //  s_NombreDocumento: string;
    // @Column({type: 'varchar', nullable: false, default: ''})
    // b_DocumentoBinario: string | null;
    // @Column({type: 'boolean', nullable: false, default: ''})
    // swc_Activo: boolean;
}