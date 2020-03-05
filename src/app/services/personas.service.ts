import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../product.model';

@Injectable() // Se lo utiliza para poder inyectar el servcio en los modulos.

// tslint:disable-next-line:class-name
export class personasService {
constructor(
    private http: HttpClient
    ) {}
    getAllPersonas() {
        return this.http.get<[Persona]>('http://platzi-store.herokuapp.com/products');
    }


}
