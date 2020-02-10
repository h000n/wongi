function changer(t){
    var body = document.querySelector('body')
    var url = document.querySelectorAll('a')
    var i = 0;
    if(t.value==='day'){
        body.style.backgroundColor='white';
        body.style.color='black';
        while(i < url.length){
            url[i].style.color = 'royalblue';
            i = i+1;
        }
        t.value = 'night';
    }
    else{
        body.style.backgroundColor='darkslategray';
        body.style.color='darkseagreen';
        while(i < url.length){
            url[i].style.color = 'goldenrod' ;
            i = i+1;
        }
        t.value = 'day';
    }
}
