import { Injectable } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Pokemon } from './donnees-pokemon/pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class PokemonService{
    pokemon: any = null;
    private pokemonUrl = 'api/pokemon'

    constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient){

    }

    private log(log: string){
        console.info(log);
    }

    private handleError<T>(operation= 'operation', result?: T){
        return (error: any) : Observable<T> => {
            console.log(error);
            console.log(`${operation} failed : $error.message`);
            return of(result as T);
        }
    }

    //Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
            tap(_ => this.log(`fetched pokemon`)),
            catchError(this.handleError<any>(`getPokemon`, []))
        );
    }

    //Retourne le pokémon avec l'id
    getPokemon(id: number): Observable<Pokemon>{
        const url = `${this.pokemonUrl}/${id}`;

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log(`fetched pokemon id= ${id}`)),
            catchError(this.handleError<Pokemon>(`getPokemon id= ${id}`))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon>{
        const httpOptions = {
            headers: new HttpHeaders({"Content-type ": 'application/json'})
        };

        return this.http.put<Pokemon>(this.pokemonUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('updatePokemon'))
        );
    }
    
    deletePokemon(pokemon: Pokemon): Observable<Pokemon>{
        const url = `${this.pokemonUrl}/${pokemon.id}`;
        const httpOptions = {
            headers: new HttpHeaders({"Content-type ": 'application/json'})
        };

        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('deletePokemon'))
        )
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Spectre', 'Psy', 'Dragon'];
    }


    goBack(pokemon: any = null){
        let link: any = []
        if (pokemon){
            link = ['/pokemon', pokemon.id];
        }else{
            link = ['/pokemon/all'];
        }
        this.router.navigate(link);
    }

    searchPokemons(name: string): Observable<Pokemon[]> {
		if (!name.trim()) {
			// si le terme de recherche n'existe pas, on renvoie un tableau vide.
			return of([]);
		}

		return this.http.get<Pokemon[]>(`api/pokemon/?name=${name}`).pipe(
			tap(_ => this.log(`found pokemons matching "${name}"`)),
			catchError(this.handleError<Pokemon[]>('searchPokemons', []))
		);
	}
}