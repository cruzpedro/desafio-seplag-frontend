import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Categoria } from "./shared/categoria.model";
import { URL_API } from "./app.api";
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriaService {
    constructor(private http: Http) {}

    public getCategorias(): Observable<Categoria[]> {
        return this.http.get(`${URL_API}/categoria`)
            .map(resposta => resposta.json());
    }
}