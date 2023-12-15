// ### Assignment 2: UI Component Library
 
// Objective:
// Practice creating interfaces and implementing them in classes for a UI component library.
 
// Instructions:
// 1. Create a TypeScript interface named `UIComponent` with methods `render()` and `handleEvent()`.
// 2. Create classes `Button`, `TextField`, and `Checkbox` that implement the `UIComponent` interface.
// 3. Implement the methods in each class to simulate rendering and handling events for UI components.
// 4. Create instances of all UI components  and call all the methods

import { UIComponent } from "./WA_02.1_UIComponent"; // given interface file name without .ts

//Button Class

class Button implements UIComponent{
    render():void {
        console.log("Returns Render Button Event");
    }
    handleEvent():void {
        console.log("Returns Handle Button Event");
    }
}

//TextField class

class TextField implements UIComponent{
    render() {
        console.log("Returns Render Text Field Event");
    }
    handleEvent() {
        console.log("Returns Handle Text Field Event");
    }
    
}

//CheckBox class

class Checkbox implements UIComponent{
    render() {
        console.log("Returns Render Check Box Event");
    }
    handleEvent() {
        console.log("Returns Handle Check Box Event");
    }
    
}

const buttonObject =new Button(); // obj/instance are same..... creating instance / obj
buttonObject.render();
buttonObject.handleEvent();

const textFieldObject = new TextField();
textFieldObject.render();
textFieldObject.handleEvent();

const checkBoxObject = new Checkbox();
checkBoxObject.render();
checkBoxObject.handleEvent();