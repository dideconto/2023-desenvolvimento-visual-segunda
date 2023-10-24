import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Endereco } from 'src/app/models/endereco.model';
import { Produto } from 'src/app/models/produto.model';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent {

  produtos: Produto[] = [];

  constructor(private client: HttpClient){ 
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit() : void{
    console.log("O componente foi carregado!");

    this.client.get<Produto[]>("https://localhost:7195/api/produto/listar")
      .subscribe({
        //Requisição com sucesso
        next: (produtos) => {
          this.produtos = produtos;
          console.table(produtos);
        }, 
        //Requisição com erro
        error: (erro) => {
          console.log(erro);
        }
      })
  }

}
