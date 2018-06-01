  //Hoisting
calAge(1995);


  function calAge(year)
  {
    console.log(2016 - year);
  }


//scoping


var a='Hi';
first();

function first()
{
  var b='Hello';

  second();
  function second()
  {
    var c='Hey';
    console.log(a +b + c);
  }
}
