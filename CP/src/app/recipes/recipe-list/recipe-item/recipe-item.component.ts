import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeService } from '../../recipeserv.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

  constructor(private rec : recipeService){}
  
  @Input() recipe: Recipe  // from recipe-list component
   //to recipe-list component

  detailsCall(){
    this.rec.recipeSelected.emit(this.recipe);
  }
}
