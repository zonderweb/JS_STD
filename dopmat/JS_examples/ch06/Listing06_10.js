// ������� ��� ���������� ����� ����������:
function sum(){
   // ��������� ���������� ��� ���������� �����:
   var s
   // ��������� �������� ��������� ����������:
   if((arguments.length>0)&&(typeof(arguments[0])=="string")){
      s=""
   }
   else{
      s=0
   }
   // ���������� �����:
   for(var k=0;k<arguments.length;k++){
      s+=arguments[k]
   }
   // ���������:
   return s
}
// ������� ������ �������:
document.write("����� �����: "+sum(1,4,2,7,3)+"<br>")
document.write("����� �����: "+sum(1,2,3)+"<br>")
document.write("����� �����: "+sum()+"<br>")
document.write("����� ����: "+sum("����"," ������"," ���"," ����"," ���"))