// �������� ��������� ������:
var text="�� ������� JavaScript"
document.write("<b>"+text+"</b><br>")
// ��������� � �������� ������ ����� ������:
for(var k=11;k<text.length;k++){
   document.write(text[k])
}
// ������������� ������ slice():
document.write("<br>"+text.slice(0,10))
document.write("<br>"+text.slice(11))
// ������������� ������ substring():
document.write("<br>"+text.substring(11))
// ������������� ������ substr():
document.write("<br>"+text.substr(11))
// ������������� ������ toUpperCase():
document.write("<br>"+text.toUpperCase())
// ������������� ������ toLowerCase():
document.write("<br>"+text.toLowerCase())
// ������������� ������ search():
document.write("<br>"+text.search("Java"))
// ������������� ������ replace():
document.write("<br>"+text.replace("�������","�����"))
// �������� ������ �� ����������:
document.write("<br><b>"+text+"</b>")
