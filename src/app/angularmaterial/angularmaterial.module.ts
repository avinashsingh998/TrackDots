import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


export const materials = [MatIconModule]


@NgModule({
  imports: [materials],
  exports:[materials]
})
export class AngularmaterialModule { }
