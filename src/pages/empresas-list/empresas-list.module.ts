import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpresasList } from './empresas-list';

@NgModule({
  declarations: [
    EmpresasList,
  ],
  imports: [
    IonicPageModule.forChild(EmpresasList),
  ],
  entryComponents: [
  	EmpresasList
  ],
})
export class EmpresasListModule {}