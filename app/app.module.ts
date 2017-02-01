import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule } from './routing/app-routing.module';

//Imports for loading & configurating the in-memory web app-routing
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';
//Components
import { AppComponent }  from './app.component';
import { RecipesComponent }  from './components/recipes/recipes.component';
import { RecipeDetailsComponent }  from './components/recipe-details/recipe-details.component';
import { ShoppingListComponent }  from './components/shopping-list/shopping-list.component';
import { AddRecipeComponent }  from './components/add-recipe/add-recipe.component';
//Services
import { RecipesService }  from './services/recipes.service';
import { ShoppingListService }  from './services/shopping-list.service';

//Pipes
import { CategoryFilterPipe }  from './pipes/category-filter.pipe';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    JsonpModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    ShoppingListComponent,
    CategoryFilterPipe,
    AddRecipeComponent
  ],
  providers: [
    RecipesService,
    ShoppingListService
  ],
  bootstrap:    [ AppComponent ]
})


export class AppModule { }
