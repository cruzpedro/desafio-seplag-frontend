import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../movimento.service';
import { BeneficioService } from '../beneficio.service';

@Component({
	selector: 'app-movimentacao',
	templateUrl: './movimentacao.component.html',
	styleUrls: ['./movimentacao.component.css'],
	providers: [MovimentoService]
})
export class MovimentacaoComponent implements OnInit {

	public movimentacao: any[] = [];
	public beneficio: any;

	constructor(
		private movimentoService: MovimentoService,
		private beneficioService: BeneficioService
	) { }

	ngOnInit() {
		this.beneficioService.beneficioAtual.subscribe(beneficio => {
			this.beneficio = beneficio;
			this.movimentoService.getMovimentacaoPorBeneficio(beneficio)
				.subscribe(
					retorno => this.movimentacao = retorno,
					error => this.movimentacao = []
				);
		});
	}

}
