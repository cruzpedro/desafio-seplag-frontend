import { Tramitacao } from "./tramitacao.model"
import { Categoria } from "./categoria.model"
import { Usuario } from "./usuario.model"

export class Beneficio {
    constructor(
        public id: number,
        public tramitacao: Tramitacao,
        public categoria: Categoria,
        public usuario: Usuario,
        public arquivo: string
    ) { }
}