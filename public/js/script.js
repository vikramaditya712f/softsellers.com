
var speechRecognition = window.webkitSpeechRecognition
var recognition = new speechRecognition();
var textbox = $("#t_search");
var instructions = $("#instrutions");
var content=''
recognition.continuous = true;
// Changing Instructions with functions
recognition.onstart = function(){
    instructions.text("Voixce recognition is ON.");
    console.log("Its started");
}
recognition.onspeechend = function(){
    instructions.text("No Activity");
}
recognition.onerror = function(){
    instructions.text("Try Again");
}

recognition.onresult= function(event){
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript
    content += transcript
    textbox.val(content)
}
var count = 1;
var x = '';
// start recognition
$("#start-btn").click(function(event){
    console.log("1st");
    count+=1;
if(count%2==0){ 
    if (content.length){
        content+='' 
    }if(content==''){
        recognition.start();
    }
    else{
        content=x;
        textbox.val(x);
        recognition.start();
    }
    }
    else{
        recognition.stop()
    }
}

    )

// stop recognition
// $("#stop-btn").click(function(event){
//     recognition.stop()
// })

textbox.on('input',function(){
    content =$(this).val()
})