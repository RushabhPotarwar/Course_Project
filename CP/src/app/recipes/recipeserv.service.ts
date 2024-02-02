import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingSer } from "../shopping-list/shoppingserv.service";

@Injectable()

export class recipeService{

    constructor(private slService: shoppingSer){}

    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[]=[
        
    new Recipe('A fusilli pasta',
    'Fusilli pasta made with mushroom and cherry tomatoes in red sauce and topped with cheese and coriender', 
    'https://img.freepik.com/premium-photo/fusilli-pasta-with-mushrooms-asparagus-cherry-tomatoes-as-closeup-modern-design-plate_374109-2979.jpg?w=740',
    [new Ingredient('Pasta', 1),
    new Ingredient('mushrooms asparagus', 5),
    new Ingredient('cherry tomatoes', 10)]),
    
    new Recipe('Chocolate Cheesecake',
    'Chocolate cheesecake topped up with chocolate syrup, choco-chips and strawberries', 
    'https://img.freepik.com/free-photo/top-view-delicious-dessert-with-strawberries_23-2148622292.jpg?w=740&t=st=1706853196~exp=1706853796~hmac=4fe0b33a0bbee1de967c586a730e9310a9752c581295a0dd286bdd5e862ed51e',
    [new Ingredient('strawberries',10), 
    new Ingredient('choco-chips', 1),
    new Ingredient('chocolate syrup', 1)]),


    new Recipe('Sweet Pancakes', 
    'Pancakes topped with butter cube and honey', 
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D', 
    [new Ingredient('Honey',1), 
    new Ingredient('Butter', 2)])


    ]    
    


    getRecipe(){
        return this.recipes.slice();
    }

    addIngredTOShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredientsToSL(ingredient);
    }
}