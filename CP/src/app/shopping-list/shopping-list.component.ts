import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingSer } from './shoppingserv.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',

})
export class ShoppingListComponent {

  constructor(private shoppingService: shoppingSer){}

    ingredient: Ingredient[] = this.shoppingService.ingredients;

}
