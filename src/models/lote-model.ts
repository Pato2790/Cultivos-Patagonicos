import { CalidadModel } from '../models/calidad-model';
import { EspecieModel } from '../models/especie-model';
import { VariedadModel } from '../models/variedad-model';
import { ChacraModel } from '../models/chacra-model';
import { TratamientoModel } from '../models/tratamiento-model';
import { CuadroModel } from '../models/cuadro-model';

export class LoteModel {
    id: number;
    peso: number;
    nroLote: number;
    cantBins: number;
    calidadId: number;
    especieId: number;
    variedadId: number;
    tratamientoId: number;
    cuadroId: number;
    calidades: Array<CalidadModel>;
    calidad: CalidadModel;
    especies: Array<EspecieModel>;
    especie: EspecieModel;
    variedades: Array<VariedadModel>;
    variedad: VariedadModel;
    tratamientos: Array<TratamientoModel>;
    tratamiento: TratamientoModel;
    cuadros: Array<CuadroModel>;
    cuadro: CuadroModel;

    constructor(id: number, peso: number, nroLote: number, cantBins: number, calidadId: number, especieId: number,
    	variedadId: number, tratamientoId: number, cuadroId: number, calidades: Array<CalidadModel>,
    	calidad: CalidadModel, especies: Array<EspecieModel>, especie: EspecieModel, variedades: Array<VariedadModel>,
    	variedad: VariedadModel, tratamientos: Array<TratamientoModel>, tratamiento: TratamientoModel,
    	cuadros: Array<CuadroModel>, cuadro: CuadroModel){

        this.id = id;
    	this.peso = peso;
    	this.nroLote = nroLote;
    	this.cantBins = cantBins;
    	this.calidadId = calidadId;
    	this.especieId = especieId;
    	this.variedadId = variedadId;
    	this.tratamientoId = tratamientoId;
    	this.cuadroId = cuadroId;
    	this.calidades = calidades;
    	this.calidad = calidad;
    	this.especies = especies;
    	this.especie = especie;
    	this.variedades = variedades;
    	this.variedad = variedad;
    	this.tratamientos = tratamientos;
    	this.tratamiento = tratamiento;
    	this.cuadros = cuadros;
    	this.cuadro = cuadro;
    }
}