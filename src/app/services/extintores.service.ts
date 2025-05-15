import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Extintor {
  id_extintor: number;
  tipo: string;
  capacidad: string;
  ubicacion: string;
  fecha_instalacion: string;
  fecha_vencimiento: string;
  cliente_id: number;
}


@Injectable({
  providedIn: 'root'
})
export class ExtintoresService {
  private apiUrl = 'http://localhost:3000/api/extintores';

  constructor(private http: HttpClient) {}

  obtenerExtintores(): Observable<Extintor[]> {
    return this.http.get<Extintor[]>(this.apiUrl);
  }

  crearExtintor(data: Extintor): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  editarExtintor(id: number, data: Partial<Extintor>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarExtintor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  obtenerExtintorPorId(id: number): Observable<Extintor> {
  return this.http.get<Extintor>(`${this.apiUrl}/${id}`);
}

}
