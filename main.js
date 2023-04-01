window.onload = function(){
    var seconds = 00;
    var mili = 00;
    var addseconds = document.querySelector('.seconds');
    var addmili = document.querySelector('.milli');
    var startbtn = document.querySelector('.start');
    var stopbtn = document.querySelector('.stop');
    var resetbtn = document.querySelector('.reset');
    var interval;


    startbtn.onclick = function () {
        clearInterval(interval);
        interval = setInterval(start, 10);
      };
      stopbtn.onclick = function () {
        clearInterval(interval);
      };
    resetbtn.onclick = function(){
        clearInterval(interval);
        seconds = '00';
        mili = '00';
        addseconds.innerHTML = seconds;
        addmili.innerHTML = mili;
    }

    function start(){
        mili++;

        if(mili > 9){
            addmili.innerHTML = mili;
        }
        if(mili < 9){
            addmili.innerHTML = '0' + mili; 
        }

        if(mili > 99){
            console.log(seconds);
            seconds++
            addseconds.innerHTML = '0' + seconds;
            mili = 0;
            addmili.innerHTML = '0' + 0;
        }
        if(seconds > 9){
            addseconds.innerHTML = seconds;
        }
    }
}