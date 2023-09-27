import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Ruta } from 'src/app/config';

@Component({
  selector: 'app-blog-completo',
  templateUrl: './blog-completo.component.html',
  styleUrls: ['./blog-completo.component.css']
})
export class BlogCompletoComponent implements OnInit{
  public blogJson: any[]= [
    
  ];
  url = Ruta.url;


  constructor(private blogService: BlogService){


  }

  ngOnInit(){

    this.blogService.getBlog().subscribe((respuesta: any) => {
      this.blogJson = respuesta["docs"];
     })
}
}
