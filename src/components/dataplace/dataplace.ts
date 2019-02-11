import { Component } from '@angular/core';

import * as DataPlaceColombia  from '../../assets/data/colombia.js';

/**
 * Generated class for the DataplaceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dataplace',
  templateUrl: 'dataplace.html'
})
export class DataplaceComponent {


  DepartamentoItem:any[] = DataPlaceColombia.colombia;
  CiudadItem:any[] = [];  

  constructor() {
    
  }

  onChangeDepartamento(value:any) {
    // console.log(Obj);
    if(Number(value) != 0 )
    {

      

      this.CiudadItem = this.DepartamentoItem[Number(value)-1].ciudades;
      
    }
  }

}
