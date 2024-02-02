import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipeserv.service';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  constructor(private rec: recipeService){}

  ngOnInit(){
    this.recipes = this.rec.getRecipe();
  }
  
  recipes: Recipe[]

   //to recipes component



}
