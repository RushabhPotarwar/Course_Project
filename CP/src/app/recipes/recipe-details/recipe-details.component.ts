import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipeserv.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {

  constructor(private rec: recipeService){}

  @Input() recipeDetails!: Recipe;

  onAddToShoppingList(){
    this.rec.addIngredTOShoppingList(this.recipeDetails.ingredients);
  }

}