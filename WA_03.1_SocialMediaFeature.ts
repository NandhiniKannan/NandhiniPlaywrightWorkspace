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

import { UIComponent } from "./WA_02.1_UIComponent";
import {SocialMediaFeature} from "./WA_03_SocialMedia";

class Post implements SocialMediaFeature , UIComponent
{
    render(): void {
        console.log("Post Implemented from UIComponent");
    }
    handleEvent(): void {
        console.log("Post Implemented from UIComponent");
    }
    sharePost(): void {
        console.log("Post Implemented from SocialMedia"); 
    }
}

class Comment implements SocialMediaFeature , UIComponent
{
    render(): void {
        console.log("Comment Implemented from UIComponent");
    }
    handleEvent(): void {
        console.log("Comment Implemented from UIComponent");
    }
    sharePost(): void {
        console.log("Comment Implemented from SocialMedia"); 
    }
}

class Like implements SocialMediaFeature , UIComponent
{
    render(): void {
        console.log("Like Implemented from UIComponent");
    }
    handleEvent(): void {
        console.log("Like Implemented from UIComponent");
    }
    sharePost(): void {
        console.log("Like Implemented from SocialMedia");
    }
}

const postObject = new Post();
postObject.sharePost();
postObject.render();
postObject.handleEvent();

const commentObject = new Comment();
commentObject.sharePost();
commentObject.render();
commentObject.handleEvent();

const likeObject = new Like();
likeObject.sharePost();
likeObject.render();
likeObject.handleEvent();
