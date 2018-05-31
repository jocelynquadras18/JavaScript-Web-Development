// coding challenge

var height1=45;
var height2=100;
var height3=55;
var age1=2;
var age2=2;
var age3=2;

var calScore1=height1+(5*age1);
var calScore2=height2+(5*age2);
var calScore3=height3+(5*age3);

console.log('calScore1 : ' + calScore1);
console.log('calScore2 : ' + calScore2);
console.log('calScore3 : ' + calScore3);

if(calScore1>calScore2 && calScore1>calScore3  )
{
  console.log('Friend 1 wins. Score is ' + calScore1);
}
else if(calScore3>calScore2 && calScore3>calScore1)
{
  console.log('Friend 3 wins. Score is ' + calScore3);
  }
else if(calScore1===calScore2 && calScore2===calScore3)
{
  console.log('Its a draw \n' + 'Score1 :'+ calScore1+ '\n'+ 'Score2 :' + calScore2 + '\n'+ 'Score3 :' + calScore3)
}
else
{
    console.log('Friend 2 wins. Score is ' + calScore2);
}
