//arrays

var names=['Jocelyn','Khushwant'];
var years= new Array(1222,1228,1990);
var ex=['Jocelyn',1992,'Developer'];
console.log(ex);
ex.push('Mama'); //pushes at the end
console.log(ex);
ex.unshift('Miss.'); //appends at begining
console.log(ex);
ex.pop(); //removes last element
console.log(ex);
console.log(ex.indexOf('Miss.'));


//objects

var joc={name:'Jocelyn', age:'25', lastName:'Quadras',job:'Teacher'};
console.log(joc.name);


var abc=new Object();
abc.firstName='Jocelyn';
console.log(abc);


//Objects and Methods
//this: used to refer to property of that object itself
var joc={name:'Jocelyn',
          yearOfBirth:1992,
          calculateAge:function()
        {
          this.age= 2016-this.yearOfBirth;
        }};
joc.calculateAge();
console.log(joc);
