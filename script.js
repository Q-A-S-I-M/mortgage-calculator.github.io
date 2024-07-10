const input1=document.getElementById('inputAmount');
const icon=document.getElementsByClassName('icon')[0];
const input2=document.getElementById('inputYears');
const input2p=document.getElementsByClassName('year_p')[0];
const input3=document.getElementById('inputRate');
const input3p=document.getElementsByClassName('rate_p')[0];
const radio1=document.getElementById('repayment');
const radio2=document.getElementById('interest');
const div1=document.getElementsByClassName('repay')[0];
const div2=document.getElementsByClassName('int')[0];
const msg1=document.getElementById('msg1');
const msg2=document.getElementById('msg2');
const msg3=document.getElementById('msg3');
const msg4=document.getElementById('msg4');
const button=document.getElementById('cal');
let check=true;
const scene1=document.getElementsByClassName('scene1')[0];
const scene2=document.getElementsByClassName('scene2')[0];
const inputFields=document.querySelectorAll('input[type="number"]');

div1.addEventListener('click', () =>{
    selectRepayment();
})
div2.addEventListener('click', () =>{
    selectInterestOnly();
})

function selectRepayment(){
    radio1.checked=true;
    radio2.checked=false;
    radio1.classList.add('checked');
    radio2.classList.remove('checked');
    radio2.checked = false;
    div1.classList.add('change2');
    div2.classList.remove('change2');
    div1.style.borderColor=' hsl(61, 70%, 52%)';
    div2.style.borderColor=' hsl(200, 26%, 54%)';
    msg4.style.visibility='hidden';
}

function selectInterestOnly(){
    radio2.checked=true;
    radio1.checked=false;
    radio2.classList.add('checked');
    radio1.classList.remove('checked');
    radio1.checked = false;
    div2.classList.add('change2');
    div1.classList.remove('change2');
    div2.style.borderColor=' hsl(61, 70%, 52%)';
    div1.style.borderColor=' hsl(200, 26%, 54%)';
    msg4.style.visibility='hidden';
}

input1.addEventListener('focus', () => {
    input1.style.borderColor='hsl(61, 70%, 52%)';
    input1.style.outline='none';
    icon.style.borderColor='hsl(61, 70%, 52%)';
    icon.style.backgroundColor='hsl(61, 70%, 52%)';
    icon.style.color='black';
    msg1.style.visibility='hidden';
    input1.value="";
});

input1.addEventListener('blur', () => {
    input1.style.borderColor='hsl(200, 26%, 54%)';
    icon.style.borderColor='hsl(200, 26%, 54%)';
    icon.style.backgroundColor='hsl(202, 86%, 94%)';
    icon.style.color='hsl(200, 26%, 54%)';
    msg1.style.visibility='hidden';
});

input2.addEventListener('focus', () => {
    input2.style.borderColor='hsl(61, 70%, 52%)';
    input2.style.outline='none';
    input2p.style.borderColor='hsl(61, 70%, 52%)';
    input2p.style.backgroundColor='hsl(61, 70%, 52%)';
    input2p.style.color='black';
    msg2.style.visibility='hidden';
    input2.value="";
});

input2.addEventListener('blur', () => {
    input2.style.borderColor="hsl(200, 26%, 54%)";
    input2p.style.borderColor='hsl(200, 26%, 54%)';
    input2p.style.backgroundColor='hsl(202, 86%, 94%)';
    input2p.style.color='hsl(200, 26%, 54%)';
    msg2.style.visibility='hidden';
});

input3.addEventListener('focus', () => {
    input3.style.borderColor='hsl(61, 70%, 52%)';
    input3.style.outline='none';
    input3p.style.borderColor='hsl(61, 70%, 52%)';
    input3p.style.backgroundColor='hsl(61, 70%, 52%)';
    input3p.style.color='black';
    msg3.style.visibility='hidden';
    input3.value="";
});

input3.addEventListener('blur', () => {
    input3.style.borderColor="hsl(200, 26%, 54%)";
    input3p.style.borderColor='hsl(200, 26%, 54%)';
    input3p.style.backgroundColor='hsl(202, 86%, 94%)';
    input3p.style.color='hsl(200, 26%, 54%)';
    msg3.style.visibility='hidden';
});


  document.getElementById('clearAll').addEventListener('click', function(event) {
    event.preventDefault();
    input1.style.borderColor='hsl(200, 26%, 54%)';
    icon.style.borderColor='hsl(200, 26%, 54%)';
    icon.style.backgroundColor='hsl(202, 86%, 94%)';
    icon.style.color='hsl(200, 26%, 54%)';
    msg1.style.visibility='hidden'; 
    input2.style.borderColor="hsl(200, 26%, 54%)";
    input2p.style.borderColor='hsl(200, 26%, 54%)';
    input2p.style.backgroundColor='hsl(202, 86%, 94%)';
    input2p.style.color='hsl(200, 26%, 54%)';
    msg2.style.visibility='hidden';
    input3.style.borderColor="hsl(200, 26%, 54%)";
    input3p.style.borderColor='hsl(200, 26%, 54%)';
    input3p.style.backgroundColor='hsl(202, 86%, 94%)';
    input3p.style.color='hsl(200, 26%, 54%)';
    msg3.style.visibility='hidden';
    msg4.style.visibility='hidden';
    document.getElementById('inputAmount').value = '';
    document.getElementById('inputYears').value = '';
    document.getElementById('inputRate').value = '';
    document.getElementById('repayment').checked = false;
    document.getElementById('interest').checked = false;
    document.getElementsByClassName('repay')[0].classList.remove('change2');
    document.getElementsByClassName('int')[0].classList.remove('change2');
    document.getElementById('repayment').classList.remove('checked');
    document.getElementById('interest').classList.remove('checked');
    div1.style.borderColor='hsl(200, 26%, 54%)';
    div2.style.borderColor='hsl(200, 26%, 54%)'; 
    scene1.style.visibility='visible';
    scene2.style.visibility='hidden';
});

button.addEventListener('click', () => {
    if(!input1.value.trim()==''&&!input2.value.trim()==''&&!input3.value.trim()==''&&(radio1.checked||radio2.checked)){
        check=true;
    }
    if(input1.value.trim()==''){
        input1.style.borderColor='hsl(4, 69%, 50%)';
        icon.style.borderColor='hsl(4, 69%, 50%)';
        icon.style.backgroundColor='hsl(4, 69%, 50%)';
        icon.style.color='white';
        msg1.style.visibility='visible';
        check=false;
    }else if(input1.value.trim()<0){
        input1.style.borderColor='hsl(4, 69%, 50%)';
        icon.style.borderColor='hsl(4, 69%, 50%)';
        icon.style.backgroundColor='hsl(4, 69%, 50%)';
        icon.style.color='white';
        msg1.style.visibility='visible';
        msg1.textContent="Invalid input"
        check=false;
    }
    if(input2.value.trim()==''){
        input2.style.borderColor='hsl(4, 69%, 50%)';
        input2p.style.borderColor='hsl(4, 69%, 50%)';
        input2p.style.backgroundColor='hsl(4, 69%, 50%)';
        input2p.style.color='white';
        msg2.style.visibility='visible';
        check=false;
    }else if(input2.value.trim()<0){
        input2.style.borderColor='hsl(4, 69%, 50%)';
        input2p.style.borderColor='hsl(4, 69%, 50%)';
        input2p.style.backgroundColor='hsl(4, 69%, 50%)';
        input2p.style.color='white';
        msg2.style.visibility='visible';
        msg2.textContent="Invalid input"
        check=false;
    }
    if(input3.value.trim()==''){
        input3.style.borderColor='hsl(4, 69%, 50%)';
        input3p.style.borderColor='hsl(4, 69%, 50%)';
        input3p.style.backgroundColor='hsl(4, 69%, 50%)';
        input3p.style.color='white';
        msg3.style.visibility='visible';
        check=false;
    }else if(input3.value.trim()<0){
        input3.style.borderColor='hsl(4, 69%, 50%)';
        input3p.style.borderColor='hsl(4, 69%, 50%)';
        input3p.style.backgroundColor='hsl(4, 69%, 50%)';
        input3p.style.color='white';
        msg3.style.visibility='visible';
        msg3.textContent="Invalid input"
        check=false;
    }
    if(!radio1.checked&&!radio2.checked){
        div1.style.borderColor='hsl(4, 69%, 50%)';
        div2.style.borderColor='hsl(4, 69%, 50%)';
        msg4.style.visibility='visible';
        check=false;
    }
    if(check){
        scene1.style.visibility='hidden';
        scene2.style.visibility='visible';
    }else{
        scene1.style.visibility='visible';
        scene2.style.visibility='hidden';
    }
});

inputFields.forEach((inputField, index) => {
    inputField.addEventListener('keydown', (e) => {
        if(e.key=== 'Enter'){
            if(index< inputFields.length-1){
                inputFields[index+1].focus();
            }else{
                inputField.blur();
                radioSelect();
            }
        }
});
});

const radioFields=document.querySelectorAll('input[type="radio"]');

function radioSelect(){
    selectRepayment();
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowDown' ) {
            selectInterestOnly();
        }else if(event.key === 'ArrowUp'){
            selectRepayment();
        }
    });
}