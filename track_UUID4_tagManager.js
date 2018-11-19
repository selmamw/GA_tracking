// Dimension to collect UUID4
function browser_id() {
  if (document.cookie.indexOf('browser_uuid_set=1') == -1) {
  	// Set a cookie so we won't override the UUID we just set
    document.cookie = 'browser_uuid_set=1; expires=Fri, 01 Jan 2100 12:00:00 UTC; path=/';

  	uuidv4 = function() {
   	 	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     		 var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      	return v.toString(16);
    		});
  	}

    return uuidv4();

  }
}



//Dimension to collect timestamp in utc ms
function time_ms() {
 /* Assign a timestamp to the utc_millisecs custom dimension */
	var time_ms = new Date().getTime();
  	return time_ms;
}
