import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from './recipeserv.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {

  constructor(private rec: recipeService){}

  ngOnInit(): void {
    this.rec.recipeSelected.subscribe((recipe : Recipe)=>{this.selectedRecipe=recipe})
  }
  selectedRecipe: Recipe 

}
