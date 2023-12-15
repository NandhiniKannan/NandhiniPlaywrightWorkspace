"use strict";
// ### Assignment 3: Social Media Platform Features (TypeScript)
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post() {
    }
    Post.prototype.render = function () {
        console.log("Post Implemented from UIComponent");
    };
    Post.prototype.handleEvent = function () {
        console.log("Post Implemented from UIComponent");
    };
    Post.prototype.sharePost = function () {
        console.log("Post Implemented from SocialMedia");
    };
    return Post;
}());
var Comment = /** @class */ (function () {
    function Comment() {
    }
    Comment.prototype.render = function () {
        console.log("Comment Implemented from UIComponent");
    };
    Comment.prototype.handleEvent = function () {
        console.log("Comment Implemented from UIComponent");
    };
    Comment.prototype.sharePost = function () {
        console.log("Comment Implemented from SocialMedia");
    };
    return Comment;
}());
var Like = /** @class */ (function () {
    function Like() {
    }
    Like.prototype.render = function () {
        console.log("Like Implemented from UIComponent");
    };
    Like.prototype.handleEvent = function () {
        console.log("Like Implemented from UIComponent");
    };
    Like.prototype.sharePost = function () {
        console.log("Like Implemented from SocialMedia");
    };
    return Like;
}());
var postObject = new Post();
postObject.sharePost();
postObject.render();
postObject.handleEvent();
var commentObject = new Comment();
commentObject.sharePost();
commentObject.render();
commentObject.handleEvent();
var likeObject = new Like();
likeObject.sharePost();
likeObject.render();
likeObject.handleEvent();
