var años =["2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013"]

for(var i=0; i<19; i++) {
    switch (i) {
        case 1:
        console.log("2004 es un año par")
            break;
        case 3:
        console.log("2006 es un año par")
            break;
        case 5:
        alert("Este es el sexto año (tambien es par :P)")
            break;
        case 8:
        console.log("2010 es un año par")
            break;
        case 10:
        console.log("2012 es un año par")
            break;
        default:
            break;
    }
    alert(años[i])
}