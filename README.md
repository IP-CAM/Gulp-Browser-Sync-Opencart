# Gulp-Opencart-Browser-Sync-

Install gulp

<code>npm install gulp-cli -g</code>

Update package in gulp

<code>ncu or ncu -u</code>


<p>1) After start gulp, need copy on terminal snippet (snippet unique for your server settings). More information in server Browser-Sync default localhost:3001
</p>

<p>
    # --Snippet for local host--
<code>
<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.6'><\/script>".replace("HOST", location.hostname));
//]]></script>
</code> 
 </p>
  

<p>2) Copy to file footer.twig  on your theme  "../catalog/view/theme/{{ theme name }}/template/common/footer.twig " before body close <code></ body></code></p>
