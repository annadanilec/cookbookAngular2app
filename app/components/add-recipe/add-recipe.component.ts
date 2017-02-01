import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
//Modules
import { Recipe } from './../../models/recipe';
//Services
import { RecipesService } from './../../services/recipes.service';

@Component({
  moduleId: module.id,
  selector: 'add-recipe',
  templateUrl: 'add-recipe.component.html',
  styleUrls: [ 'add-recipe.component.css' ]
})

export class AddRecipeComponent implements OnInit {
  recipes: Recipe[];

  myForm: FormGroup;
  public categories = [
    { value: 'Breakfast' },
    { value: 'Lunch' },
    { value: 'Dinner' },
    { value: 'Supper' },
    { value: 'Snack' }
  ];
  public addMessage: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private recipesService: RecipesService
  ) {

  }

  ngOnInit() {
    //we will initialize our form here
    this.myForm = this.formBuilder.group({
      cat: [],
      title: ['', [Validators.required, Validators.minLength(5)]],
      serving: ['', Validators.required],
      description: ['', Validators.required],
      image: ['app/images/default.png'],
      ingredients: this.formBuilder.array([
        this.initIngredients(),
      ])
    });
  }

  initIngredients() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required],
      value: ['', Validators.required]
    });
  }

  addIngredients() {
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this.initIngredients());
  }

  removeIngredients(i: number) {
    //remove from list
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.removeAt(i);
  }

  add(recipe: any): void {
    this.recipesService.addRecipe(recipe);
    this.addMessage = true;
    setTimeout(function() {
        this.addMessage = false;
    }.bind(this), 3000);
    this.myForm.reset();
  }
}
