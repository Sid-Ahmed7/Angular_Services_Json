import { Component, OnInit, inject } from '@angular/core';
import { Cocktail } from '../models/cocktail';
import { CocktailService } from '../services/cocktail.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent implements OnInit {
  

  cocktails: Cocktail[] = [];
  service = inject(CocktailService);

  constructor() {  }

  ngOnInit(): void {
    this.service.getCocktails().subscribe(data => {
    this.cocktails = data
   })
  }
}
