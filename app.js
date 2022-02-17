var aText = new Array(
    "jeffery bonked his head this text must be longer so have more wow yes i know amazing",
    "send an ambulance to him"
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
        }
    } else {
        //console.log("at else")
        //typing = false
        setTimeout("typewriter()", iSpeed);
    }
    prevtyping = typing
}

typewriter();


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
    $('#cursor').toggleClass('hidden');
    return
}, 600);

$(document.body).on('keypress', function(event) {
    $('#cursor').before(String.fromCharCode(event.keyCode));
});