// Create custom dimension in Google Analytics using analytics.js

<script type="text/javascript">

/* Bind Google Analytics to Website -- do not use graphical user interface of CMS for this purpose */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

/* Bind your Google Analytics Property to the website */
ga('create', 'UA-XXXXXXXX-Y', 'auto');

/*create UUID version 4 */
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

/* If the browser_id hasn't already been set... */
if (document.cookie.indexOf('browser_uuid_set=1') == -1) {

        /* Generate a UUID, and assign it to the browser_id custom dimension */
        ga('set', 'dimension1', uuidv4());

        /* Set a cookie so we won't override the UUID we just set */
        document.cookie = 'browser_uuid_set=1; expires=Fri, 01 Jan 2100 12:00:00 UTC; path=/';
}

/* Assign a timestamp to the utc_millisecs custom dimension */
var time_ms = new Date().getTime();

/* Set time of page view in miliseconds */
ga('set', 'dimension2', time_ms);

/* Send data to Google */
ga('send', 'pageview');


</script>
