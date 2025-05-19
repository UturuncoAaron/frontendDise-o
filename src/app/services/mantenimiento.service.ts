import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Mantenimiento {
  id_mantenimiento: number;
  fecha: string;
  descripcion: string;
  archivo: string;
  extintor_id: number;
  usuario_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  private apiUrl = 'http://localhost:3000/api/mantenimientos'; // Cambia al puerto de tu backend

  constructor(private http: HttpClient) { }

  getMantenimientos(): Observable<Mantenimiento[]> {
    return this.http.get<Mantenimiento[]>(this.apiUrl);
  }
  crearMantenimientos(data: Mantenimiento): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  editarMantenimientos(id: number, data: Partial<Mantenimiento>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  eliminarMantenimientos(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  obtenerMantenimientosPorId(id: number): Observable<Mantenimiento> {
    return this.http.get<Mantenimiento>(`${this.apiUrl}/${id}`);
  }
}
