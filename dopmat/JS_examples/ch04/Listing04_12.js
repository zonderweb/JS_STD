// ��������������� ��������� ����������: 
var txt='"name" in Math'
// �������� ������� �������� name � ������� Math:
document.write(txt+" -> "+eval(txt)+"<br>")
// ������ ������:
var A={color:"�������"}
// ������ ������:
var B=new Object()
// ���������� �������� number � ������ B:
B.number=100
// ������������ �������� ��������:
showAll()
// ����������� �������� name � �������� Object.prototype:
Object.prototype.name="������ �"
// �������� ������� �������� name � ������� Math:
document.write(txt+" -> "+eval(txt)+"<br>")
// ������������ �������� ��������:
showAll()
// ����������� �������� name � ������ B:
B.name="������ B"
// ������������ �������� �������� name ������� Math:
document.write("Math.name -> "+Math.name+"<br>")
// ������������ �������� ��������:
showAll()
// �������� �������� name � ��������� Object.prototype:
delete Object.prototype.name
// �������� ������� �������� name � ������� Math:
document.write(txt+" -> "+eval(txt)+"<br>")
// ������������ �������� ��������:
showAll()
// ������� ��� ����������� ������� ��������:
function show(obj){
   for(var s in obj){
      document.write(s+" -> "+obj[s]+" | ")
   }       
   document.write("<br>")
}
function showAll(){
   document.write("������ �: ")
   show(A)
   document.write("������ B: ")
   show(B)
   document.write("<br>")
}