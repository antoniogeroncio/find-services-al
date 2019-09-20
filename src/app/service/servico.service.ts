import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER_URL} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  listarServico(): Observable<any[]> {
    return this.http.get<any[]>(SERVER_URL + 'services.json');
  }

  consultarServicosPorTexto(texto: string) {
    return this.http.get<any[]>(SERVER_URL + 'services.json?q=' + texto);
  }
}
