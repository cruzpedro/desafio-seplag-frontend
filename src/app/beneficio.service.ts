import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_API } from "./app.api";
import { Beneficio } from "./shared/beneficio.model";

@Injectable()
export class BeneficioService {
    constructor(private http: Http) {}

    public getBeneficios(): Observable<Beneficio[]> {
        return this.http.get(`${URL_API}/beneficio`)
            .map(resposta => resposta.json());
    }
}