var button = document.getElementById('add-btn');
var input1 = document.getElementById('button1');
var input2 = document.getElementById('button2');
var add = function (num1, num2) {
    return num1 + num2;
};
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log(add(input1.value, input2.value));
});
