// ������� � ����� ����������:
function zero(txt){
   document.write("<b>"+txt+"</b><hr>")
}
// ����� toString() ��� ������� ������� zero():
zero.toString=function(){
   var t="�������� ������� - zero<br>"
   t+="���������� ���������� - "+this.length+"<br>"
   return t
}
// ����� � ����� ����������:
function one(txt){
   document.write("<b>"+txt+"</b><br>")
   for(var s in this){
      document.write(this[s]+"<br>")
   }
   document.write("<hr>")
}
// ����� toString() ��� ������� ������ one():
one.toString=function(){
   var t="����� one()<br>"
   t+="���������� ���������� - "+this.length+"<br>"
   return t
}
// ������ ������:
var A=[]
// ������ (���������) ������� �������:
A[0]=zero
// ������ (� �������� ����) ������� �������:
A[1]=one
// ����� ������� (������ ������� �������):
A[0]("��������� ������� �������")
// ����� ������ (������ ������� �������):
A[1]("������� � ��������� ��������")
