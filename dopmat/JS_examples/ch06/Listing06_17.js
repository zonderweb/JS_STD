// ������� ���� � �����:
var today=new Date()
// ��������� ����:
var tomorrow=new Date(today)
tomorrow.setDate(tomorrow.getDate()+1)
// ���������� ����:
var yesterday=new Date(today)
yesterday.setDate(yesterday.getDate()-1)
// ����� �����:
var monthAfter=new Date(Date.now())
monthAfter.setMonth(monthAfter.getMonth()+1)
// ����� ���:
var yearAfter=new Date(Date.now())
yearAfter.setFullYear(yearAfter.getFullYear()+1)
// ����������� ���:
document.write("<b>�������:</b> "+today+"<br>")
document.write("<u>���:</u> "+today.getFullYear()+"<br>")
document.write("<u>����:</u> "+today.toLocaleDateString()+"<br>")
document.write("<u>�����:</u> "+today.toLocaleTimeString()+"<br>")
document.write("<b>������:</b> "+tomorrow+"<br>")
document.write("<b>�����:</b> "+yesterday+"<br>")
document.write("<b>����� �����:</b> "+monthAfter+"<br>")
document.write("<b>����� ���:</b> "+yearAfter+"<br>")
// ����� ������� (���� ������ ���� � �����):
var meeting=new Date(2015,8,30,8,0,0)
// ����������� ���:
document.write("<b>�������:</b> "+today.toLocaleString()+"<br>")
document.write("<b>����� � ���� �������:</b> "+meeting.toLocaleString()+"<br>")
// ��������� ����:
meeting.setDate(meeting.getDate()+1)
// ����������� ����� ����:
document.write("<b>����� ����� � ���� �������:</b> "+meeting.toLocaleString()+"<br>")
// ����� �� ������� (� �������������):
document.write("<u>�� �������:</u> "+(meeting-today)+" �����������<br>")
// ����� �� ������� (� ����):
document.write("<u>�� �������:</u> "+Math.round((meeting-today)/1000/60/60/24)+" ����<br>")