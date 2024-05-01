window.setInterval(showTime, 1000);
window.onresize = resize;

vw_stat = false;
side_hidden = false;


function resize(){
    if (vw_stat) {
        w_duration = 1;
        h_duration = 1;
        viewerToVisible();
    }
}

function showTime() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var nowhour = now.getHours();
    var nowminutes = now.getMinutes();
    var nowseconds = now.getSeconds();

    var text = month + "/" + day + " " + nowhour + ":" + 
                nowminutes + ":" + nowseconds; 
    document.getElementById("time").innerHTML = text;
}

function viewerCloser() {
    //closeSE();
    document.querySelector(`#viewer-window`).animate(
        [ { height: viewer_height }, { height: '0%' } ],
        { duration: 300, fill: 'forwards' }
        );
    document.querySelector(`#viewer-window`).animate(
        [ { width: viewer_width }, { width: '0%' } ],
        { duration: 300, fill: 'forwards', delay: 300}
    );
    document.querySelector(`#viewer-window`).animate(
        [ { opacity: 1 }, { opacity: 0 } ],
        { duration: 400, fill: 'forwards', delay: 630}
    );
    vw_stat = false;
}

function viewerToVisible() {
    if (window.matchMedia('(max-width: 767px)').matches) { /*phone*/
        viewer_width = '97%';
        viewer_height = '97%';
        document.getElementById("viewer-window").style.zIndex = 101;
        document.getElementById("viewer-window").style.left = 0;
    } else if (window.matchMedia('(min-width:768px)').matches) { /*PC*/
        viewer_width = '86%';
        viewer_height = '90%';
        document.getElementById("viewer-window").style.zIndex = 101;
        document.getElementById("viewer-window").style.left = '0%';
    }
    document.querySelector(`#viewer-window`).animate(
        [ { opacity: 0 }, { opacity: 1 } ],
        { duration: 1, fill: 'forwards'}
    );
    document.querySelector(`#viewer-window`).animate(
        [ { width: 0 }, { width: viewer_width } ],
        { duration: w_duration, fill: 'forwards' }
    );
    document.querySelector(`#viewer-window`).animate(
        [ { height: 0 }, { height: viewer_height } ],
        { duration: h_duration, fill: 'forwards',delay: 200 }
    );
}

function bootWindow(url, name){
    var iframe = document.getElementById('mframe');
    var iframed = (iframe.contentWindow || iframe.contentDocument);

    iframed.location.replace(url);
    document.getElementById('viewer-title').textContent = name;

    w_duration = 200;
    h_duration = 300;
    if(!vw_stat){
        vw_stat = true;
        viewerToVisible();
    }
}

function toggleSide(){
    if(side_hidden){
        document.getElementById('side-toggle-icon').src = 'images/side-in.png';
        document.querySelector(`#side-bar`).animate(
            [ { minWidth: 0 }, { minWidth: '13rem' } ],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(`#side-bar`).animate(
            [ { width: 0 }, { width: '13rem' } ],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(`#side-bar`).animate(
            [ { opacity: 0 }, { opacity: 1 } ],
            { duration: 100, fill: 'forwards', delay: 50}
        );
        side_hidden = false;
    } else {
        document.getElementById('side-toggle-icon').src = 'images/side-out.png';
        document.querySelector(`#side-bar`).animate(
            [ { minWidth: '13rem' }, { minWidth: 0 } ],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(`#side-bar`).animate(
            [ { width: '13rem' }, { width: 0 } ],
            { duration: 200, fill: 'forwards'}
        );
        document.querySelector(`#side-bar`).animate(
            [ { opacity: 1 }, { opacity: 0 } ],
            { duration: 100, fill: 'forwards', delay: 50}
        );
        side_hidden = true;
    }
}

function typing(selector){
    
}