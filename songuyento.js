function soNguyenTo(a) {
    var flag = true;
    var a = document.getElementById('ab').value;
    if (a < 2) {
        flag = false;
    } else {
         for ( i=2; i<a; i++)  {
           if ( a%i==0) {
            flag = false;
            break;
        }
    }
   } if (flag == false) {
        document.writeln("Số không phải là số nguyên tố: ", a);
    } else {
        document.writeln("Số là số nguyên tố: ",a);
    }

}