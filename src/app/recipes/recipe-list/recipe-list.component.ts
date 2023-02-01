import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipes[] = [
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg'),
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg'),
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg'),
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg'),
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg'),
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg'),
    new Recipes('TestRecipe', 'TestRecipe Description', 'https://i.redd.it/delaq3k0apw11.jpg')
  ];
}
