// produit.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string; // Ajouter ce champ
}

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule],
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  products: Product[] = [
    { id: 1, title: 'Smartphone Galaxy S21', price: 799.99, description: 'Un smartphone haut de gamme avec un écran AMOLED de 6,2 pouces, triple caméra, et 128 Go de stockage interne.', imageUrl: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-74826/SamsungGalaxys215g.jpg' },
    { id: 2, title: 'Casque Bose QuietComfort 35', price: 299.99, description: 'Un casque antibruit de haute qualité offrant une expérience sonore exceptionnelle et un confort prolongé.', imageUrl: 'https://www.parismatch.com/lmnr/var/pm/public/media/image/2022/06/23/11/Soldes-Cdiscount-le-casque-Bose-QC-35-II-est-disponible-a-un-prix-irresistible.jpg?VersionId=ZfxHWISRJ2pSyQIW3erqFn1njBc11kBp' },
    { id: 3, title: 'Ordinateur Portable Dell XPS 13', price: 1099.99, description: 'Un ordinateur portable ultrafin avec un écran de 13,3 pouces, un processeur Intel Core i7, et 16 Go de RAM.', imageUrl: 'https://cdn.lesnumeriques.com/optim/test/20/205859/390ebf6e-dell-xps-13-un-chassis-super-haut-de-gamme-pour-un-prix-accessible__1200_1200__544-0-4359-3815.jpg' },
    { id: 4, title: 'Montre Connectée Apple Watch Series 6', price: 399.99, description: 'Une montre connectée avancée avec des fonctionnalités de suivi de la santé, GPS intégré, et compatibilité avec de nombreuses applications.', imageUrl: 'https://leclaireur.fnac.com/wp-content/uploads/2020/10/Apple-Watch-Series-6-labofnac-2.jpg' },
    { id: 5, title: 'Enceinte Bluetooth JBL Charge 4', price: 149.99, description: 'Enceinte Bluetooth portable avec une autonomie de 20 heures et une résistance à l\'eau IPX7.', imageUrl: 'https://i0.wp.com/studio-residentiel-laboiteameuh.com/wp-content/uploads/2021/08/studio-la-boite-a-meuh-enceinte-bluetooth-jbl-charge-4-4.jpg?fit=1920%2C1080&ssl=1' },
    { id: 6, title: 'Tablette Samsung Galaxy Tab S7', price: 649.99, description: 'Tablette Android avec écran de 11 pouces, processeur Snapdragon, et support pour S Pen.', imageUrl: 'https://img.phonandroid.com/2020/07/Capture-12.jpg' }
  ];

  @Output() productSelected = new EventEmitter<Product>();

  onSelectProduct(product: Product): void {
    this.productSelected.emit(product);
  }
}
