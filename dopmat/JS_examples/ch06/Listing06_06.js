// �������� �������:
var obj={name:"������",code:123}
// ���������� �������� � ������:
obj["text"]="�����"
// ������������ �������� ����� �������
// � ���������� �� � ������:
for(var k=1;k<=5;k++){
   obj["symbol_"+k]=String.fromCharCode("A".charCodeAt(0)+k-1)
}
// ����������� �������� � �������� ������� �������:
for(var s in obj){
   document.write("�������� <b>"+s+"</b>: "+obj[s]+"<br>")
}
// ������ � ���������� ������� �������:
var list=Object.keys(obj)
// ����������� �������� ������� �������:
document.write("["+list.join(" | ")+"]")