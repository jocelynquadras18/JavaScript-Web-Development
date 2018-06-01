//coding challenge 2

var years=[1990,1998,2012,2011,1980,1290];
var just=[];
var temp;
for(var i =0 ; i< years.length ; i++)
{
  temp=2018-years[i];
  just.push(temp);
}
console.log(just)
for (var j =0; j< just.length; j++)
{
  if(just[j]>=18)
  {
    console.log('Full age' + just[j])
  }
}


function printfullage(years)
{
  var just=[];
  var output=[];
  for(var i =0 ; i< years.length ; i++)
  {
    temp=2018-years[i];
    just.push(temp);
  }
  for (var j =0; j< just.length; j++)
  {
    if(just[j]>=18)
    {
    output.push(true);
    }
    else
    {
      output.push(false);
    }
  }
return output;
}


var output=printfullage(years);
console.log(output);
