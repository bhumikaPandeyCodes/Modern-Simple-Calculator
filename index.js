const screen=document.querySelector('.screen');

screen.value='';
function zeroclick()
{
   // screen.value+='0';
   screen.textContent+='0';
}
function oneclick()
{
   // screen.value+='1';
   screen.textContent+='1';
}
function twoclick()
{
   // screen.value+='2';
   screen.textContent+='2';
}
function threeclick()
{
   // screen.value+='3';
   screen.textContent+='3';
}
function fourclick()
{
   // screen.value+='4';
   screen.textContent+='4';
}
function fiveclick()
{
   // screen.value+='5';
   screen.textContent+='5';
}
function sixclick()
{
   // screen.value+='6';
   screen.textContent+='6';
}
function sevenclick()
{
   // screen.value+='7';
   screen.textContent+='7';
}
function eightclick()
{
   // screen.value+='8';
   screen.textContent+='8';
}
function nineclick()
{
   // screen.value+='9';
   screen.textContent+='9';
}
function perclick()
{
   // screen.value+='%';
   screen.textContent+='%';
}
function divclick()
{
   // screen.value+='/';
   screen.textContent+='/';
}
function mulclick()
{
   // screen.value+='*';
   screen.textContent+='*';
}
function minusclick()
{
   // screen.value+='-';
   screen.textContent+='-';
}
function plusclick()
{
   // screen.value+='+';
   screen.textContent+='+';
}
function pointclick()
{
   // screen.value+='.';
   screen.textContent+='.';
}
function equalclick()
{
screen.value=screen.textContent;
   screen.textContent=eval(screen.value);
}
function allClear()
{
   // screen.value='0';
   screen.textContent='';
}
function clearclick()
{
   screen.textContent=parseInt(screen.textContent/10);

}