import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Produto } from "src/app/models/produto.model";

@Component({
  selector: "app-produto-cadastrar",
  templateUrl: "./produto-cadastrar.component.html",
  styleUrls: ["./produto-cadastrar.component.css"],
})
export class ProdutoCadastrarComponent {
  constructor(private client: HttpClient) {}

  produto: Produto = {
    nome: "",
    descricao: "",
    quantidade: null,
    preco: null,
    categoriaId: 1,
  };

  onSubmit(): void {
    this.client.post<Produto>("https://localhost:7195/api/produto/cadastrar", this.produto).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
}
