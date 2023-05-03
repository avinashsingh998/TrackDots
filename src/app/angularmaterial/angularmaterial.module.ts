import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


export const materials = [MatIconModule, MatBadgeModule, MatExpansionModule,MatAutocompleteModule]


@NgModule({
  imports: [materials],
  exports:[materials]
})
export class AngularmaterialModule { }
