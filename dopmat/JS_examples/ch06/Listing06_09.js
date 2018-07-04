// ������� ��� �������� ���������� ����������,
// ��������� ��� �������� �������:
function testArgs(func){
   // ���������� ���������� �������:
   var n=func.length
   var words
   // ����������� �������� ��������� ����������:
   switch(n){
      case 0:
         words="��� ����������."
         break
      case 1:
         words="���� ��������."
         break
      case 2:
      case 3:
      case 4:
         words=n+" ���������."
         break
      default:
         words=n+" ����������."   
   }
   document.write("������� "+func+": "+words+"<br>")
}
// ��������������� ������� ��� ����������:
function show(){
   document.write("���� ������!")
}
// ��������������� ������� � ������ �����������:
function F(a,b,c,d,e,f){
   return a*b*c*d*e*f
}
// �������� ���������� ���������� �������:
testArgs(eval)
testArgs(Math.pow)
testArgs(show)
testArgs(F)
// ������� ���������� ����������� �� �� �������,
// � ������� ��� �������� ������� ������ ����������:
function getFunc(f1,f2){
   if(f1.length<=f2.length){
      return f1
   }
   else{
      return f2
   }
}
// ������� ������ ������� getFunc():
var x=getFunc(Math.pow,F)(2,3)
document.write(x+"<br>")
getFunc(show,eval)()