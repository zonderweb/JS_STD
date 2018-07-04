with(document){
   var A=[5,3,2]
   write("A = ["+A+"]<br>")
   write("��������� ���������� ������� <code>A.reduce(Math.pow)</code>:<br>")
   write(A.reduce(Math.pow)+"<br>")
   write("��������� ���������� ������� <code>A.reduceRight(Math.pow)</code>:<br>")
   write(A.reduceRight(Math.pow)+"<br>")
   var B=[1,2,,4,5,6,7,,9]
   write("B = ["+B+"]<br>")
   write("��������� ���������� ������� <code>B.forEach(fillIt)</code>:<br>")
   B.forEach(fillIt)
   write("B = ["+B+"]<br>")
   B.splice(2,1)
   write("����� ���������� ������� <code>B.splice(2,1)</code>:<br>")
   write("B = ["+B+"]<br>")
   B.splice(6,1)
   write("����� ���������� ������� <code>B.splice(6,1)</code>:<br>")
   write("B = ["+B+"]<br>")
   write("��������� ���������� ������� <code>B.some(isIt)</code>:<br>")
   write(B.some(isIt)+"<br>")
   write("��������� ���������� ������� <code>B.every(isInRange)</code>:<br>")
   write(B.every(isInRange)+"<br>")
   write("��������� ���������� ������� <code>A.every(isInRange)</code>:<br>")
   write(A.every(isInRange)+"<br>")
}
// ������� ��� �������� ���������� � ����� forEach():
function fillIt(value,index,array){
   array[index]*=10
   document.write(index+": "+value+"<br>")
}
// ������� ��� �������� ���������� � ����� some():
function isIt(value,index,array){
   return (index<=array.length/2)&&(value<30)
}
// ������� ��� �������� ���������� � ����� every():
function isInRange(value,index,array){
   return (value>0)&&(value<50)
}