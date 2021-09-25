import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LISTPOKEMON } from './pokemon/donnees-pokemon/mock-pokemon';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        let pokemon = LISTPOKEMON;
        return { pokemon }
    }
}