import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemon/pokemon';

import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'edit-pokemon',
    templateUrl: './edit-pokemon.component.html',
})
export class EditPokemonComponent implements OnInit{
    pokemon: any = null;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {

    }

    ngOnInit(){
        let id = +this.route.snapshot.params.id;
        //Récupérer un pokémon grâce à l'appel de la fonction dans le pokémon service
        this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }
}