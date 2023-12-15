// <!-- ### Assignment 1: Automated Testing of a User Authentication System 
// Objective:
// Practice integrating classes and methods into a test script for a user authentication system.
// Instructions:
// 1. Create a class as `UserAuthenticator` 
// 2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
//    and password reset.
// 3. Create instance of the class and call the methods -->
var UserAuthenticator = /** @class */ (function () {
    function UserAuthenticator() {
    }
    UserAuthenticator.prototype.login = function (username, password) {
        console.log('Logging In Successfully');
        console.log("Login UserName is =>".concat(username, " Login Password is => ").concat(password));
    };
    UserAuthenticator.prototype.logout = function () {
        console.log('Logged Out Successfully');
    };
    UserAuthenticator.prototype.passwordreset = function (oldpwd, newpwd) {
        console.log('Password Reseted Successfully');
    };
    return UserAuthenticator;
}());
var userauth = new UserAuthenticator();
userauth.login('nandhinikannan', 'Nandhini@123');
userauth.logout();
userauth.passwordreset('Nandhini@123', 'Nandhini@12345');
