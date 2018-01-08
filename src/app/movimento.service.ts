import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_API } from "./app.api";
import { Movimento } from "./shared/movimento.model";

@Injectable()
export class MovimentoService {
    constructor(private http: Http) {}

    public getMovimentacao(): Observable<Movimento[]> {
        return this.http.get(`${URL_API}/movimento`)
            .map(resposta => resposta.json());
    }
}