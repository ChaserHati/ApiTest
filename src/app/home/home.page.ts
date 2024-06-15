import { Component } from '@angular/core';

//API import
import { APIService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonList: any;
  pokemon: any = {
    id:null,
    name: '',
    url: ''
  }
  selectedPokemon: any={
    name : '',
    sprites: {
      other: {
        'official-artwork': {
          front_default: ''
        },
      },
    },
  }

  imagen: string= "";

  isModalOpen = false;

  constructor(private api: APIService) {}
  ionViewWillEnter(){
    this.getPokemonList();
  }
  capitalize(string:string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //metodos API
  getPokemonList(){
    this.api.getPokemonList().subscribe((data)=>{
      console.log(data.results)
      this.pokemonList=data.results;
    });
  }
  getPokemon(url:any){
    this.api.getPokemon(url).subscribe((data)=>{
      console.log(data)
      this.selectedPokemon=data;
      this.imagen=this.selectedPokemon.sprites.other['official-artwork'].front_default;
    })
  }
  setModalOpen(isOpen:boolean){
    this.isModalOpen=isOpen;
  }
  openPokemon(url:any){
    this.getPokemon(url);
    this.setModalOpen(true);
  }
}
