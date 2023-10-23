import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.model';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent {

  // endereco: Endereco;
  logradouro: string = "";
  localidade: string = "";

  constructor(private client: HttpClient){ 
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit() : void{
    console.log("O componente foi carregado!");

    this.client.get<Endereco>("https://viacep.com.br/ws/80020010/json/")
      .subscribe({
        //Requisição com sucesso
        next: (endereco) => {
          console.log(endereco.logradouro, endereco.localidade);
          this.logradouro = endereco.logradouro;
          this.localidade = endereco.localidade;
        }, 
        //Requisição com erro
        error: (erro) => {
          console.log("Erro: " + erro);
        }
      })
  }

}
