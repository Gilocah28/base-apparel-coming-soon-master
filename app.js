const input = document.querySelector('.inputText');
const btn = document.querySelector('.Submit');
const error = document.querySelector('.errorCon');


const err = () =>{
    if(input.value !== ''){
        error.style.display = 'none' 
        input.value = ''
        alert('Successfully Login')
    }else{
        error.style.display = 'block' 
    }
}

input.addEventListener('keyup', e => {
    if(e.key === 'Enter') err()
})

btn.addEventListener('click',()=>{
    err()
});


