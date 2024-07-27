// detailproduit.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../produit/produit.component';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent {
  @Input() product: Product | null = null;

  selectedProduct: Product | null = null;
  closeDetails(): void {
    this.selectedProduct = null;
  }
}
