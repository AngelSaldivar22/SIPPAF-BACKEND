export class CrearArchivoDto {    
    id_Documento?: number
    id_Propuesta?: number
    id_TipoDocumento?: number
    i_IdentificadorEtapa?: number
    id_Etapa?: number
    s_NombreDocumento?: string
    b_DocumentoBinario?: Buffer | null 
    swc_Activo?: boolean    
}