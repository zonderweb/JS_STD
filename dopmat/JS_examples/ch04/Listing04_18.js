// �������� �������:
var A={number:100}
// ���������� �������� number:
var descriptor=Object.getOwnPropertyDescriptor(A,"number")
// ����������� ������� ������� A:
show(A)
// ����������� ������� ������� descriptor:
show(descriptor)
// ������� ��� ����������� ������� �������:
function show(obj){
   document.write("{| ")
   for(var s in obj){
      document.write(" <b>"+s+"</b> : "+obj[s]+" |")
   }
   document.write("}<br>")
}