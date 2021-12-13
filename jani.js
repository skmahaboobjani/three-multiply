var m=document.getElementById('btn')
function fn(){
    var a=document.getElementById('first').value
    var b=document.getElementById('second').value
    var c=document.getElementById('third').value


function mul(a)
{
    return function(b){
        return function(c){
         var d=   document.getElementById('p1')
         d.innerText=a*b*c
         
        }
    }
}
mul(a)(b)(c)
}
m.addEventListener('click',fn)


        
