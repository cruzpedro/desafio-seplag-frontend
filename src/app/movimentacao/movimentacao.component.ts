import { Component, OnInit } from '@angular/core';
import { MovimentoService } from '../movimento.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css'],
  providers: [MovimentoService]
})
export class MovimentacaoComponent implements OnInit {

  public movimentacao: any[];

  constructor(private movimentoService: MovimentoService) { }

  ngOnInit() {
    this.movimentoService.getMovimentacao().subscribe(retorno => this.movimentacao = retorno);
  }

}
