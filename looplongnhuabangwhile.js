let sout = "<table border='1' width='300' cellPadding='3' cellspacing='0'>";
let i,j;
i = j = 1;

while (i <= 10){
    sout = sout +"<tr>";
    while (j <= 10){
        sout = sout + "<td>" + i * j + "</td>";
        j++;
    }
    sout = sout + "</tr>";
    j = 1;
    i++;


}
sout = sout + "</table>";
document.write(sout);