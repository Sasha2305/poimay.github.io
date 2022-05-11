var stroka=1;
var stolb=1;
var cl=0;//баллы
var straf=0;//штрафы
var time=60;//время
but=["img/button.png","img/button2.png","img/button3.png","img/bonuse_2b.png","img/bonuse_3s.png","img/b_-2.png","img/s_-3.png",
"img/button.png","img/button2.png","img/button3.png","img/bonuse_3s.png","img/s_-3.png"]
function go(){//генерируем случайный мячик из массива в случайном положении
    idimg=document.getElementById("a"+stroka+stolb);
    idimg.src="img/spacer.gif";
    stroka=Math.floor(Math.random()*10+1);
    stolb=Math.floor(Math.random()*12+1);
    idimg=document.getElementById("a"+stroka+stolb);
    butRnd=Math.floor(Math.random()*12);
    idimg.src=but[butRnd];
}
function gmyack(str,stl){//при щелчке по мячику проверяем какой мячик щелкнули
    if(str==stroka&&stl==stolb){
        if(butRnd==0||butRnd==7){//добавляем балл, если щёлкнули по правильному мячику
        cl++;
        a.innerHTML="Попал: "+cl;
        }else if(butRnd==3){//добавляем два балла, если щёлкнули по мячику +2б
        cl=cl+2;
        a.innerHTML="Попал: "+cl;
        }else if(butRnd==4||butRnd==10){//добавляем 3 секунды, если щёлкнули по мячику +3с
           time=time+3;
           c.innerHTML="Время: "+time;
        }else if(butRnd==6||butRnd==11){//убавляем 3 секунды, если щёлкнули по мячику -3с
            time=time-3;
            c.innerHTML="Время: "+time;
        }else if(butRnd==5){//убавляем два балла, если щёлкнули по мячику -2б
        cl=cl-2;
        a.innerHTML="Попал: "+cl;
        }else{
        straf++;
        b.innerHTML="Штраф: "+straf;//в остальных случаях добавляем штрафное очко
    }        
        idimg=document.getElementById("a"+stroka+stolb);
        idimg.src="img/babah.gif";
    }
    if(cl>=15){//15 очков - победа
        a.innerHTML="Победа!"
        z.style.height=400+"px";
        z.src="img/vin.gif";
        d.style.height=350+"px";
        d.src="img/salut.gif"
        f.style.visibility="hidden";
        clearInterval(interval1);
        clearInterval(interval2);
        idimg=document.getElementById("a"+stroka+stolb);
        idimg.src="img/spacer.gif";
    }
    if(straf>=5){//5 штрафов - поражение
        b.innerHTML="Поражение!";
        z.style.height=100+"px";
        d.style.height=400+"px";
        z.src="img/knopka.png";
        d.src="img/crying-emoji-15.gif";
        f.style.visibility="hidden";
        clearInterval(interval1);
        clearInterval(interval2);
        idimg=document.getElementById("a"+stroka+stolb);
        idimg.src="img/spacer.gif";
    }
}
    function timer(){//проверка оставшегося времени
        time--;
        c.innerHTML="Время: "+time;
        if(time==0){
            z.style.height=100+"px";
            d.style.height=400+"px";
            d.src="img/time2.gif";
            f.style.visibility="hidden";
            c.innerHTML="Время вышло!"
            z.src="img/knopka.png";
            clearInterval(interval1)
            clearInterval(interval2)
            idimg=document.getElementById("a"+stroka+stolb);
            idimg.src="img/spacer.gif";
        }   
    }
interval1=setInterval(go,1000);
interval2=setInterval(timer,1000);
function rep(){
    stroka=1;
    stolb=1;
    cl=0;//баллы
    straf=0;//штрафы
    time=60;
    f.style.visibility="visible";
    interval1=setInterval(go,1000);
    interval2=setInterval(timer,1000);
    d.src="img/spacer.gif";
    z.src="img/spacer.gif";
    c.innerHTML="Время: "+time;
    b.innerHTML="Штраф: "+straf;
    a.innerHTML="Попал: "+cl;
    d.style.height=0+"px";
    z.style.height=0+"px";
}