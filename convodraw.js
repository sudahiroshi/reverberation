function back2(){
    var canvas9 = document.getElementById('mainCanvas2');
    var ctx9 = canvas9.getContext('2d');

    //　破線
    ctx9.setLineDash([1,9]);//点の数
    ctx9.save();//点線のため

    //　背景
    ctx9.beginPath();
    ctx9.fillStyle = "white";
    ctx9.fillRect(0,0,mainCanvas2.width,mainCanvas2.height);
    ctx9.closePath();

    //　枠線
    //　縦
    ctx9.setLineDash([]);//直線にするため
    ctx9.lineWidth = 8;//線の太さ
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(1, 0);//線が傾く
    ctx9.lineTo(0, mainCanvas2.height);//座標点同士を繋いで線を引く
    ctx9.closePath();
    ctx9.stroke();
    //　横
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height-1);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height-1);
    ctx9.closePath();
    ctx9.stroke();
    ctx9.restore();//細字になる．弱くなる

    //　横のグリッド
    //　90db
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height/7);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height/7);
    ctx9.closePath();
    ctx9.stroke();

    //　80db
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height/7*2);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height/7*2);
    ctx9.closePath();
    ctx9.stroke();

    //　70db
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height/7*3);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height/7*3);
    ctx9.closePath();
    ctx9.stroke();

    //　60db
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height/7*4);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height/7*4);
    ctx9.closePath();
    ctx9.stroke();

    //　50db
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height/7*5);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height/7*5);
    ctx9.closePath();
    ctx9.stroke();

    //　40db
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(0, mainCanvas2.height/7*6);
    ctx9.lineTo(mainCanvas2.width, mainCanvas2.height/7*6);
    ctx9.closePath();
    ctx9.stroke();

    //　縦のグリッド
    //250Hz
    // ctx9.beginPath();
    // ctx9.strokeStyle = "red";
    // ctx9.moveTo(mainCanvas2.width/2-340, 0);
    // ctx9.lineTo(mainCanvas2.width/2-340, mainCanvas2.height);
    // ctx9.closePath();
    // ctx9.stroke();

    // //500Hz
    // ctx9.beginPath();
    // ctx9.strokeStyle = "red";
    // ctx9.moveTo(mainCanvas2.width/2-309, 0);
    // ctx9.lineTo(mainCanvas2.width/2-309, mainCanvas2.height);
    // ctx9.closePath();
    // ctx9.stroke();

    //1000Hz
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(mainCanvas2.width/2-218, 0);
    ctx9.lineTo(mainCanvas2.width/2-218, mainCanvas2.height);
    ctx9.closePath();
    ctx9.stroke();

    //2000Hz
    ctx9.beginPath();
    ctx9.strokeStyle = "red";
    ctx9.moveTo(mainCanvas2.width/2-37, 0);
    ctx9.lineTo(mainCanvas2.width/2-37, mainCanvas2.height);
    ctx9.closePath();
    ctx9.stroke();

    //3000Hz
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(mainCanvas2.width/2+145, 0);
    ctx9.lineTo(mainCanvas2.width/2+145, mainCanvas2.height);
    ctx9.closePath();
    ctx9.stroke();

    //4000Hz
    ctx9.beginPath();
    ctx9.strokeStyle = "black";
    ctx9.moveTo(mainCanvas2.width/2+327, 0);
    ctx9.lineTo(mainCanvas2.width/2+327, mainCanvas2.height);
    ctx9.closePath();
    ctx9.stroke();
 }

// 周波数表記
function par2(){
    var canvas8 = document.getElementById('heightCanvas2');
    var ctx8 = canvas8.getContext('2d');
    ctx8.font = "22px Helvetica";
     ctx8.fillText('0',20, 17, 100);
    // ctx8.fillText('250',70, 17, 100);
    // ctx8.fillText('500',110, 17, 100);
    ctx8.fillText('5msec',190, 17, 100);
    ctx8.fillText('10msec',370, 17, 100);
    ctx8.fillText('15msec',555, 17, 100);
    ctx8.fillText('20msec',740, 17, 100);
    //ctx8.fillText('(msec)',800, 17, 100);//座標指定
}

// dB表記
function db2(){
    var canvas7 = document.getElementById('widthCanvas2');
    var ctx7 = canvas7.getContext('2d');
    ctx7.font = "22px Helvetica";
    ctx7.fillText(' 1.0',1, 50, 100);
    ctx7.fillText(' 0',10, 190, 100);
    ctx7.fillText(' -1.0',-5, 320, 100);
}

//　周波数領域の描画
function convoDraw(){
    timerId = setInterval(function(){
    var canvas9 = document.getElementById('mainCanvas2');
    var canvasCtx2 = canvas9.getContext('2d');

    //*************************************************************
    var times = new Uint8Array(conanalyser.fftSize);
    conanalyser.getByteTimeDomainData(times);
    //************************************************************

    //　30db~100db
    var min2 = 30;
    var max2 = 100;
    var range2 = max2 - min2;

    //　スペクトラムのデータを取得
    var spectrum2 = new Float32Array(conanalyser.frequencyBinCount);
    conanalyser.getFloatFrequencyData(spectrum2);

    //　Canvasをクリア
    canvasCtx2.clearRect(0,0,canvas9.width,canvas9.height);
    //　背景
    back2();
    //　直線
    canvasCtx2.setLineDash([]);
    //ctx.strokeStyle = "black";
    //　描画
    canvasCtx2.beginPath();
    for(var j=0,len2 = spectrum2.length;j<len2;j++){

      //********************************************************
      var x = (j/len2)*canvas9.width;
      var y = (1 - (times[j] / 255)) * canvas9.height;
      //*********************************************************

        // // x座標の算出 (元波形の1/8,~2500Hz)
        // var x = (j / len2)*5*canvas9.width;
        // // y座標の算出
        // var y = (- 1 * ((spectrum2[j]-conanalyser.maxDecibels)/range2))*canvas9.height;

        // (j===0)?canvasCtx2.moveTo(x+1,y):canvasCtx2.lineTo(x+1,y);
        (j===0)?canvasCtx2.moveTo(x,y):canvasCtx2.lineTo(x,y);

    }
            canvasCtx2.strokeStyle = "#000000";
            //canvasCtx2.lineWidth = 3;//太くした
            canvasCtx2.stroke();
  },130);
}
