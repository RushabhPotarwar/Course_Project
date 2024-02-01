import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  
  recipes: Recipe[]=[new Recipe('A test recipee','This a for testing', 'https://i0.wp.com/picjumbo.com/wp-content/uploads/homemade-korean-dish-bibimbap-free-photo.jpg?w=600&quality=80'),new Recipe('A test recipee1', 'This a for testing HEHE', 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D')]

  @Output() detailsData= new EventEmitter<Recipe>();   //to recipes component

  recipeDetails(details: Recipe){
    this.detailsData.emit(details);
  }

}
