// ����������� ��������:
function MyObject(name,number){
   this.name=name
   this.number=number
   this.show=function(){
      for(var s in this){
         if(s!="show"){
            document.write(s+" -> "+this[s]+" | ")
         }
      }
      document.write("<br>")
   }
}
// �������� �������� �� ������ ������������:
var A=new MyObject("������ �",100)
var B=new MyObject("������ B",200)
// ����������� ������� ��������:
document.write("<b>�������� ��������� ��������:</b><br>")
A.show()
B.show()
// ���������� �������� color � �������� ��������:
MyObject.prototype.color="����������"
// ����������� ������� ��������:
document.write("<b>����� ���������� ��������:</b><br>")
A.show()
B.show()
// ���������� ������������ �������� color � ������ A:
A.color="�����"
// �������� �������� color �� ��������� ��������:
delete MyObject.prototype.color
// ����������� ������� ��������:
document.write("<b>����� �������� ��������:</b><br>")
A.show()
B.show()
// �������� ��������� �������:
document.write("<b>�������� ��������� �������:</b><br>")
var txt="Object.getPrototypeOf(A)==MyObject.prototype"
document.write(txt+" -> "+eval(txt))