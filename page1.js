
        window.onload=function () {
            var cover =document.getElementsByClassName('covers')[0];
            window.onscroll=function () {
                var st=document.documentElement.scrollTop;
                if(st>180){
                    cover.style.position='fixed'
                }
                else{
                    cover.style.position='static'
                }
            }
        }
        

/*
        var money = document.getElementById('money');
        console.log(money);
        var p = document.getElementById('f1');
        console.log(p);
        console.log(money[0].value); 
        console.log(money[1].value);
        console.log(money[2].value);
        console.log(money[3].value);
        console.log(money[3].selected);
        money.onclick = function(){
            for(var i=0;i<money.length;i++){
                if(money[i].selected){
                    p.innerHTML = '<p id="f1">¥&nbsp;'+money[i].value+'</p>'
                }
            }
        }


 
        var ul = document.getElementById("ul");

        function show() {
            var top = ul.offsetTop - 1; //获取top值
            ul.style.top = top + "px"; //设置top值

            //走完一半再返回
            if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
                ul.style.top = 0;
            }
        }
        var t = setInterval(show, 15);

        //li添加鼠标移入移出事件
        var li = document.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            //移出事件
            li[i].onmouseout = function () {
                t = setInterval(show, 15);
            };
            //移入事件
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }


        

        var div1 = document.getElementById('div1');
        var div2 = document.getElementById('div2');
        var div3 = document.getElementById('div3');
        var div4 = document.getElementById('div4');
        div1.onmouseover=function(){
            div1.style.right="-30px"
        }
        div1.onmouseout=function(){
            div1.style.right="-100px"
        }

        div2.onmouseover=function(){
            div2.style.right="0px"
        }
        div2.onmouseout=function(){
            div2.style.right="-100px"
        }

        div3.onmouseover=function(){
            div3.style.right="0px"
        }
        div3.onmouseout=function(){
            div3.style.right="-100px"
        }

        div4.onmouseover=function(){
            div4.style.right="0px"
        }
        div4.onmouseout=function(){
            div4.style.right="-100px"
        }

*/