function songuyento() {
    var flag = true;
    var a = document.getElementById('abc').value;
    for ( i=2; i<=a; i++)  {
        if ( a%i==0) {
            flag = false;
            break;
        }
    }
    if (flag == true) {
        document.writeln("Số là số nguyên tố: ", a);
    } else {
        document.writeln("Số không phải số nguyên tố: ",a);
    }

}