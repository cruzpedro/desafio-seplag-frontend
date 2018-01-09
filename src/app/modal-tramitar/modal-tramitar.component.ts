import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TramitacaoService } from '../tramitacao.service';
import { Input } from '@angular/core';
import { Tramitacao } from '../shared/tramitacao.model';
import { Beneficio } from '../shared/beneficio.model';
import { BeneficioService } from '../beneficio.service';

@Component({
  selector: 'app-modal-tramitar',
  templateUrl: './modal-tramitar.component.html',
  styleUrls: ['./modal-tramitar.component.css'],
  providers: [TramitacaoService]
})
export class ModalTramitarComponent implements OnInit {

  public closeResult: string;
  public beneficio: Beneficio;
  public tramitacao: any;
  public msgSucesso: boolean = false;
  public msgFalha: boolean = false;
  public msgAlerta: boolean = false;
  @Input() public tramitacoes: any[];
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private tramitacaoService: TramitacaoService,
    private beneficioService: BeneficioService
  ) { }

  ngOnInit() {
    this.beneficioService.beneficioAtual.subscribe(beneficio => this.beneficio = beneficio);
  }

  getTramitacoes() {
    let index = this.tramitacoes.indexOf(this.beneficio.tramitacao);
    this.tramitacoes.splice(index, 1);
    return this.tramitacoes;
  }

  public selecionarTramitacao(id: number): void {
    this.tramitacao = this.tramitacoes.find(tramitacao => tramitacao.id == id)
  }

  public tramitarBeneficio() {
    this.msgAlerta = false;
    this.msgSucesso = false;
    this.msgFalha = false;

    if (this.tramitacao.id == this.beneficio.tramitacao.id) {
      this.msgAlerta = true;
    } else {
      this.beneficio.tramitacao = this.tramitacao;
      this.beneficioService.atualizarBeneficio(this.beneficio).subscribe(
        retorno => {this.msgSucesso = true; this.close.emit(null);},
        error => this.msgFalha = true
      );
    }
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
