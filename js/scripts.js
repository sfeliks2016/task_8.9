// plik scripts.js petle


// funkcja rysujChoinke()

function rysujChoinke(a) {
     
    for (var i=0; i<a; i++){    
     
        star='*';
        console.log(star);  
    
           for (var i=0;i<a-1;i++){
    
            star += '**';
            console.log(star);
            
        }
    }
}


rysujChoinke(5);

//wynik dla rysujChoinke(5);
/*

*
***
*****
*******
*********

*/  
