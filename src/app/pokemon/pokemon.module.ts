import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonComponent } from './list-pokemon/pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { BorderCardDirective } from './directives/border-card.directive';

import { FormsModule } from '@angular/forms';
import { FormPokemonComponent } from './edit-pokemon/form-pokemon.component';

import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';

import { PokemonRoutingModule } from './pokemon-routing.module';

import { PokemonService } from './pokemon.service';
import { LoaderComponent } from '../loader.component';

@NgModule({
  declarations: [
    PokemonComponent,
    SearchPokemonComponent,
    DetailsPokemonComponent,
    EditPokemonComponent,
    FormPokemonComponent,
    LoaderComponent,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PokemonRoutingModule
  ],
  providers: [
    PokemonService
  ],
  bootstrap: []
})
export class PokemonModule { }
