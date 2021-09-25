import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../donnees-pokemon/pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector : 'form-pokemon',
  templateUrl: './form-pokemon.component.html'
})
export class FormPokemonComponent implements OnInit{

  types: any = []
  @Input() pokemon: any;

  constructor(private route: ActivatedRoute, private router: Router
    , private pokemonService : PokemonService
    ){}

  ngOnInit(){
    this.types = this.pokemonService.getPokemonTypes();
  }

  goBack(pokemon: Pokemon){
    this.pokemonService.goBack(this.pokemon);
  }

  // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
  hasType(type: string): boolean {
    let index = this.pokemon.types.indexOf(type);
    if (index > -1) return true;
    return false;
  }
  // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au pokémon en cours d'édition.
  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
        this.pokemon.types.push(type);
    } else {
        let index = this.pokemon.types.indexOf(type);
        if (index > -1) {
            this.pokemon.types.splice(index, 1);
        }
    }
  }
   // Valide le nombre de types pour chaque pokémon
   isTypesValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
        return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
        return false;
    }
    return true;
  }

  onSubmit():void{
    this.pokemonService.updatePokemon(this.pokemon).subscribe(() => this.goBack(this.pokemon));
  }
} 