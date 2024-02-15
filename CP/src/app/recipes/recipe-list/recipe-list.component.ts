import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipeserv.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{

  constructor(private rec: recipeService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.recipes = this.rec.getRecipe();
  }
  
  recipes: Recipe[]

  newRecipe(){
    this.router.navigate(['new'],{ relativeTo:this.route} )
  }


}
