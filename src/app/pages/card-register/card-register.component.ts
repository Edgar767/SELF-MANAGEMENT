import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-register',
  templateUrl: './card-register.component.html',
  styleUrls: ['./card-register.component.css']
})
export class CardRegisterComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  card: CardModel = new CardModel();
  dataCard: CardModel[] = [
    {
      cardTitle: "CardTitle 1",
      description: "Descripción 1",
      button: "Boton 1",
      url: "https://media.istockphoto.com/photos/cat-holds-cup-of-ice-cream-and-cone-picture-id1324388573?k=20&m=1324388573&s=612x612&w=0&h=YBP2caOPyuJ2WRitlMcLmi6OPhUwkKMAXzVtwPin7ew="
    }
  ]
  addCard(card: CardModel) {
  this.dataCard.push(Object.assign({},card));
}

}
