import { EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';


export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            "Tasty Schnitzel", 
            "A super-tasty Schnitzel - just awesome!", 
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/800px-Wiener-Schnitzel02.jpg",
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe(
            "Big Fat Burger", 
            "What else you need to say?", 
            "https://aht.seriouseats.com/images/20100331-fatburger-large.jpg",
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}