 let button= document.createElement('button')
  button.className===button
 button.innerText='2nd button'

 button.onclick=()=>{
  console.log("mujAH PER CLICK KIYA GAYA OR MAIN JS SA BANA HOON")}

 let body=document.querySelector('body')
  body.append(button)

 button.addEventListener('click',function(){
  console.log("mujh per click kiya gaya or main add events");
 })

 button.addEventListener('click',function(){
  console.log("mujh per click kiya gaya or main2nd copy hoon or main over side nhi kiya hhai add events");
 })

 button.addEventListener('click',function(){
  console.log("mujh per click kiya gaya  3rd hoon or main add events");
 })
