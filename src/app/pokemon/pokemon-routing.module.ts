import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonComponent } from './list-pokemon/pokemon.component';
import { DetailsPokemonComponent } from './details-pokemon/details-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonRoutes: Routes = [
    {
        path: 'pokemon',
        children: [
            { path: 'all', component: PokemonComponent },
            { path: 'edit/:id', component: EditPokemonComponent },
            { path: ':id', component: DetailsPokemonComponent }
        ]
    }  
];

@NgModule({
  imports: [RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
