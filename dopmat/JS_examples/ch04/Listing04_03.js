// �������� ������� obj �� ���������� name � age,
// � ����� ������� show():
var obj={name:"���� ������",
         age:38,
         show:function(){
            document.write("<b>���</b>: "+this.name+"<br>")
            document.write("<b>�������</b>: "+this.age+"<br>")
         }
}
// ����������� �������� ������� �������:
obj.show()
// ����� �������� ������� �������:
obj.name="���� ������"
obj.age++
// ����������� ����� �������� ������� �������:
obj.show()