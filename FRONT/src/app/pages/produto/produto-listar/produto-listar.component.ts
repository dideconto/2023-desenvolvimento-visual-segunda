import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent {

  constructor(private client: HttpClient){ 
    //Um problema de CORS ao fazer uma requisição para a
    //nossa API
  }

  ngOnInit() : void{
    console.log("O componente foi carregado!");

    this.client.get("https://viacep.com.br/ws/01001000/json/")
      .subscribe({
        next: (dados : any) => {
          console.log(dados.logradouro);
        }
      })

  }

}
