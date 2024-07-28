// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduitComponent } from "./produit/produit.component";
import { DetailproduitComponent } from "./detailproduit/detailproduit.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from './produit/produit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProduitComponent, DetailproduitComponent, FormsModule, CommonModule, NgbModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct: Product | null = null;

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeDetails(): void {
    this.selectedProduct = null;
  }
}
