import { Acao, AcoesApi } from './modelo/acoes';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AcoesService {
  readonly url = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public getAcoes(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;

    return this.http
      .get<AcoesApi>(`${this.url}/acoes`, { params })
      .pipe(
        tap((valor) => console.log(valor)),
        // map((api) => api.payload),
        pluck('payload'),
        map((acoes) =>
          acoes.sort((acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB))
        )
      );
  }

  private ordenaPorCodigo(acaoA: Acao, acaoB: Acao) {
    if (acaoA.codigo > acaoB.codigo) {
      return 1;
    }
    if (acaoA.codigo < acaoB.codigo) {
      return -1;
    }
    return 0;
  }
}
