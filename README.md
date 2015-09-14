#MemoryPage
--
#description
MemoryPage map all the elements of the html page (input select ckeck radio etc. etc ..)<br>
stores the value, resets the value of the get () method<br>
and stores the value with the set () method<br>
useful when it is not possible to use the GoBack history
<br>
<br>

example:<br>
within the page<br>
use the method<br>
memory_page.get ();<br>
exit<br>
use the method<br>
memory_page.set ();
<br>
<br>

excuse my ignorance of the English language



#Usage
var memory_page;<br><br>
    window.onload = function () {<br><br>
        memory_page = new MemoryPage();<br><br>
       <b> memory_page.get();</b><br><br>
        var bntAvanti = document.getElementById("btn-avanti");<br>
        if (window.addEventListener) {<br>
            bntAvanti.addEventListener("click", function () { <b>memory_page.set();</b> }, false);<br>
        } else if (window.attachEvent) {<br>
            bntAvanti.attachEvent("onclick", function () { <b>memory_page.set();</b> });<br>
        }<br>
    };<br>
