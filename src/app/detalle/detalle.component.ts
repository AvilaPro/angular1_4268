import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    this.getTitulo();
  }

  titulo: any;

  reestreno = [
    {
      title: '718',
      url:'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-718/normal/db4be0ec-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
      precio: 100000
    },
    {
      title: '911',
      url: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-911/normal/e7c2070d-f8f4-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
      precio: 125000
    },
    {
      title: 'Taycan',
      url: 'https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-icc-taycan/normal/253ef544-f8f5-11eb-80db-005056bbdc38;sP;twebp/porsche-normal.webp',
      precio: 145000
    }
  ];

  getTitulo(){
    this.titulo = this.route.snapshot.paramMap.get('id');
  }

}
