makeHeader("���������� � ���������")
// ������� ��� ������������� ��������� ����� � ������
// � � ��������� ������:
function getRandText(n){
   var txt="��������� ����� ����� (�� 1 �� 10):<br>* "
   for(var k=1;k<=n;k++){
      txt+=myRand()+" * "
   }
   txt+="<br>"
   return txt
}
// ����������� 20-�� ��������� �����:
document.write(getRandText(20))
// ������� ��� ������������� ��������� ����� �����:
function myRand(){
   return 1+Math.floor(10*Math.random())
}
// ������� ��� ����������� ���������:
function makeHeader(t){
   document.write("<h4>"+t+"</h4>")
}