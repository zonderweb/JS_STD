// ������ ������ (��������� �� ������ Math):
var A=Object.create(Math)
// ������ ������ (��������� �� ������ A):
var B=Object.create(A)
// ������ ������ (��������� �� ������ B):
var C=Object.create(B)
// ��������� ������ (��������� �� ������ C):
var D=Object.create(C)
// ���������� ������ f() � �������� ������� A:
Object.getPrototypeOf(A).f=function(x){
   return 2*x+1
}
// ���������� � ������������� ���������:
var t=2
// ����� ������ f() �� ������� Math:
document.write("������� f("+t+") = "+Math.f(t)+"<br>")
// ����� �������� ���������� t:
t=3
// ����� ������ f() �� ������� D:
document.write("������� f("+t+") = "+D.f(t)+"<br>")
// ������ �� �������� ��������� ������� D:
var obj=Object.getPrototypeOf(Object.getPrototypeOf(D))
// �������� ��������� ��������:
document.write("obj == B -> "+(obj==B)+"<br>")