import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


const materials = [MatIconModule, MatBadgeModule, MatExpansionModule,MatAutocompleteModule, MatInputModule, MatFormFieldModule]


@NgModule({
  imports: [materials],
  exports:[materials]
})
export class AngularmaterialModule { }
