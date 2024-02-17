//changing the text of the button itself when clicked

/*
function toggleText(){
    const myButton=document.getElementById('mybtn');

    if(myButton.textContent === 'click me'){
        myButton.textContent='clicked';
    }else{
        myButton.textContent='click me'
    }
}
*/

//using the btn-con button to expand and collapse a div
const hideDiv = document.getElementById('mybtn');
const hiddenDiv = document.getElementById('hidden-project');

hideDiv.addEventListener('click',function(){
    if(hiddenDiv.style.display === 'none'){
        hiddenDiv.style.display = 'block';
    }else{
        hiddenDiv.style.display = 'none';
    }
});



