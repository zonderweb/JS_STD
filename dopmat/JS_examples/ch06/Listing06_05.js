// ����������� ��� ������� ������:
function MyError(id,message){
   // �������� id:
   this.id=id
   // �������� message:
   this.message=message || "������ ����������������� ����"
}
// �������� ��� �������� ������ ����������������� ����:
MyError.prototype=Object.create(Error.prototype)
// �������� name ���������:
MyError.prototype.name="MyError"
// ����� toString() ���������:
MyError.prototype.toString=function(){
   // ��������� ���������� � ��������� ���������:
   var t=this.message+": "+this.name+". "
   t+="��� ������: "+this.id+"."
   // ��������� ������:
   return t
}
// ����������� ��� �������� ������ ����������������� ����:
MyError.prototype.constructor=MyError
// �������������� ��� (������� ����):
try{
   // �������������� ��� (���������� ����):
   try{
      // ������������� ���������� ����������������� ����:
      throw new MyError(200,"����������� ������")
   }
   // ��������� ���������� (���������� ����):
   catch(e){
      document.write(e+"<br>")
      // ������������� ������:
      throw new e.constructor(100)
   }
}
// ��������� ���������� (������� ����):
catch(e){
   document.write(e)
}