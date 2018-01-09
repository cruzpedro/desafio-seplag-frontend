import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_API } from "./app.api";
import { Tramitacao } from "./shared/tramitacao.model";

@Injectable()
export class TramitacaoService {
    constructor(private http: Http) {}

    public getTramitacoes(): Observable<Tramitacao[]> {
        return this.http.get(`${URL_API}/tramitacao`)
            .map(resposta => resposta.json());
    }
}