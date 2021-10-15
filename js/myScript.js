

function playBgm() {

    if(0 == $("#bgmBt").html().indexOf("Play")){
        $("#myAudio").get(0).play();
        $("#bgmBt").html("Stop");
        return;
    }

    if(0 == $("#bgmBt").html().indexOf("Stop")){
        $("#myAudio").get(0).pause();
        $("#bgmBt").html("Play");
        return;
    }

}


function slowLoadBt() {
    $("#bgmBt").fadeIn(3000);
}

