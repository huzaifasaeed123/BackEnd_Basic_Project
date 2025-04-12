let btn =document.querySelectorAll("button");

for(let btn1 of btn)
{
    btn1.addEventListener("click",(event)=>{
        console.log("Buttom is clicked");
    });
}
