import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Beneficio } from '../shared/beneficio.model';
import { BeneficioService } from '../beneficio.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-adicionar',
  templateUrl: './modal-adicionar.component.html',
  styleUrls: ['./modal-adicionar.component.css']
})
export class ModalAdicionarComponent implements OnInit {

  public closeResult: string;
  public beneficio: Beneficio;
  public tramitacao: number;
  public categoria: number;
  public arquivo: any;
  public msgSucesso: boolean = false;
  public msgFalha: boolean = false;
  @Input() public usuario: any;
  @Input() public tramitacoes: any[];
  @Input() public categorias: any[];
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private beneficioService: BeneficioService
  ) { }

  ngOnInit() {
    this.beneficioService.beneficioAtual.subscribe(beneficio => {
      this.beneficio = beneficio;
    });
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

  public selecionarTramitacao(tramitacao: number): void {
    this.tramitacao = tramitacao;
  }

  public selecionarCategoria(categoria: number): void {
    this.categoria = categoria;
  }

  public selecionarArquivo(input): void {
    this.arquivo = input.target.files[0];
  }

  public salvarBeneficio() {
    this.msgSucesso=false;
    this.msgFalha=false;

    let beneficio = {
      categoria: {id: this.categoria},
      tramitacao: {id: this.tramitacao},
      usuario: this.usuario
    };

    this.beneficioService.salvar(beneficio).subscribe(
      (retorno => {
        console.log('Beneficio Salvo ' + retorno.id);
        this.beneficioService.salvarArquivo(retorno.id, this.arquivo)
          .subscribe(
            retorno => {
              this.limparCampos();
              this.msgSucesso = true;
              this.close.emit(null);
            },
            error => this.msgFalha = true
          )
      }),
      (error => this.msgFalha = true)
    );
  }

  public limparCampos() {
    this.tramitacao = undefined;
    this.categoria = undefined;
    this.arquivo = undefined;
  }

}
