import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_API } from "./app.api";
import { Beneficio } from "./shared/beneficio.model";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BeneficioService {

    private beneficioSource = new Subject<any>();
    beneficioAtual = this.beneficioSource.asObservable();

    constructor(private http: Http) {}

    public getBeneficios(): Observable<Beneficio[]> {
        return this.http.get(`${URL_API}/beneficio`)
            .map(resposta => resposta.json());
    }

    public salvar(beneficio: any): Observable<any>  {
        return this.http.post(`${URL_API}/beneficio`, beneficio)
            .map(resposta => resposta.json());
    }

    public salvarArquivo(id: number, arquivo: any): Observable<any>  {
        let formData = new FormData();
        formData.append('file', arquivo)
        console.log('salvando arquivo')
        return this.http.post(`${URL_API}/beneficio/${id}/salvarArquivo`, formData);
    }

    public selecionarBeneficio(beneficio: any): void {
        this.beneficioSource.next(beneficio);
    }

    public atualizarBeneficio(beneficio: any): Observable<any> {
        return this.http.put(`${URL_API}/beneficio/${beneficio.id}`, beneficio)
        .map(resposta => resposta.json());
    }
}