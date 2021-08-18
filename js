


# Call , Apply and Bind

>>> 

The call() method is a predefined JavaScript method. It is used to borrow the method from another object.

const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"AWANISH",
  lastName: "TRIPATHI"
}
// This will return "John Doe":
person.fullName.call(person1);

.........The call() method can accept arguments:

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"AWANISH",
  lastName: "T"
}

person.fullName.call(person1, "Noida", "INDIA");


The Difference Between call() and apply()
The difference is:

The call() method takes arguments separately.

The apply() method takes arguments as an array.

const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"AWANISH",
  lastName: "T"
}

person.fullName.call(person1, ["Noida", "INDIA"]);

If JavaScript Strict Mode
In JavaScript strict mode, if the first argument of the apply() method is not an object, it becomes the owner (object) of the invoked function. In "non-strict" mode, it becomes the global object.


Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns a new version of the function.

so in previous example if we look : person.fullName.bind(person1, ["Noida", "INDIA"]); // It will return the function definition

we need to assign it into variable then need to invoke/call;

so var bindCall = person.fullName.call(person1, ["Noida", "INDIA"]);

bindCall();


note:  The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.







