import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { recipeService } from '../recipeserv.service';
import { ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private rec: recipeService, private route: ActivatedRoute, private router: Router){}

  recipeDetails!: Recipe;
  id: number;

  onAddToShoppingList(){
    this.rec.addIngredTOShoppingList(this.recipeDetails.ingredients);
  }

  ngOnInit(){
      this.route.params.subscribe((params: Params)=>{
        this.id= +params['id'];
        this.recipeDetails= this.rec.getRecipes(this.id);
      })
  }

  recipeEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}