//a x b = total
let sout;
let total;
sout = "<table border='1' width='100%' cellspacing='0' cellpadding='3'>"
for (a = 2; a <= 9; a++) {
    sout = sout + "<tr>";
    for (b = 2; b <= 9; b++) {
        total = a * b
        sout = sout + "<td>" + a + " x " + b + " = " + total + "</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);