import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


export const materials = [MatIconModule, MatBadgeModule]


@NgModule({
  imports: [materials],
  exports:[materials]
})
export class AngularmaterialModule { }
