import { style } from '@angular/animations';
import {Component} from '@angular/core';


 @Component(
{
  selector:'app-property-card',
   //template:'<h1>This is a property Card</h1>',
templateUrl:'property-card.component.html',
   //styles:['h1{color:red;background-color:black}']
styleUrls:['property-card.component.css']
}

 )

export class PropertyCardComponent{
Property:any={
"id":1,
"name":"Birla House",
"Type":"House",
"Price":12000
}
}
