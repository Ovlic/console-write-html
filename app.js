var aText = new Array(
    "(Transcript started on Feb 14 2021, Finished on Feb 17 2021)",
    "",
    "",
    "Dear Asia,",
    "",
    "Look where we are right now. It all started when we met in a game of Arsenal, and now, 9 months later, we are the closest of friends. You stayed in contact through difficult times for you and me. You have really helped me persevere through life. You made me look forward toward the time where I can forget about what happened that day and have fun chatting or playing games with you. I also appreciate the fact that you introduced me into your friend groups. I now have many more people to talk to and mingle with.",
    "",
    "I'm very grateful that you are still in my life today and hope that you will still be in contact with me in the future. I can't possibly express how thankful for you I am.",
    "",
    "Happy Valentine's Day,",
    "Ovlic",
)

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

var typing = false
var prevtyping = false

function typewriter() {
    typing = true
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
    var box_cursor = document.getElementById("cursor")
    var afterglitch = document.getElementById("glitchtxtbelow")
    var isScrolledToBottom = destination.scrollHeight - destination.clientHeight <= destination.scrollTop + 1

    //console.log(box_cursor.classList)
    box_cursor.removeAttribute("hidden");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
        //br = document.createElement("br");
        //destination.insertBefore(br, box_cursor);
    }
    elem = document.createElement("span")
    elem.style.color = "white";
    elem.style.display = "inline";
    elem.style.wordWrap = "break-word";
    var newContent = document.createTextNode(aText[iIndex].substring(iTextPos - 1, iTextPos)); //(write);

    elem.appendChild(newContent);

    //destination.appendChild(elem)
    destination.insertBefore(elem, box_cursor);
    if (isScrolledToBottom) {
        destination.scrollTop = destination.scrollHeight - destination.clientHeight
    }
    if (iTextPos++ == iArrLength) {
        console.log("at iTextPos++ == iArrLength")
        typing = false
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            console.log("at iIndex != aText.length")
            typing = false
            br = document.createElement("br");
            br.style.display = "inline";
            destination.insertBefore(br, box_cursor);
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        } else{
            /*var elem = document.getElementById("glitchtxt")
            elem.style.display = "initial"
            setTimeout(function(){
                afterglitch.style.display = "initial"
            })*/
        }
    } else {
        //console.log("at else")
        //typing = false
        setTimeout("typewriter()", iSpeed);
    }
    prevtyping = typing
}


typewriter()

/*
setInterval(function blink() {
    var box_cursor = document.getElementById("cursor")
    if(prevtyping === false && typing === true){
        console.log("prevtyping false typing true")
        box_cursor.removeAttribute("hidden");
    }
    if(typing){
        console.log("typing")
        var box_cursor = document.getElementById("cursor")
        box_cursor.removeAttribute("hidden");
        box_cursor.setAttribute("class", "visible");
        console.log(box_cursor.classList)
        return
    } else {
        console.log("blink else")
        box_cursor.removeAttribute("visible");
        box_cursor.setAttribute("class", "hidden");
        $('#cursor').toggleClass('hidden');
    }
    box_cursor.removeAttribute("visible");
    box_cursor.setAttribute("class", "hidden");
    //box_cursor.className = ''
    document.getElementById("test").style.display= 'none';
    
    //$('#cursordiv').toggleClass('hidden');
    return
}, 600);*/

setInterval(function blink2() {
    if(prevtyping === false && typing === true){
        console.log("prevtyping false typing true")
        //box_cursor.removeAttribute("hidden");
        box_cursor.style.display = "inline";
    }
    if(typing){
        var box_cursor = document.getElementById("cursor")
        //box_cursor.removeAttribute("hidden");
        //box_cursor.setAttribute("class", "visible");
        box_cursor.style.display = "inline";
        return
    } else {
        box_cursor = document.getElementById("cursor")
        
        if (box_cursor.style.display === "none") {
            box_cursor.style.display = "inline";
        } else {
            box_cursor.style.display = "none";
        }
    }
}, 600)

/*
$(document.body).on('keypress', function(event) {
    $('#cursor').before(String.fromCharCode(event.keyCode));
});*/