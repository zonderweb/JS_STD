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


// var txt = "Давайте познакомимся! Как вас зовут?";
// var msg = "Жаль но вы не представились!";
// var name = prompt(txt);

// if(name != "") {
// 	msg = "Приятно познакомится, "+name+"!"
// };

// document.write(msg);

// LISTING 2.3

function f(x) {
	if(x<0) {
		return 0
	}
	else {
		if(x<2) {
			return x*x
		}
		else {
			if(x<5) {
				return 6-x
			}
			else {
				return 1
			}
		}
	}
}

	document.write("<h4>Кусочно гладкая функция</h4>")
	// Добавление графика функции в документ: 
	document.write('<img src="img/function.jpg" width="500" height="300"><br>')
	// Переменная для записи значения аргумента: 
	var z = 9*Math.random()-2
	document.write("Случайный аргумент: <b>"+z+"</b><br>")
	// Вызов функции: 
	document.write("Значение функции: <b>"+f(z)+"</b>")