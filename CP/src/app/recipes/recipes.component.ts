import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  // @Output() details= new EventEmitter<{ name: string, discription: string, imagePath: string}>();
  selectedRecipe: Recipe

  selectRecipe(detail: Recipe){
   this.selectedRecipe=detail;
  }
  

}
