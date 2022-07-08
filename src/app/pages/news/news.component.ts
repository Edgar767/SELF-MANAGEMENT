import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ArticleModel } from '../../models/Articles.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private NewsService: NewsService) { }
  public articles: ArticleModel[] = [];

  ngOnInit(): void {
    this.NewsService.getNews().subscribe((response: any)=>{
      console.log(response.articles);
      this.articles = response.articles;
    });
  }

}
