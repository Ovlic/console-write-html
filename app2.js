
    var aText = new Array(
        "jeffery bonked his head this text must be longer so have mroe wow yes i know amazing",
        "send an ambulance to him"
    )
    
    var iSpeed = 100; // time delay of print out default: 100
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     var isScrolledToBottom = destination.scrollHeight - destination.clientHeight <= destination.scrollTop + 1

     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     elem = document.createElement("span")
     elem.style.color = "white";
     elem.style.display = "inline";
     elem.style.wordWrap = "break-word";
     var newContent = document.createTextNode(aText[iIndex].substring(iTextPos-1, iTextPos));//(write);

     elem.appendChild(newContent);
     
     destination.appendChild(elem)
     if (isScrolledToBottom) {
        destination.scrollTop = destination.scrollHeight - destination.clientHeight
      }
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       br = document.createElement("br");
       br.style.display = "inline";
       destination.appendChild(br);
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    typewriter();


setInterval(function blink () {
    $('#cursor').toggleClass('hidden');
    }, 600);
    
    $(document.body).on('keypress', function(event) {
        $('#cursor').before(String.fromCharCode(event.keyCode));
    });