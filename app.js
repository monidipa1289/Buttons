
function change_color()
{
    const r= Math.floor(Math.random()*255 +1);
    const g=Math.floor(Math.random()*255 +1);
    const b=Math.floor(Math.random()*255 +1);
   return `rgb(${r},${g},${b})`;

}
const buttons = document.querySelectorAll('button');
for(let button of buttons)
{
   button.addEventListener('click', function()
   {
    // console.log("HIII")
      button.style.backgroundColor=change_color();
   });
}  