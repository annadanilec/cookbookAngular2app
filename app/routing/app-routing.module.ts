import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent }      from './../components/recipes/recipes.component';
import { RecipeDetailsComponent }      from './../components/recipe-details/recipe-details.component';
import { ShoppingListComponent }      from './../components/shopping-list/shopping-list.component';
import { AddRecipeComponent }      from './../components/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes',     component: RecipesComponent },
  { path: 'detail/:id', component: RecipeDetailsComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'add-recipe', component: AddRecipeComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
