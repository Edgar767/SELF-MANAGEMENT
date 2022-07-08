import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() cardTitle: string = "Título";
  @Input() description: string = "Descripción"
  // Esto es un comentario

  @Input() button: string = "boton";
  @Input() urlImage: string = "url";

  constructor() { }
  ngOnInit(): void {

  }

}