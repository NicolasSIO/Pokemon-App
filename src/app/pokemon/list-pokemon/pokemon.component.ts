import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../donnees-pokemon/pokemon';
import { PokemonService } from '../pokemon.service';

import { Router } from '@angular/router';

@Component({
  selector: 'list-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent implements OnInit {

  pokemons : Pokemon[];

  constructor(private router: Router, private pokemonService: PokemonService) { 
    this.pokemons = [];
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon){
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }
}
