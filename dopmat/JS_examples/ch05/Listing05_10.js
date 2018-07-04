// ��������������� ������� ��� ����������� �������:
function show(name,array){
   document.write(name+" = "+array.join(" | ")+"<br>")
}
// ������ � ��������� ����������:
var A=[1,2,3,4,5]
show("A",A)
// ����������� �������:
var B=A.slice(0)
document.write("����� ������������ <code>B = A.slice(0)</code>:<br>")
show("B",B)
// ��������� �������� �������� �������:
A[0]=100
document.write("����� ������������ <code>A[0] = 100</code>:<br>")
show("A",A)
show("B",B)
document.write("������ �������� ����� ��������� ������ ������:<br>")
// ������ � ��������� - ��������:
var C=[1,[2,3],4,5]
show("C",C)
// ����������� �������:
var D=C.slice(0)
document.write("����� ������������ <code>D = C.slice(0)</code>:<br>")
show("D",D)
// ��������� �������� ��������� �������:
C[1][0]=200
C[3]=500
document.write("����� ���������� ������ <code>C[1][0] = 200</code> � <code>C[3] = 500</code>:<br>")
show("C",C)
show("D",D)