import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from 'src/app/services/photo-service.service';
import { Photo } from 'src/app/modelos/product.model';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {


  photos: Photo[] = [];
  photoName: string = '';
  photo: Photo;

  constructor(private readonly photoService: PhotoServiceService) { }

  ngOnInit(): void {

    this.photoService.getPhotos().subscribe(photos => {
      this.photos = photos;
    })
  }

  editPhoto(photo: Photo) {
    
  }

  deletePhoto(photo: Photo) {

  }

  async createPhoto() {
  
  }

  onFileChange($event: Event) {

  
  }

}


