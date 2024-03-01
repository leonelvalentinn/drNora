import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css',
})
export class PreguntasComponent implements AfterViewInit {
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.collapsible').collapsible();
    });
  }
}
