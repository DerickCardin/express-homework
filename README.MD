DERICK CARDIN
4.A.E
EXPRESS ROUTE PRACTICE

create a get route that displays Your personal name.
create a dynamic get route that then says something using the parameter sent to it.

create a dynamic query route (?x=y&a=b). this query route should accept EITHER two nums (num1 and num2) or a word. if numbers were given it should send back some sort of mathematical equation and the result. If it is a word it should spell the word one line at a time.

Create a post route that accepts a username and password. in your route have a static user name and password and then check to see if the username and password send match. if they match send a json with a status of "logged in" or respond with a json that has a status of "invalid credentials"

Final item
in your server.js file create a global variable array. you can fill this with random strings to start if you like.
Create a post request that has an item attribute. Add the item to the array.
create a delete request (works like post) that has an item attribute. remove the item from the array.

the routes should respond back with an error if the user tries to add an item that already exists in the array
the routes should respond back with an error if the item does not exist in the array.

extra credit. Find out how to respond with the correct http status code for the two errors.