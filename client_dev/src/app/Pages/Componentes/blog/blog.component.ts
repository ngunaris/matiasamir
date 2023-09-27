import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Ruta } from 'src/app/config';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogJson: any[]= [
    
  ];
  url = Ruta.url;

  
constructor(private blogService: BlogService){
  
}


ngOnInit() {
  
  this.blogService.getBlog().subscribe((respuesta: any) => {
   this.blogJson = respuesta["docs"];
  })


}

}
