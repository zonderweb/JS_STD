// ������� - ����������� ��������:
function Fellow(name,age){
   // �������� �������� name:
   this.name=name
   // �������� �������� age:
   this.age=age
   // ����� show():
   this.show=function(){
      document.write("<b>���</b>: "+this.name+"<br>")
      document.write("<b>�������</b>: "+this.age+"<br>")
   }
}
// �������� �������� � ������� ������������:
var objA=new Fellow("���� ������",38)
var objB=new Fellow("���� ������",39)
// �������� �������� ����� ��������:
objA.show()
objB.show()