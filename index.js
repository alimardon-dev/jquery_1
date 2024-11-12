$(Document).ready(function(){
    $("h1").css("color","blue");
    $("body").css("background","black");
    
    for (let index = 1; index < 90; index++) {
        $("button").css("font-size",index+"px");
    }
    $("button1").css("border-radius", "10%");
})
$(Document).ready(function(){
    $("h1").addClass("big-title");
    $("h1").removeClass("big-title");
    $("h1").text("Bye");          
    $("h1").html("<i><b>Hello again</b></i>");
    $("button").css("font-size","40px");
    $("button").css("border-radius", "10%");
    $("button").css("font-style","italic")
})
