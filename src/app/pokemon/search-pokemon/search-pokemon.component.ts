import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../donnees-pokemon/pokemon';

import { ActivatedRoute, Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'search-pknm',
    templateUrl: './search-pokemon.component.html'
})
export class SearchPokemonComponent implements OnInit{
    private research = new Subject<string>();
    pokemons: any = null;

    constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService){

    }
    
    search(name: string): void{
        this.research.next(name);
    }

    ngOnInit(): void{
        this.pokemons = this.research.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correpsondant aux termes de la recherche
			switchMap((name: string) => this.pokemonService.searchPokemons(name)),
		);
    }

    goToDetail(pokemon: Pokemon): void {
		let link = ['/pokemon', pokemon.id];
		this.router.navigate(link);
	}
}