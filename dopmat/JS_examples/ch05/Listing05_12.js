// ��������������� � ��������� ������ toString():
Array.prototype.toString=function(){
   var txt="< "+this.join(" ; ")+" >"
   return txt
}
// ��������������� � ��������� ������ valueOf():
Array.prototype.valueOf=function(){
   return eval(this.join("+"))/this.length
}
// ������:
var A=[1,[2,3],4,"�����",true]
document.write("������:<br>")
// ����������� ������� (���������� ����� toString()):
document.write(A)
// ������:
var B=[3,5,1,8,2]
// ����������� ������� (���������� ����� toString()):
document.write(["<br>B = ",B].join(""))
// ���������� ����� valueOf():
document.write("<br>������� ��������: "+B+"<br>")
// ����� ����� ������� toString() � valueOf():
document.write("������ "+[1,2,3,4].toString()+" - ������� "+[1,2,3,4].valueOf())