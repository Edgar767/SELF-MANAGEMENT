import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { MarvelModel } from '../../models/Marvel.model';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {

  constructor(private comic: MarvelService) { }

  comics: MarvelModel[] = [];

  ngOnInit(): void {

    this.comic.getComic().subscribe((response:any)=>{

      console.log(response.data.results);

      this.comics = response.data.results;
      
    })
  }

}
