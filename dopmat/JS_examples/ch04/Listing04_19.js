// �������� ������� �������:
var A={}
// ���������� �������� number:
Object.defineProperty(A,"number",{value:100,enumerable:true,writable:true,configurable:true})
// ������-���������� ������ ��������:
var descriptor={value:"������ �",enumerable:true,writable:true,configurable:true}
// ���������� �������� name:
Object.defineProperty(A,"name",descriptor)
// ����������� ������� ������� A:
show(A)
// ��������� ��������� �������� number:
Object.defineProperty(A,"number",{value:200,enumerable:false})
// ����������� ������� ������� A:
show(A)
// ����������� �������� �������� number:
document.write("A.number = "+A.number)
// ������� ��� ����������� ������� �������:
function show(obj){
   document.write("{|")
   for(var s in obj){
      document.write(" <b>"+s+"</b> : "+obj[s]+" |")
   }
   document.write("}<br>")
}