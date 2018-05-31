//functions
//console.log(calAge(YOB));
function calAge(yearOfBirth)
{
  var age=2016 - yearOfBirth;
  return age;
}

function yearsUntilRetirement(name,year)
{
  var age=calAge(year);
  var retirement=65-age;
  if(retirement>=0)
  {
    console.log(name + ' retires in ' + retirement + ' years.');
  }
  else {
    {
      console.log(name + 'is already retired');
    }
  }
}

yearsUntilRetirement('John', 1990 )
