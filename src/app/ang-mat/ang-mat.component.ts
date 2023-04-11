import { Component } from '@angular/core';

@Component({
  selector: 'app-ang-mat',
  templateUrl: './ang-mat.component.html',
  styleUrls: ['./ang-mat.component.scss']
})
export class AngMatComponent {
  identificador = '0';
  cantidad = 0;
  modelo = '';
  titulo = "Busque el re--estreno";
  precioUnitario = 0;
  subtotal = 0;
  cambioClases = {}
  fontSize = false;
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

  alertar() {
    confirm("Quieres comprar este carro?");
  }
  decidirComprar(model: any) {
    this.modelo = model.title
    this.precioUnitario = model.precio;
  }


}
