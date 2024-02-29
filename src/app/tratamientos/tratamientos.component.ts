import { Component } from '@angular/core';

interface Tratamientos {
  id: number;
  title: string;
  imgSrc: string;
}

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrl: './tratamientos.component.css',
})
export class TratamientosComponent {
  showServicios = false;

  Datos: Tratamientos[] = [
    { id: 15, title: 'Coronas', imgSrc: 'ortodoncia.svg' },
    { id: 16, title: 'Limpieza', imgSrc: 'ortodoncia.svg' },
    { id: 17, title: 'Estética Dental', imgSrc: 'ortodoncia.svg' },
    { id: 18, title: 'Odontopediatria', imgSrc: 'ortodoncia.svg' },
    { id: 19, title: 'Odontología General', imgSrc: 'ortodoncia.svg' },
  ];

  showServices() {
    this.showServicios = !this.showServicios;
  }
}
