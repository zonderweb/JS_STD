// �������� �����:
for(var x=-1;x<=1;x+=2){
   // ������� try-catch ����:
   try{
   document.write("������ �������� <code>try-catch</code> �����<br>")
      // ���������� try-catch ����:
      try{
         document.write("������ ����������� <code>try-catch</code> �����<br>")
         // �������� ������� (�������� ������ RangeError):
         var A=new Array(x)
         // ������������ �������:
         var B=C
      }
      // ���������� ����������:
      catch(e){
         // ���� ������ RangeError:
         if(e.name=="RangeError"){
            e.message="�������� ������ ������� (������ <code>RangeError</code>)"
            // ��������� ������������� ����������:
            throw e
         }
         document.write("������������ ������������<br>")
      }
      // ���� ����������� � ����� ������:
      finally{
         document.write("���������� ����������� <code>try-catch</code> �����<br>")
      }
      document.write("������ <code>RangeError</code> �� ����<br>")
   }
   // ������� ����������:
   catch(err){
      document.write(err.message+"<br>")
   }
   document.write("���������� �������� <code>try-catch</code> �����<hr>")
} // ���������� ��������� �����