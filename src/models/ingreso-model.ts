import { LoteModel } from '../models/lote-model';
import { ChacraModel } from '../models/chacra-model';

export class IngresoModel {

    id: number;
    nroRemito: number;
    fechaIngreso: string;
    viajeId: number;
    chacraId: number;
    createdFor: string;
    lotes: Array<LoteModel>;
    chacras: Array<ChacraModel>;
    chacra: ChacraModel;

    constructor(id: number, nroRemito: number, fechaIngreso: string, viajeId: number, chacraId: number,
    	createdFor: string, lotes: Array<LoteModel>, chacras: Array<ChacraModel>, chacra: ChacraModel) {
        
        this.id = id;
        this.nroRemito = nroRemito;
        this.fechaIngreso = fechaIngreso;
        this.viajeId = viajeId;
        this.chacraId = chacraId;
        this.createdFor = createdFor;
        this.lotes = lotes;
        this.chacras = chacras;
        this.chacra = chacra;
    }
}