// ������� � ���������� this ������� ��� �������:
function f(text,number){
   this.text=text
   this.number=number
}
// �������:
var A={}
var B={show:function(){
   for(var s in this){
      document.write(s+": "+this[s]+"<br>")
   }
}}
var C={}
C.method=f
// ����� �������:
f("�������",100)
// ����� �� ������� ������� ������ call():
f.call(A,"������ �",200)
// ����� �� ������� ������� ������ apply():
f.apply(B,["������ B",300])
// ����� ������ �������:
C.method("������ C",400)
// �������� �������� ���������� 
// ���������� � ������� ��������:
document.write(text+" | "+number+"<br>")
document.write(A.text+" | "+A.number+"<br>")
document.write(B.text+" | "+B.number+"<br>")
document.write(C.text+" | "+C.number+"<br>")
// �������� ������� � �������� ������ f():
document.write(("f" in A)+"<br>")
document.write(("f" in B)+"<br>")
document.write(("f" in C)+"<br>")
// �������� ������� � ������� ��������:
document.write("<b>������ B:</b><br>")
B.show()
document.write("<b>������ A:</b><br>")
B.show.call(A)
document.write("<b>������ C:</b><br>")
B["show"].call(C)