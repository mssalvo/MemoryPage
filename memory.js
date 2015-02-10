 /**
 * @author Salvatore Mariniello
 * from https://github.com/mssalvo/MemoryPage
 */
 
 function MemoryPage() {
	    this.page = function () {
	        var x = document.getElementsByTagName("*"), objHTML = {};
	        for (i in x) {
	            switch (x[i].tagName) {
	                case 'INPUT':
	                case 'TEXTAREA':
	                case 'SELECT':
	                    if (x[i].id) {
	                        objHTML[x[i].id] = this.setValue(x[i]);
	                    }

	                    break;
                  case 'HTML':
                  case 'BODY':
                  case 'DIV':
                  case 'SPAN':
                  case 'P':
                  case 'PRE':
                  case 'BLOCKQUOTE':
                  case 'CITE':
                  case 'CODE':
                  case 'H1':
                  case 'H2':
                  case 'H3':
                  case 'H4':
                  case 'H5':
                  case 'H6':
                  case 'TD':
                  if(x[i].contentEditable){
                  objHTML[x[i].id] = x[i].innerHTML;
                  }
                  break;
	            }

	        }
	        return objHTML;
        };
	    this.path = location.pathname.split("/").join("_").split("-").join("_").split("?")[0];
	    this._wd = window;
	    this.baseHistory = {};
	    this.setProperty = function (o, v) {
	    if (o && o.tagName) {
      switch (o.tagName) {
          case 'INPUT':
      var elemType = o.type.toUpperCase();
        switch (elemType) {
          case 'TEXT':
          case 'PASSWORD':
          case 'FILE':
           o.value = v;
            break;
         case 'CHECKBOX':
         case 'RADIO':
          o.checked = v;
            break;
        }
            break;
         case 'TEXTAREA':
          o.value = v;
              break;
         case 'SELECT':
      for (var i = 0; i < o.options.length; i++) {
          if (o.options[i].text == v) {
              o.selectedIndex = i;
              break;
          }
        }
            break;
          case 'HTML':
          case 'BODY':
          case 'DIV':
          case 'SPAN':
          case 'P':
          case 'PRE':
          case 'BLOCKQUOTE':
          case 'CODE':
          case 'CITE':
          case 'H1':
          case 'H2':
          case 'H3':
          case 'H4':
          case 'H5':
          case 'H6':
          case 'TD':
          if(o.innerHTML){
          o.innerHTML=v;
          }
            break;
        }

	 }

	    };
	    this.setValue = function (o) {
	        if (o && o.type) {
	            var elemType = o.type.toUpperCase();
	            if (elemType == "TEXT" || elemType == "TEXTAREA" || elemType == "PASSWORD" || elemType == "FILE")
	                return o.value;
	            else if (elemType == "CHECKBOX")
	                return o.checked;
	            else if (elemType == "RADIO")
	                return o.checked;
	            else if (elemType.indexOf("SELECT") != -1)
	                return o.options[o.selectedIndex].text;
	        }

	        return "undefined";

        };
		this.setHistory=function(){
		var a_ = JSON.stringify(this.baseHistory, "");
		if('localStorage' in window)
		localStorage.setItem('history_',a_||"");
		else
		this._wd.name=a_||"";
		};
		this.getHistory=function(){
		if('localStorage' in window)
		return String(localStorage.getItem('history_')).length > 5 ? this._wd.eval('(' + localStorage.getItem('history_') + ')'):{};
		else
		return String(this._wd.name).length > 5 ? this._wd.eval('(' + this._wd.name + ')') : {};
		};
        this.get = function () {
            this.baseHistory = this.getHistory();
        if (this.baseHistory[this.path] != null && this.baseHistory[this.path] !=undefined) {
                var this_ = this.baseHistory[this.path];
	            for (i in this_) {
	              (function (x,o,f) {
	                f(document.getElementById(x), o[x] );
	            })(i, this_, this.setProperty)
                 }
	        }
	    };

	   this.set = function () {
		 this.baseHistory = this.getHistory();
		 this.baseHistory[this.path] = this.page();
		 this.setHistory();

	    }
	}
