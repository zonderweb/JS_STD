// ������ ��� ������������� � �������� ���������:
var X={
   color:"�������",
   number:123,
   show:function(arg){
      document.write("<b>"+arg+"</b>: ")
      for(var s in this){
         if(s!="show"){
            document.write(s+" -> "+this[s]+" | ")
         }
      }
      document.write("<br>")
   }
} // ��������� �������� �������-���������
// ������ ������:
var A=Object.create(X)
// ������ ������:
var B=Object.create(X)
// ��������� �������� ��������:
showAll()
// ����������� ����� �������� ��������� ��������:
A.color="������"
A.number=321
B.color="�������"
// ��������� �������� ��������:
showAll()
// ���������� �������� name � ������-��������:
X.name="��������"
// ���������� �������� state � ������ ������:
A.state=true
// ��������� �������� ��������:
showAll()
// ������� �������� number �������-���������:
delete X.number
// ������� �������� color ������� �������:
delete A.color
// ��������� �������� ��������:
showAll()
// ������� ��� ����������� ������� ��������:
function showAll(){
   X.show("X")
   A.show("A")
   B.show("B")
   document.write("<hr>")
}