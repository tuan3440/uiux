$(document).ready(() => {
    
})

function nomalTextInput() {
    var rs = "";
    var txt = $("#convertNomal").val();
    tocKy = txt.split(" ");
    for (var c of tocKy) {
        rs += convertTocky(c) + " ";
    }
    $("#convertTocky").val(rs);
}

function convertTextInput(){
}