function PrintElem(){
    // var generator=window.open(",'name,");
    // var layerPrint =document.getElementById('print');
    // console.log(layerPrint);
    // generator.document.write(generator.innerHTML = layerPrint);
    //
    // generator.document.close();
    // generator.print();
    // generator.close();
    var mywindow = window.open('',);
    var layerPrintSRC = document.querySelector('.cert-img').src;
    console.log(layerPrintSRC);
    mywindow.document.write('<html><head><title></title>');
    mywindow.document.write('</head><body>');
    mywindow.document.write('<img src="'+layerPrintSRC+'">');
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.focus();

    mywindow.print();
    mywindow.close();

}