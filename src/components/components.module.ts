import { NgModule } from '@angular/core';
import { FormcasalukerComponent } from './formcasaluker/formcasaluker';
import { DataplaceComponent } from './dataplace/dataplace';

@NgModule({
	declarations: [FormcasalukerComponent,
    DataplaceComponent],
	imports: [],
	exports: [FormcasalukerComponent,
    DataplaceComponent]
})
export class ComponentsModule {}
