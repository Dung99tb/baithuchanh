var sum1=0, sum2=0;
    for ( i=1; i<=100; i++) {
        if ( i%2==0 ) {
            sum1 += i ;
        } else {
            sum2 += i;
        }
    }
 document.writeln("Có tổng số chẵn là: ",sum1);
 document.writeln("<br/>");
 document.writeln("Có tổng số lẻ là: ",sum2);

