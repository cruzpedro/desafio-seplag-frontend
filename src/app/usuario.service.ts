import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { URL_API } from "./app.api";
import { Usuario } from "./shared/usuario.model";

@Injectable()
export class UsuarioService {
    constructor(private http: Http) {}

    public getUsuarioPorId(id: number): Observable<Usuario[]> {
        return this.http.get(`${URL_API}/usuario?id=${id}`)
            .map(resposta => resposta.json()[0]);
    }
}