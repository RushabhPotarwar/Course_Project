import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
      new Ingredient('Apples', 7),
      new Ingredient('Banana', 10),
    ];


    addIngredient(ingred: Ingredient){
      this.ingredients.push(ingred);
    }
}
