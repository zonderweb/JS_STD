// ������� ��� ����������� ����������� �������:
function show(name,array){
   document.write(name+" = "+array.join(" | ")+"<br>")
}
// ������� ��� ����������� ��������:
function makeCopy(array){
   // �������� �������:
   var tmp=new Array(array.length)
   // ������������ ����������� ��������:
   for(var k=0;k<tmp.length;k++){
      // ���� ���������� ������� - ������:
      if(Array.isArray(array[k])){
         // ����������� ����� �������:
         tmp[k]=makeCopy(array[k])
      }
      // ���� ���������� ������� - �� ������:
      else{
         tmp[k]=array[k]
      }
   }
   // ��������� ������� - ������:
   return tmp
}
// ������ � ��������� ����������:
var A=[1,2,3,4,5]
show("A",A)
// �������� ����� �������:
var B=makeCopy(A)
document.write("����� ������������ <code>B = makeCopy(A)</code>:<br>")
show("B",B)
// ������������ �������� �������� �������:
A[0]=100
document.write("����� ������������ <code>A[0] = 100</code>:<br>")
show("A",A)
show("B",B)
document.write("������ �������� ����� ��������� ������ ������:<br>")
// ������ � ��������� - ��������:
var C=[1,[2,3],4,5]
show("C",C)
// �������� ����� �������:
var D=makeCopy(C)
document.write("����� ������������ <code>D = makeCopy(C)</code>:<br>")
show("D",D)
// ������������ �������� ��������� �������:
C[1][0]=200
C[3]=500
document.write("����� ���������� ������ <code>C[1][0] = 200</code> � <code>C[3] = 500</code>:<br>")
show("C",C)
show("D",D)