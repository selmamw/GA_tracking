// Create custom dimension in Google Analytics using analytics.js

/* Bind UUID generator script */
<script src="https://wzrd.in/standalone/uuid@latest">
</script>

<script type="text/javascript">

/* Bind Google Analytics to Website -- do not use graphical user interface of CMS for this purpose */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

/* Bind your Google Analytics Property to the website*/
ga('create', 'UA-XXXXX-Y', 'auto');


/* If the browser_id hasn't already been set... */
if (document.cookie.indexOf('browser_uuid_set=1') == -1) {

        /* Generate a UUID, and assign it to the browser_id custom dimension */
        ga('set', 'dimension1', uuid.v4());

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
