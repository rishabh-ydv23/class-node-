/*It’s a lightweight data format used for storing and exchanging data — especially between a server and a web application.

JSON is a way to represent structured data using key-value pairs, similar to how objects are written in JavaScript.

🔍 Key Features:

1. **Lightweight**: JSON is easy to read and write for humans and machines.
2. **Language Independent**: While JSON is based on JavaScript, it is supported by many programming languages.
3. **Data Interchange**: JSON is commonly used for transmitting data between a server and a web application.
4. **Structured Format**: JSON supports nested structures, allowing for complex data representation.

📚 Basic Syntax :
- Data is represented as key-value pairs.
- Keys are strings enclosed in double quotes.
- Values can be strings, numbers, objects, arrays, booleans, or null.
- Objects are enclosed in curly braces `{}`.
- Arrays are enclosed in square brackets `[]`.

Example:
{
  "name": "John Doe",
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "zip": "12345"
  }
}

*/

const user=`{
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"]
}`

console.log(user);
console.log("Name:", user.name);
const userObj=JSON.parse(user);
console.log("User Object:", userObj);
console.log(userObj.name);

const newUser=JSON.stringify(userObj,['name','age'],2);
console.log(newUser);