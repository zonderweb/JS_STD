// �������� ������� �������:
var obj={}
// ���������� �������� name:
obj.name="���� ������"
// ���������� �������� age:
obj.age=38
// ���������� ������ show():
obj.show=function(){
   document.write("<b>���</b>: "+this.name+"<br>")
   document.write("<b>�������</b>: "+this.age+"<br>")
}
// ����������� �������� ������� �������:
obj.show()