
// -------------------chapter 01 Alert---------------------



// alert ("Thanks for Watching My page")



// -----------chapter 02 Variables for Strings--------------




// Keyword	Scope Type	Global ban sakta hai?	Wajah
// var	Function	Haan	Function ke bahar likhne se global ban jata hai
// let	Block	Nahi	Block ke andar hi limited rehta hai
// const	Block	Nahi	Block ke andar hi limited rehta hai





// var fullName = "Muhammad Aseel Ahmed";
// console.log(fullName);

// fullName = "Muhammad Aseel Ahmed Qadri"
// console.log(fullName);


// let age = 18
// console.log(age);

// age = 21
// console.log(age);


// const cast = "gadit"
// console.log(cast);

// cast = "pardesi"
// console.log(cast);  // change nahi hui



// -----------chapter 03 Variables for Strings--------------


// let weight01 = 210
// let weight02 = 210
// let newnumber = weight01 + weight02 
// console.log(newnumber);



// -----------chapter 04 Variables for Strings--------------


// Legal Variable Names (jo allowed hote hain):
// let username;
// let $price;
// let _id;
// let fullName;
// let student1;


// Illegal Variable Names (jo error denge)
// let 1user;    // ❌ Galat: number se start
// let full name; // ❌ Galat: space hai
// let @price;   // ❌ Galat: @ allowed nahi
// let var;      // ❌ Galat: "var" ek keyword hai



// ----- chapter 05 Math expressions: Familiar operators ------


// Operator	Kaam (Meaning)	Example
// +	Addition (jodna)	5 + 2 = 7
// -	Subtraction (ghatana)	5 - 2 = 3
// *	Multiplication (guna)	5 * 2 = 10
// /	Division (bhaag)	10 / 2 = 5
// %	Modulus (remainder lena)	10 % 3 = 1


// let a = 10;
// let b = 5;

// let addition = a + b;     // 15  
// let subtraction = a - b;  // 5
// let multiplication = a * b; // 50
// let division = a / b;     // 2
// let remainder = a % b;    // 0

// console.log(addition, subtraction, multiplication, division, remainder);



// ----- chapter 06 Math expressions: Unfamiliar operators ------


// Assignment Operators
// Ye operators variable ko value assign karte hain.


// Operator	  Naam	                Example    	Result
// =	    Simple Assignment   	let x = 5;	 x = 5
// +=	    Add and assign	        x += 3;	     x = x + 3
// -=	    Subtract and assign	    x -= 2;	     x = x - 2
// *=	    Multiply and assign	    x *= 2;	     x = x * 2
// /=	    Divide and assign	    x /= 2;	     x = x / 2   


// Comparison Operators
// Ye operators 2 values ko compare karte hain aur true ya false return karte hain.


// Operator	Naam	             Example            	Result
// ==	   Equal to	                   5 == 5	      true
// ===	   Strict Equal to	           5 === "5"	  false
// !=	   Not equal to	               5 != 3	      true
// >	   Greater than	               5 > 3	      true
// <	   Less than	               5 < 3	      false
// >=	   Greater than or equal to	   5 >= 3	      true
// <=	   Less than or equal to	   5 <= 3	      false


// Logical Operators
// Ye operators true ya false ke saath kaam karte hain (logical conditions).


// Operator	  Naam	        Example	              Result
// &&	        Logical AND	   true && false	       false
// `		                                 `	     Logical OR
// !	        Logical NOT	   !true	               false
