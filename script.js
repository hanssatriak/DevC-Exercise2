var hasil = 0;

function kali(){
    var x =  
    Number(document.querySelector("#nomor1").value) *
    Number(document.querySelector("#nomor2").value);

    document.querySelector("#hasil").value=x;
}

function bagi(){
    var x =  
    Number(document.querySelector("#nomor1").value) /
    Number(document.querySelector("#nomor2").value);

    document.querySelector("#hasil").value=x;
}


function jumlah(){
    var x =  
    Number(document.querySelector("#nomor1").value) +
    Number(document.querySelector("#nomor2").value);

    document.querySelector("#hasil").value=x;
}

function kurang(){
    var x =  
    Number(document.querySelector("#nomor1").value) -
    Number(document.querySelector("#nomor2").value);

    document.querySelector("#hasil").value=x;
}

function reset(){
    document.querySelector("#nomor1").value=0;
    document.querySelector("#nomor2").value=0;
    document.querySelector("#hasil").value=0;
}

