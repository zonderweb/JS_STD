// �������� �������:
function f(x){
   // ���� x<0
   if(x<0){
      return 0
   }
   // ���� x>=0
   else{
      // ���� x<2
      if(x<2){
         return x*x
      }
      // ���� x>=2
      else{
         // ���� x<5
         if(x<5){
            return 6-x
         }
         // ���� x>=5
         else{
            return 1
         }
      }
   }
} // ��������� �������� �������

document.write("<h4>�������-������� �������</h4>")
// ���������� ������� ������� � ��������:
document.write('<img src="function.jpg" width="500" height="300"><br>')
// ���������� ��� ������ �������� ���������:
var z
// �������� ��������� - ��������� ����� (�� -2 �� 7):
z=9*Math.random()-2
document.write("��������� ��������:  <b>"+z+"</b><br>")
// ����� �������:
document.write("�������� �������:  <b>"+f(z)+"</b>")