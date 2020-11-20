let count1 = 0;
document.getElementById("tombol-lampu").addEventListener("click", function(){
    count1++
    if(count1 % 2 == 1){

        document.getElementById("indikator-lampu").style.background = "green";
    }
    else {
        document.getElementById("indikator-lampu").style.background = "red";
    }
    
});

let count2 = 0;
document.getElementById("tombol-AC").addEventListener("click", function(){
    count2++
    if(count2 % 2 == 1){

        document.getElementById("indikator-AC").style.background = "green";
    }
    else {
        document.getElementById("indikator-AC").style.background = "red";
    }
    
});

let count3 = 0;
document.getElementById("tombol-saklar").addEventListener("click", function(){
    count3++
    if(count3 % 2 == 1){

        document.getElementById("indikator-saklar").style.background = "green";
    }
    else {
        document.getElementById("indikator-saklar").style.background = "red";
    }
    
});

let count4 = 0;
document.getElementById("tombol-terminal").addEventListener("click", function(){
    count4++
    if(count4 % 2 == 1){

        document.getElementById("indikator-terminal").style.background = "green";
    }
    else {
        document.getElementById("indikator-terminal").style.background = "red";
    }
    
});
