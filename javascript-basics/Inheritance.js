//In simple terms Inheritance is : One class can take/reuse properties and methods from another class.
//Think of a parent and child.
//         User
//          │
//     ┌────┴────┐
//     ↓         ↓
//   Admin     Member
//Admin and Member are both users.
//So instead of writing the same things twice, we put the common stuff in User.

class User{
    info(username,email){
        this.username = username;
        this.email = email;
    }

    login(){
        console.log("User logged in sucessfully...")
    }
}

class Admin extends User{
   createAssociation(){
    console.log("Association created sucessfully");
   }
}

const admin = new Admin();
admin.login();
admin.createAssociation();