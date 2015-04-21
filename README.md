#MemoryPage
--
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
