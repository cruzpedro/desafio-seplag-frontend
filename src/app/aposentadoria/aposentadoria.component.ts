import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../beneficio.service';
import { Beneficio } from '../shared/beneficio.model';
import { URL_ARQUIVOS } from '../app.api';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-aposentadoria',
  templateUrl: './aposentadoria.component.html',
  styleUrls: ['./aposentadoria.component.css']
})
export class AposentadoriaComponent implements OnInit {

  public beneficio: Beneficio;

  constructor(
    private beneficioService: BeneficioService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.beneficioService.beneficioAtual.subscribe(beneficio => this.beneficio = beneficio);
  }

  public getUrlArquivo() {
    let url = `${URL_ARQUIVOS}/${this.beneficio.arquivo}`; 
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
