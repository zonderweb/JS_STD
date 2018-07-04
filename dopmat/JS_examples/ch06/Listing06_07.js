// ����� toString() ������������
// � ��������� �������� ������:
Object.prototype.toString=function(){
   var t="<u>����������� �������� �������:</u><br>"
   for(var s in this){
      t+="<b>"+s+"</b>: "+this[s]+"</br>"
   }
   return t
}
// ����� valueOf() ������������
// � ��������� �������� ������:
Object.prototype.valueOf=function(){
   return Object.keys(this).length
}
// ������ ������:
var A={one:100,two:200,three:300,four:400,five:500}
// ������� ����� ������ toString() ��� �����������
// ������� �������:
document.write(A)
// ������� ����� ������ valueOf() ��� �����������
// ���������� ����������� ������� � �������:
document.write("���������� ������� � ������� - "+A+"<br>")
// ������ ������:
var B={first:"������",second:"������",third:"������"}
// ������� ����� ������ toString() ��� �����������
// ������� �������:
document.write(B)
// ������� ����� ������ valueOf() ��� �����������
// ���������� ����������� ������� � �������:
document.write("���������� ������� � ������� - "+B+"<br>")
// �������-�����������:
function Person(name,age,gender){
   // ��������� ����������:
   var g
   // ����������� �������� ��������� ����������:
   if(gender){
      g="���."
   }
   else{
      g="���."
   }
   // �������� �������� name:
   this.name=name
   // �������� �������� age:
   this.age=age
   // �������� gender �������� ������ ��� ����������:
   Object.defineProperty(this,"gender",{
      get:function(){
         return g
      }
   })
}
// ����������� ������ toString() ���
// ��������� ������������ Person:
Person.prototype.toString=function(){
   var t="<u>������������ ������:</u><br>"
   t+="<b>���:</b> "+this.name+"<br>"
   // ������� ����� ������ valueOf():
   t+="<b>�������:</b> "+this+" ���<br>"
   t+="<b>���:</b> "+this.gender+"<br>"
   return t
}
// ����������� ������ valueOf() ���
// ��������� ������������ Person:
Person.prototype.valueOf=function(){
   return this.age
}
// ������� ��������� � ������� ������������ Person:
var X=new Person("�����",20,false)
var Y=new Person("������",25,true)
// ������� ����� ������ toString() ��� ��������, ���������
// � ������� ������������ Person:
document.write(X)
document.write(Y)
// ������� ����� ������ valueOf() ��� ��������, ���������
// � ������� ������������ Person:
document.write("������� ����� - "+X+" ���<br>")
document.write("������� ������ - "+Y+" ���")