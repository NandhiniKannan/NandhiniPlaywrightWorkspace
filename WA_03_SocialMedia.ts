// ### Assignment 3: Social Media Platform Features (TypeScript)
 
// Objective:
// Practice using interfaces with multiple implementation
 
// Instructions:
// 1. create an interface `SocialMediaFeature` with a method `sharePost()`.
// 2. Export the both SocialMediaFeature and UIComponent (From Assignment2)
// 2. Create `Post`, `Comment`, and `Like` classes and implement the `SocialMediaFeature` interface 
//    and UIcomponent
// 4. Create instances of `Post`, `Comment`, and `Like` and Call the methods to render, handle events, 
//    and share posts in a social media platform application.

interface SocialMediaFeature{
    
    sharePost():void;
    // shareLike():void;
    // shareComment():void;

}

export{SocialMediaFeature}