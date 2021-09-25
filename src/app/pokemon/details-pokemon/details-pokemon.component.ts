import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../donnees-pokemon/pokemon';

import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'details-pokemon',
    templateUrl: './details-pokemon.component.html',
})
export class DetailsPokemonComponent implements OnInit{
    pokemon: any = null;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){
        
    }

    ngOnInit(){
        let id = +this.route.snapshot.params.id;
        //Récupérer un pokémon grâce à l'appel de la fonction dans le pokémon service
        this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }

    goBack(): void{
        this.pokemonService.goBack();
    }

    goEdit(pokemon: Pokemon): void{
        let link = ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    delete(pokemon: Pokemon){
        this.pokemonService.deletePokemon(pokemon).subscribe(() => this.goBack());
    }
}