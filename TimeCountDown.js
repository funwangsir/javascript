function timeCountDown(elementId,seconds){
				var a = seconds;
                timedCount();
				function timedCount() {
                                document.getElementById(elementId).innerHTML = a;
				    a = (a == 0 ? 0 : a-1);
				    setTimeout(function(){ timedCount() }, 1000);
				}
			}