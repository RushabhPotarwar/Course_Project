import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import { shoppingSer } from './shopping-list/shoppingserv.service';
import { AppRouting } from './app-routing-module';
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting ,
    RouterModule 
  ],
  providers: [ shoppingSer],
  bootstrap: [AppComponent]
})
export class AppModule { }
