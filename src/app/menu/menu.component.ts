import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { TramitacaoService } from '../tramitacao.service';
import { Categoria } from '../shared/categoria.model';
import { Tramitacao } from '../shared/tramitacao.model';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
	providers: [CategoriaService, TramitacaoService]
})
export class MenuComponent implements OnInit {

	public tramitacoes: Tramitacao[];
	public categorias: Categoria[];

	constructor(
		private categoriaService: CategoriaService,
		private tramitacaoService: TramitacaoService
	) { }

	ngOnInit() {
		this.categoriaService.getCategorias().subscribe(retorno => this.categorias = retorno);
		this.tramitacaoService.getTramitacoes().subscribe(retorno => this.tramitacoes = retorno);
	}

}
