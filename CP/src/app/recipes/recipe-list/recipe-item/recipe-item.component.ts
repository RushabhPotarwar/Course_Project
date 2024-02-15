import { Component, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {

 
  @Input() recipe: Recipe  // from recipe-list component
   @Input() index: number; // from recipe-list component


}
