export interface Produto {
  nome: string;
  descricao: string;
  preco: number | null;
  quantidade: number | null;
  categoriaId: number | null;
}
