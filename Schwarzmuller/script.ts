const button = document.getElementById('add-btn')! ;
const input1 = document.getElementById('button1')! as HTMLInputElement;
const input2 = document.getElementById('button2')! as HTMLInputElement;

const add = (num1: number, num2: number) => {
    return num1 + num2
}

button?.addEventListener('click', function() {
    console.log(add(input1.value, input2.value))
})