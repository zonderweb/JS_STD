document.write("<h4>�������� ������� � �������</h4>")
// �������� �������:
var colors={
   red:"�������",
   yellow:"������",
   green:"�������",
   show:function(){
      with(document){
         write("�������� � ������ �������:<br>")
         for(var s in this){
            write(s+" | ")
         }
         write("<hr>")
      }
   }
} // ��������� �������� �������
// ����������� ������ �������:
colors.show()
// �������� �������� red:
delete colors.red
// ����������� ������ �������:
colors.show()
// �������� �������� yellow:
delete colors.yellow
// ����������� ������ �������:
colors.show()
// �������� ������ show():
delete colors.show
// �������� ������� � ������� ������ show:
var tst='"show" in colors'
document.write(tst+" -> "+eval(tst)+"<br>")
// �������� ������� � ������� �������� green:
tst='"green" in colors'
document.write(tst+" -> "+eval(tst))