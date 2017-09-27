//Form navigation
//submit
//focus, blur
//change, input
// document.forms[0].submit();
// console.log(document.forms[0].elements[5]);
// document.forms[0].onsubmit = function(){
//     console.log('form was submited');
//
//     return false;
// }

// document.forms.myForm.elements[0].onfocus = function(){
//     console.log('input was focused');
// }
// document.forms.myForm.elements[0].onblur = function(){
//     console.log('input was blured');
// }

// document.forms.myForm.
// document.forms.myForm.elements[0].onblur = function(){
//     var x = this.value;
//     console.log(!isNaN(x));
//     if (!isNaN(x)){
//         document.getElementById('errorM#generalessage').innerHTML = '';
//         console.log('Not a number')
//     }
//     else{
//         console.log('number')
//         document.getElementById('errorMessage').innerHTML = 'Not a number';
//         document.forms.myForm.elements[0]#general.focus();
//     }
// }


var clr = [0,0,0,0];
for (let i = 0; i < 4; i++){
    document.forms.myForm.elements[i].oninput = function() {
        console.log(i);
        clr[i] = this.value;
        errorMessage.style.backgroundColor = 'rgb(' + clr[1] + ',' + clr[2] + ',' + clr[3] + ')';
    }
}

///////или//////////////

// var obj = {
//     r : 0,
//     g : 0,
//     b : 0
// };
// for (var i = 0; i < 4; i++){
//     document.forms.myForm.elements[i].oninput = function() {
//         console.log(i);
//         obj[this.getAttribute('dataId')] = this.value;
//         errorMessage.style.backgroundColor = 'rgb(' + obj.r + ',' + obj.g + ',' + obj.b + ')';
//     }
// }

// Задача написать css генератор на блок с использ oninput


















































// var form1 = document.forms.myForm;
//
// console.log(form1);
// form1.onsubmit = function(){
//     return false;
// }
// ok.onclick = function(){
//     form1.submit();
// }
// console.log(firstSelect);

// inputText.onblur = function(){
//     if (!isNaN(inputText.value)){
//         errorMessage.innerHTML = 'Incorrect value';
//         inputText.focus();
//     }
//     else{
//         errorMessage.innerHTML = '';
//     }
//     console.log(isNaN(inputText.value));
// }


// firstSelect.oninput = function(){
//     for (var i = 0; i<myForm.sel.options.length;i++){
//         if(myForm.sel.options[i].selected){
//             optionsValue.innerHTML = myForm.sel.options[i].value;
//         }
//     }
// }
// var redColor = 0;
// valueOfRange.innerHTML = widthElement.value;
// widthElement.oninput = function(){
//     redColor = this.value;
//     // valueOfRange.innerHTML = this.value;
//     boxStyle.style.backgroundColor = "rgb("+redColor+", 28, 28)";
// }
// widthElement.oninput = function(){
//     var redColor = this.value;
//     // valueOfRange.innerHTML = this.value;
//     boxStyle.style.backgroundColor = "rgb("+redColor+", 28, 28)";
// }
// widthElement.oninput = function(){
//     var redColor = this.value;
//     // valueOfRange.innerHTML = this.value;
//     boxStyle.style.backgroundColor = "rgb("+redColor+", 28, 28)";
// }



// var form1 = document.forms.myForm;
// console.log(form1);
// console.log(form1.elements[0]);
// console.log(form1.elements[0].form);
// form1.onsubmit = function(){
//     alert();
//     return false;
// }
// ok.onclick = function(){
//     form1.submit();
//     for (var i = 0; i<form1.sel.options.length;i++){
//         if(form1.sel.options[i].selected){
//             console.log(form1.sel.options[i].value)
//         }
//     }
//     console.log(form1.sel.options);
// }
// // form1.first.onfocus = function(){
// //     alert('focus');
// // }
// form1.first.onblur = function(){
//     form1.first.focus();
// }

