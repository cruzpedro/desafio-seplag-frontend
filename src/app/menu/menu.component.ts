import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { TramitacaoService } from '../tramitacao.service';
import { Categoria } from '../shared/categoria.model';
import { Tramitacao } from '../shared/tramitacao.model';
import { Beneficio } from '../shared/beneficio.model';
import { BeneficioService } from '../beneficio.service';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../shared/usuario.model';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css'],
	providers: [CategoriaService, TramitacaoService, UsuarioService]
})
export class MenuComponent implements OnInit {

	public tramitacoes: Tramitacao[];
	public categorias: Categoria[];
	public beneficios: any[] = [];
	public usuario: any;

	constructor(
		private categoriaService: CategoriaService,
		private tramitacaoService: TramitacaoService,
		private beneficioService: BeneficioService,
		private usuarioService: UsuarioService
	) { }

	ngOnInit() {
		this.categoriaService.getCategorias().subscribe(categorias => this.categorias = categorias);
		this.tramitacaoService.getTramitacoes().subscribe(tramitacoes => this.tramitacoes = tramitacoes);
		this.beneficioService.getBeneficios().subscribe(beneficios => this.beneficios = beneficios);
		this.usuarioService.getUsuarioPorId(1).subscribe(usuario => {this.usuario = usuario; console.log(usuario)});
	}

	getBeneficio(idTramitacao: number, idCategoria): any[] {
		return this.beneficios.filter( (beneficio: any) => beneficio.tramitacao.id===idTramitacao && beneficio.categoria.id===idCategoria);
	}

	selecionarBeneficio(beneficio: any): void {
		this.beneficioService.selecionarBeneficio(beneficio);
	}

	getBeneficios() {
		this.beneficioService.getBeneficios().subscribe(beneficios => this.beneficios = beneficios);
	}

}
