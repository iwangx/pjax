/**
 * Created by wangxing on 2015/9/1.
 */
(function($){
    function pjax(url){
        var body=document.body,
            iframe=document.createElement("iframe");
        iframe.style.display="none";
        body.appendChild(iframe);
        iframe.addEventListener("load",function(e){
            //location.href=url;
            alert("加载完了...")
        });
        iframe.src=url;
    }
    window.pjax=pjax;
})(Zepto);