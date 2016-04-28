(function(){
    var matchHeight = document.querySelectorAll(".match-height");
    var k = matchHeight.length;
    while(k--){
        var matchHeightChildren = matchHeight[k].children;
        var i = matchHeightChildren.length;
        var ele = matchHeightChildren[0].getBoundingClientRect();
        var largest = ele.bottom - ele.top;
        while(i--){
            var el = matchHeightChildren[i].getBoundingClientRect();
            var h = el.bottom - el.top;
            if(h > largest) {
                largest = h;
            }
        }
        var j = matchHeightChildren.length;
        while(j--) {
            matchHeightChildren[j].style.height = largest + "px";
        }
    }
})();
