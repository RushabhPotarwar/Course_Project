import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()

export class shoppingSer{

    ingredients : Ingredient[] = [
        new Ingredient('Apples', 7),
        new Ingredient('Banana', 10),
      ];

      addIngredient(ingred: Ingredient){
        this.ingredients.push(ingred);
      }

      addIngredientsToSL(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
      }

}