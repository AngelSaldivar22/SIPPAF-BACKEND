import {Timestamp } from "typeorm";

export class AcuerdosResponse {
    id_SeguimientoCOPER: number;
    i_NumeroSesion: number;
    f_Asignada: Timestamp;
    f_Presentacion: Timestamp;
    s_Acuerdo: string;
    f_Vencimiento: Timestamp;
    id_Documento: number;
    swc_Activo: boolean;
}