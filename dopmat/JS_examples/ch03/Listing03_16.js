// ������ �������:
function first(){
   document.write("������ �������<br>")
}
// ������ �������:
function second(){
   document.write("������ �������<br>")
}
// ����� �������:
first()
second()
// ����������:
var tmp
// ����� ����������:
tmp=first
first=second
second=tmp
// ����� �������:
first()
second()