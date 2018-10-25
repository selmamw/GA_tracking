// Create custom dimension in Google Analytics using analytics.js


<script type="text/javascript">

/* Bind Google Analytics to Website -- do not use graphical user interface of CMS for this purpose */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXXXXX-Y', 'auto');
/* Assign a timestamp to the utc_millisecs custom dimension */
var time_ms = new Date().getTime();

/* Function that creates a UUID version 4 */
 function create_UUID4() {
    //// return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    var uuid = '', ii;
    for (ii = 0; ii < 32; ii += 1) {
      switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += (Math.random() * 16 | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += (Math.random() * 4 | 8).toString(16);
        break;
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
      }
    }
    return uuid;
  };

/* If the browser_id hasn't already been set... */
if (document.cookie.indexOf('browser_uuid_set=1') == -1) {

        /* Generate a UUID, and assign it to the browser_id custom dimension */
        ga('set', 'dimension1', create_UUID4());

        /* Set a cookie so we won't override the UUID we just set */
        document.cookie = 'browser_uuid_set=1; expires=Fri, 01 Jan 2100 12:00:00 UTC; path=/';
}

/* Set time of page view in miliseconds */
ga('set', 'dimension2', time_ms)


/* Send data to Google */
ga('send', 'pageview');


</script>
