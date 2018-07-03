// var txt = 'Используем переменную';
// document.write(txt);

// var txt = 'Значение числа: ';
// var num = 123;
// document.write(txt+num);

// var x = 'Значение числа: ';
// document.write(x);
// var x = 123;
// document.write(x);

// var x = '3+(5*2 + 6)/4';
// document.write(x+"=");
// document.write(eval(x));

// var x = 10
// var y = x++
// document.write(y)

// var x = 123==123
// document.write(x)

// var x = 123 == '123'
// document.write(x)

// if (uslovie) {
// 	// perviy block comand
// }
// else {
// 	// vtoroy block comand
// }




// var txt = "Давайте познакомимся! Как вас зовут?"
// var name = prompt(txt)

// if (name == "") {
// 	document.write("Жаль но вы не представились!")
// }

// else {
// 	document.write("Приятно познакомится, "+name+"! ")
// }


var txt = "Давайте познакомимся! Как вас зовут?";
var msg = "Жаль но вы не представились!";
var name = prompt(txt);

if(name != "") {
	msg = "Приятно познакомится, "+name+"!"
};

document.write(msg);