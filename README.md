# Gulp-Opencart-Browser-Sync-
Browser-Sync


1) After start gulp, need copy on terminal snippet (snippet unique for your server settings)

<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.23.6'><\/script>".replace("HOST", location.hostname));
//]]></script>

2) Copy to file footer.twig  on your theme  "../catalog/view/theme/{{ theme name }}/template/common/footer.twig " before body close tag <body/>

 
