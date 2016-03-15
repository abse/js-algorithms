// busqueda lineal

var conjunto = ["coche", "casa", "cosas", "router"];

function linealSearching(vector, patt) {
    var i;
    i = 0;
    
    vector[vector.length] = patt;
    
    while(vector[i] !== patt) {
        i += 1;
    }
    
    if(i == vector.length-1) {
        return false;
    }   else {
        return true;
    }
    
}

linealSearching(conjunto, "casa");
