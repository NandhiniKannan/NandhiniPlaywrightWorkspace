// <!-- ### Assignment 1: Automated Testing of a User Authentication System 
 
// Objective:
// Practice integrating classes and methods into a test script for a user authentication system.
 
// Instructions:
// 1. Create a class as `UserAuthenticator` 
// 2. Create a methods like login(with 2 mandatory parameters and one optional parameter), logout, 
//    and password reset.
// 3. Create instance of the class and call the methods -->

class UserAuthenticator 
{
  
   login(username:String,password:string){

    console.log('Logging In Successfully');

    console.log(`Login UserName is =>${username} Login Password is => ${password}`);
      
    }

   logout()
   {

    console.log('Logged Out Successfully');
      
   }

   passwordreset(oldpwd:string, newpwd:string){
    console.log('Password Reseted Successfully');
      
   }
}

const userauth = new UserAuthenticator();
userauth.login('nandhinikannan','Nandhini@123');
userauth.logout();
userauth.passwordreset('Nandhini@123','Nandhini@12345');