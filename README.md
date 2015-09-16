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
only important map elements containing the <b>id attribute</b><br><br>
excuse my ignorance of the English language



#Usage

*Incoming run get method* 
---
*Outgoing run set method*
---
   
      var  memory_page = new MemoryPage(); 
       memory_page.get();
       
        *exit*
        memory_page.set(); 
      
 
