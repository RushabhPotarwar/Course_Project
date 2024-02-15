import { Component, OnInit } from '@angular/core';
import { recipeService } from './recipeserv.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [recipeService]
})
export class RecipesComponent implements OnInit {

  constructor(){}

  ngOnInit(){}


}
