// �������� �������:
var objA={name:"���� ������",
          age:38,
          show:function(){
             document.write("<u>���</u>: "+this.name+"<br>")
             document.write("<u>�������</u>: "+this.age+"<br>")
          }
}
// ����������� �������� ������� ������� objA:
document.write("<b>������ objA:</b><br>")
objA.show()
// ������������ ������� ��������� ����������:
var objB=objA
// ����������� �������� ������� ������� objB:
document.write("<b>������ objB:</b><br>")
objB.show()
// ����� �������� ������� ������� objA:
objA.name="���� ������"
objA.age++
// ����������� ����� �������� ������� ������� objA:
document.write("<b>������ objA:</b><br>")
objA.show()
// ����������� �������� ������� ������� objB:
document.write("<b>������ objB:</b><br>")
objB.show()