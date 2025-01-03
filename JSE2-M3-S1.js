/* 3.1.2 Primitives and autoboxing */

let strObj = new String("Do bats eat cats?");
console.log(typeof(strObj)); // -> object
console.log(strObj.length); // -> 17
let words = strObj.split(" ");
console.log(words[0]); // -> Do

let str = "Do bats eat cats?";
console.log(typeof(str)); // -> string
console.log(str.length); // -> 17
let words2 = str.split(" ");
console.log(words2[0]); // -> Do

/* autoboxing -> is a process in programming languages like
   JavaScript where primitives types (such as string, numbers,
   and booleans) are automatically converted into their corresponding
   object types when necessary. This allows primitive values to
   access methods and properties that are typically available only
   to objects. */

/* 3.1.3 Boolean */

let boolObj1 = new Boolean;
let boolObj2 = new Boolean(true);
let str1 = boolObj1.toString();
let bool2 = boolObj2.valueOf();
console.log(`str1 : ${typeof str1} : ${str1}`); // -> str1 : string : false
console.log(`bool2 : ${typeof bool2} : ${bool2}`); // -> bool2 : boolean : true

let bool3 = false;
let str2 = bool3.toString();
let bool4 = bool3.valueOf();
console.log(`str2 : ${typeof str2} : ${str2}`); // -> str2 : string : false
console.log(`bool4 : ${typeof bool4} : ${bool4}`); // -> bool2 : boolean : false

let bool5 = Boolean(false);
let bool6 = Boolean(1);
let bool7 = Boolean("");
console.log(`bool5 : ${typeof bool5} : ${bool5}`); // -> bool5 : boolean : false
console.log(`bool6 : ${typeof bool6} : ${bool6}`); // -> bool6 : boolean : true
console.log(`bool7 : ${typeof bool7} : ${bool7}`); // -> bool7 : boolean : false

/* 3.1.4 Number */

/* For integers, by default, the smallest value is -(2^53 - 1) and
   the largest (2^53 - 1) */
/*
   0x -> hexadecimal
   0o -> octal
   0b -> binary 
*/

let a = 10; // decimal - default
let b = 0x10; // hexadecimal
let c = 0o10; // octal
let d = 0b10; // binary
console.log(a); // -> 10
console.log(b); // -> 16
console.log(c); // -> 8
console.log(d); // -> 2
let x = 0.3;
let y = 0.6;
console.log(x + y); // -> 0.8999999999999999
console.log((x + y).toFixed(1)); // -> 0.9
console.log(x / 0); // -> Infinity
console.log(x / "abc"); // -> NaN

/* 3.1.5 The Number constructors */

let nrStr1 = (11).toString();
let nrStr2 = (11).toString(16);
console.log(`nrStr1 : ${typeof nrStr1} : ${nrStr1}`); // -> nrStr1 : string : 11
console.log(`nrStr2 : ${typeof nrStr2} : ${nrStr2}`); // -> nrStr2 : string : b

let numberObj1 = new Number;            // -> 0
let numberObj2 = new Number(100);       // -> 100
let numberObj3 = new Number("200");     // -> 200
let numberObj4 = new Number("abcd");    // ->NaN
let numberObj5 = new Number(9e10000);   // -> Infinity
console.log(`numberObj1 : ${typeof numberObj1} : ${numberObj1.valueOf()}`); // -> numberObj1 : object : 0
console.log(`numberObj2: ${typeof numberObj2} : ${numberObj2.valueOf()}`); // -> numberObj2: object : 100
console.log(`numberObj3: ${typeof numberObj3} : ${numberObj3.valueOf()}`); // -> numberObj3: object : 200
console.log(`numberObj4: ${typeof numberObj4} : ${numberObj4.valueOf()}`); // -> numberObj4: object : NaN
console.log(`numberObj5: ${typeof numberObj5} : ${numberObj5.valueOf()}`); // -> numberObj5: object : Infinity

let nr = Number("100");
console.log(`nr : ${typeof nr} : ${nr}`); // -> nr : number : 100

/* 3.1.6 Converting numbers into different string formats */

let a1 = 12345;
console.log(a1.toExponential()); // -> 1.2345e+4
console.log(a1.toExponential(1)); // -> 1.2e+4

let nr1 = 123456.789;
console.log(nr1.toLocaleString("en-GB")); // -> 123,456.789
console.log(nr1.toLocaleString("fr-FR")); // -> 123·456,789
console.log(nr1.toLocaleString("de-DE")); // -> 123.456,789
console.log(nr1.toLocaleString("ar-EG")); // -> ١٢٣٬٤٥٦٫٧٨٩
console.log(nr1.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR"
})); // -> 123.456,79  €
console.log(nr1.toLocaleString());

/* 3.1.7 Static properties and methods of the Number constructor */

console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // -> 5e-324
console.log(Number.MAX_SAFE_INTEGER); // -> 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -> -9007199254740991

let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; i< numbers.length; i++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}

console.log(Number.parseFloat("123.12.12")); // -> 123.12
console.log(Number("123.12.12")); // -> NaN
console.log(Number.parseInt("1204px")); // -> 1204
console.log(Number("1204px")); // -> NaN

/* 3.1.9 What we already know about strings */

let delay = 10;
let name = "Bob";
let order = 'pizza';
let info = `Hi ${name}, you have to wait about ${delay} minutes for your ${order}`;
console.log(info); // -> Hi Bob, you have to wait about 10 minutes for your pizza
console.log(typeof name); // -> string
console.log(typeof order); // -> string
console.log(typeof info); // -> string

/* 3.1.10 The String constructor */

let name1 = "Bob";
console.log(name1.length); // -> 3
console.log("Alice".length ); // -> 5
console.log("".length ); // -> 0

let strings = [undefined, "", "ab", "cd ef", 4, null];
for(let i=0; i< strings.length; i++) {
    strings[i] && strings[i].length && console.log(strings[i]);
}

/* 3.1.11 String as an array of characters */

let title = "Alien 10";
console.log(title[0]); // -> A
console.log(title.charAt(0)); // -> A

/* 3.1.13 Splitting the string */

let ipAddressStr = "127.0.0.1"
let ipParts = ipAddressStr.split("."); // -> ["127", "0", "0", "1"]
console.log(ipParts[0]); // -> 127

/* 3.1.14 Replacing substrings */

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.";
let words1 = text.toLowerCase().replaceAll('.','').replaceAll(',','').split(' ');
console.log(words1.length); // -> 30

/* 3.1.15 Searching for substrings */

let text2 = "One, two, three, one, two, three.";
console.log(text2.includes("two")); // -> true
console.log(text2.includes("four")); // -> false
console.log(text2.indexOf("two")); // -> 5
console.log(text2.indexOf("four")); // -> -1
console.log(text2.lastIndexOf("two")); // -> 22

/* 3.1.16 Copying substrings */

let text3 = "One, two, three, one, two, three.";
console.log(text3.substr(0,8)); // -> One, two
console.log(text3.substr(10)); // -> three, one, two, three.
console.log(text3.substr(-6)); // -> three.
console.log(text3.substr(-6, 2)); // -> th
console.log(text3.substring(5, 8)); // -> two
console.log(text3.substring(5)); // -> two, three, one, two, three.
console.log(text3.substring(-11, 8)); // -> One, two
console.log(text3.slice(0,3)); // -> One
console.log(text3.slice(5)); // -> two, three, one, two, three.
console.log(text3.slice(-11)); // -> two, three.
console.log(text3.slice(-11, -8)); // -> two

/* 3.1.17 Padding */

/* They allow you to expand the string to a given size, completing it from the end or
   from the beginning by repeating the string given as an argument. */
let numbers1 = [100, 5, 66];
for(let i=0; i< numbers1.length; i++) {
    console.log(String(numbers1[i]).padStart(10, '0'));
    console.log(String(numbers1[i]).padStart(10, 'abc'));
    console.log(String(numbers1[i]).padStart(10));
}

/* 3.1.18 Trimming */
let city = " Bergen  ";
let street = " Dokkeboder";
console.log(city.trimLeft().length); // -> 8 -> "Bergen  "
console.log(city.trimRight().length); // -> 7 -> " Bergen"
console.log(city.trim().length); // -> 6 -> "Berge"
console.log(street.trim().length); // -> 10 -> "Dokkeboder"

/* 3.1.19 Comparing strings */

console.log("a" < "b"); // -> true
console.log("abc" < "acd"); // -> true
console.log("b" < "acd"); // -> false
console.log("4" < "5"); // -> true
console.log("2" < "12"); // -> false
console.log("34" < "332"); // -> true
console.log("brettesnes" < "Sundsfjord"); // -> false
console.log("Brettesnes" < "Sundsfjord"); // -> true
console.log("Ørnes" < "Sundsfjord"); // -> false
console.log("Ørnes".localeCompare("Sundsfjord", "nn")); // -> -1
console.log("Ørnes".localeCompare("Brettesnes", "nn")); // -> 1

/* 3.1.21 Time zones and other tricks */

let date1 = new Date(0);
let date2 = new Date(1000*60*60*10);
console.log(date1.toUTCString()); // -> Thu, 01 Jan 1970 00:00:00 GMT
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

console.log(date2.getTimezoneOffset()); // -> 0
console.log(date2.toLocaleString()); // -> 01/01/1970, 10:00:00
console.log(date2.toISOString()); // -> 1970-01-01T10:00:00.000Z
console.log(date2.toUTCString()); // -> Thu, 01 Jan 1970 10:00:00 GMT

date3 = new Date("2020-02-02T20:20:00.000");
date4 = new Date("2020-02-02T20:20:00.000Z");
console.log(date3.toLocaleString()); // -> 02/02/2020, 20:20:00
console.log(date3.toISOString()); // -> 2020-02-02T19:20:00.000Z
console.log(date3.toUTCString()); // -> Sun, 02 Feb 2020 19:20:00 GMT
console.log(date4.toLocaleString()); // -> 02/02/2020, 21:20:00
console.log(date4.toISOString()); // -> 2020-02-02T20:20:00.000Z
console.log(date4.toUTCString()); // -> Sun, 02 Feb 2020 20:20:00 GMT
console.log(date3.getTime()); // -> 1580671200000
console.log(date4.getTime()); // -> 1580674800000
console.log(date4.getTime() - date3.getTime()); // -> 3600000

/* 3.1.22 Current time */

let nowObj = new Date();
console.log(nowObj.toLocaleString());

let now = Date.now(); // timestamp
let nowObj2 = new Date(now);
console.log(`now : ${typeof now} : ${now}`);
console.log(`now : ${typeof nowObj2} : ${nowObj2}`);

/* 3.1.23 Time specification with individual components */

let date5 = new Date(2020, 6);
let date6 = new Date(2020, 6, 8);
let date7 = new Date(2020, 6, 8, 10);
let date8 = new Date(2020, 6, 8, 10, 20, 45);
console.log(date5.toLocaleString()); // -> 01/07/2020, 00:00:00
console.log(date6.toLocaleString()); // -> 08/07/2020, 00:00:00
console.log(date7.toLocaleString()); // -> 08/07/2020, 10:00:00
console.log(date8.toLocaleString()); // -> 08/07/2020, 10:20:45

/* 3.1.24 Time specification with date string */

/*
let date1 = new Date("2020-07-08");
let date2 = new Date("2020-07-08T10:20:00");
let date3 = new Date("2020-07-08T10:20:00Z");
*/

/* 
let date1 = new Date("Mon Mar 02 2020 10:00:00");
let date2 = new Date("Mon March 2 2020 10:00");
let date3 = new Date("Mar 02 2020 10:00:00");
let date4 = new Date("2 March 2020, 10:");
let date5 = new Date("3.2.2020");
let date6 = Date("03/02-2020, 10:00");
let date7 = new Date("2020, 10:00");
let date8 = new Date("2020 march-02, 10:00");
let date9 = new Date("3.2.2020 GMT+0400");
let date10 = new Date("Mon Mar 02 2020 10:00:00 UTC-4");
*/

/* 3.1.26 Operating on individual date and time components */
let date = new Date("2020-07-08T10:20:00");
console.log(date.getMonth()); // -> 6 
console.log(date.getDay()); // -> 3
console.log(date.getDate()); // 8
console.log(date.getHours()); // -> 10
date.setHours(12);
console.log(date.getHours()); // -> 12

let date10 = new Date("2020-07-08T10:20:00");
console.log(date10.toLocaleDateString()); // -> 08/07/2020
console.log(date10.toLocaleTimeString()); // -> 10:20:00