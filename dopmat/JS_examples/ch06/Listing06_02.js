try{
   document.write("������ ���������� <code>try</code>-�����<br>")
   var txt=prompt("������� ��������� ��� ����������:")
   document.write("��������� ���������� ���������: "+eval(txt)+"<br>")
   document.write("���������� <code>try</code>-����� ���������<br>")
}
catch(e){
   // �������� ������
   var name=e.name
   // �������� ������:
   var message=e.message
   // ����� ��� �����������:
   var str
   // �������� ���� ������:
   switch(name){
      case "ReferenceError":
         str="������������ ������"
         break
      case "SyntaxError":
         str="�������������� ������"
         break
      default:
         str="������ "+name
   }
   // ����������� ������������� ������:
   document.write("<b>��������! ��������� ������!</b><br>")
   document.write("<b>��� ������: </b>"+str+"<br>")
   document.write("<b>�������� ������: </b>"+message+"<br>")
   // ��� Mozilla Firefox:
   if("fileName" in e){
      document.write("<b>���� � �������: </b>"+e.fileName+"<br>")
   }
}
document.write("���������� �������� ���������")