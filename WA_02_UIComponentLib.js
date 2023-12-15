"use strict";
// ### Assignment 2: UI Component Library
Object.defineProperty(exports, "__esModule", { value: true });
//Button Class
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.prototype.render = function () {
        console.log("Returns Render Button Event");
    };
    Button.prototype.handleEvent = function () {
        console.log("Returns Handle Button Event");
    };
    return Button;
}());
//TextField class
var TextField = /** @class */ (function () {
    function TextField() {
    }
    TextField.prototype.render = function () {
        console.log("Returns Render Text Field Event");
    };
    TextField.prototype.handleEvent = function () {
        console.log("Returns Handle Text Field Event");
    };
    return TextField;
}());
//CheckBox class
var Checkbox = /** @class */ (function () {
    function Checkbox() {
    }
    Checkbox.prototype.render = function () {
        console.log("Returns Render Check Box Event");
    };
    Checkbox.prototype.handleEvent = function () {
        console.log("Returns Handle Check Box Event");
    };
    return Checkbox;
}());
var buttonObject = new Button();
buttonObject.render();
buttonObject.handleEvent();
var textFieldObject = new TextField();
textFieldObject.render();
textFieldObject.handleEvent();
var checkBoxObject = new Checkbox();
checkBoxObject.render();
checkBoxObject.handleEvent();
