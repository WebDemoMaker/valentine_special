
  (function() {
emailjs.init("user_cFWv2LtQSHBT4ZF1nsCUQ");
})();


          var queryDict = {};

  window.addEventListener("load",function(){
// alert(location.href)
    document.getElementById("whatsapp-share").setAttribute("href",`whatsapp://send?text=Hi, I have something amazing for you \n\n ${encodeURIComponent(location.href)}`)

    location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})
 
    // document.getElementsByClassName('dynamic_vnm')[0].innerHTML = queryDict['vnm']
    document.getElementsByTagName('title')[0].innerHTML = "Hi " + queryDict['vnm']


    console.log("load")
    document.getElementById('topvideo').innerHTML=`<video class="embed-responsive-item" src="https://res.cloudinary.com/rk22719/video/upload/v1644071144/hearthand_wouphr.mp4" type="video/mp4" autoplay muted loop></video>`       // muted loop

  })

  document.getElementById('reject').addEventListener('click',onRejection)
  document.getElementById('hold').addEventListener('click',onAccepting)

  function onAccepting(e)
  {

    // e.preventDefault()
    // alert("inside function=======")

    document.getElementsByClassName('outerheart')[0].style.display="none";
    // document.getElementsByTagName('body')[0].style.backgroundImage="url('./asset/broken.webp')";
        let aud=document.getElementById('audio')
        console.log("audio--")
           // window.addEventListener('load', function () {
        // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // var source = audioCtx.createBufferSource();
        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', 'https://res.cloudinary.com/rk22719/video/upload/v1644067978/onaccept_fynmg6.mp3');
        // xhr.responseType = 'arraybuffer';
        // xhr.addEventListener('load', function (r) {
        //   // audioCtx.currentTime=70
        //   console.log("load dtaa----",audioCtx.currentTime)

        //     audioCtx.decodeAudioData(
        //             xhr.response, 
        //             function (buffer) {
        //                 source.buffer = buffer;
        //                 source.connect(audioCtx.destination);
        //                 source.loop = true;
        //             });
        //     source.start(0);
        // });
        // xhr.send();
    // });

    //--------------------------------creating audio context and adding sound------------
    let audioCtx;
let source;
let songLength;

// const pre = document.querySelector('pre');
// const myScript = document.querySelector('script');
// const play = document.querySelector('.play');


async function getData() {
  if(window.webkitAudioContext) {
    audioCtx = new window.webkitAudioContext();
  } else {
    audioCtx = new window.AudioContext();
  }

  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'https://res.cloudinary.com/rk22719/video/upload/v1644070720/onaccept_vrcwuf.mp3', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    let audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        songLength = buffer.duration;
        source.buffer = myBuffer;
        // source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;

      
      },

      function(e){"Error with decoding audio data" + e.error});

  }

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

// play.onclick = function() {
  // alert("before getdata=========")
  getData()
  // alert("after getdata sorce satrt=========")

  source.start(0);
  // alert("after source=========")

  // play.setAttribute('disabled', 'disabled');

// }

//----------------------------------------------context ends-------------------------------------
//     aud.innerHTML=`<audio controls autoplay  style="position: absolute;visibility: hidden;z-index: -1;">
//   <source src="./asset/onaccept.mp3#t=00:01:13" type="audio/mp3">
// Your browser does not support the audio element.
// </audio>`
document.getElementById("main_content").style.display="flex";
document.getElementById("main_content").style.justifyContent="center";
document.getElementById("main_content").style.alignItems="center";
document.getElementById("main_content").style.flexDirection="column";
document.getElementById("main_content").innerHTML=`<div class="topleft animate__animated"><div style="background-color: red;top: 50%;position: absolute;left: 50%;width:100px;height: 100px;border-radius: 50%;transform: translate(-50%,-50%);"></div></div>
  <div class="topright animate__animated"><div style="background-color: red;top: 50%;position: absolute;left: 50%;width:100px;height: 100px;border-radius: 50%;transform: translate(-50%,-50%);"></div></div>



<div class="letter-image ">
  <div class="animated-mail animate__animated">
    <div class="back-fold"></div>
    <div class="letter p-2 ">
      <div class="text-left">Love</div>
       <div class="text-left">You</div>  <!--  letter-title -->
      <div class="text-left dynamic_vnm">${queryDict['vnm'].charAt(0).toUpperCase() + queryDict['vnm'].slice(1) }💘</div>
    <!--  <div class="text-right dynamic_nm pr-3" style="font-size: 12px;">Cdsfsff</div>  -->

      <hr/>
      <hr/>

      <div class="letter-stamp">
        <div class="letter-stamp-inner">hello</div>
      </div>
    </div>
    <div class="top-fold"></div>
    <div class="body"></div>
    <div class="left-fold"></div>
  </div>
  <!-- <div class="shadow"></div> -->
</div>

<div class="below_mail px-2 animate__animated ">
There are lots of other ways to ruin my life but still I choose you what else do you need😛😜
   <!--  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt -->

</div>
<!-- <div class="text-center mt-4">
<img src="https://www.animatedimages.org/data/media/404/animated-valentines-day-image-0204.gif" border="0" alt="animated-valentines-day-image-0204" class="img-responsive" />
</div> -->
<div style="display: flex;justify-content: center;align-items: center;margin-top: 125px;">
<div class="birthday-gift animate__animated ">
  <div class="gift">
  <input id='click' type='checkbox'>
  <label class='click' for='click'></label>
  <div class="wishes text-danger" ><img src="https://res.cloudinary.com/rk22719/image/upload/v1643985573/choco_dmhecn.jpg" class="img-fluid"></div>
       <div class="sparkles">
      <div class="spark1"></div>
      <div class="spark2"></div>
      <div class="spark3"></div>
      <div class="spark4"></div>
      <div class="spark5"></div>
      <div class="spark6"></div>
    </div>
    </div>
</div>
</div>

<div class="footer animate__animated w-100">

</div>`

document.getElementsByClassName("below_mail")[0].classList.add("animate__zoomInUp")
document.getElementsByClassName("animated-mail")[0].classList.add("animate__zoomInDown")
document.getElementsByClassName("topleft")[0].classList.add("animate__slideInLeft")
document.getElementsByClassName("topright")[0].classList.add("animate__slideInRight")
document.getElementsByClassName("birthday-gift")[0].classList.add("animate__jackInTheBox")
document.getElementsByClassName("footer")[0].classList.add("animate__rotateIn")

var templateParams = {
    "to_name": queryDict['nm'],
    "from_name": queryDict['vnm'],
    status:'accepted',
    to_email :'vivrk22719@gmail.com'
};
 
emailjs.send("service_an9kfit","template_4mxgi66",templateParams).then(function(response) {
    // alert("success",templateParams.to_name)
    // alert(JSON.stringify(templateParams))
       console.log('SUCCESS!', response.status, response.text,templateParams.to_email);
    }, function(error) {
        // alert("failed",templateParams.to_name)
       console.log('FAILED...', error);
    });

  }

  function onRejection(e)
  {
    e.preventDefault()
    document.getElementsByClassName('outerheart')[0].style.display="none";
    document.getElementsByTagName('body')[0].style.backgroundImage="url('./asset/broken.webp')";
//         let aud=document.getElementById('audio')
//     aud.innerHTML=`<audio controls autoplay style=" position: absolute;visibility: hidden;z-index: -1;">
//   <source src="./asset/onbroken.mp3" type="audio/mp3">
// Your browser does not support the audio element.
// </audio>`

    //--------------------------------creating audio context and adding sound------------
    let audioCtx;
let source;
let songLength;

// const pre = document.querySelector('pre');
// const myScript = document.querySelector('script');
// const play = document.querySelector('.play');


async function getData() {
  if(window.webkitAudioContext) {
    audioCtx = new window.webkitAudioContext();
  } else {
    audioCtx = new window.AudioContext();
  }

  source = audioCtx.createBufferSource();
  request = new XMLHttpRequest();

  request.open('GET', 'https://res.cloudinary.com/rk22719/video/upload/v1644070731/onbroken_mtk2cz.mp3', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    let audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        songLength = buffer.duration;
        source.buffer = myBuffer;
        // source.playbackRate.value = playbackControl.value;
        source.connect(audioCtx.destination);
        source.loop = true;

      
      },

      function(e){"Error with decoding audio data" + e.error});

  }

  request.send();
}

// wire up buttons to stop and play audio, and range slider control

// play.onclick = function() {
  // alert("before getdata=========")
  getData()
  // alert("after getdata sorce satrt=========")

  source.start(0);
  // alert("after source=========")


document.getElementById("main_content").style.display="flex";
document.getElementById("main_content").style.justifyContent="center";
document.getElementById("main_content").style.alignItems="center";
document.getElementById("main_content").style.flexDirection="column";



document.getElementById("main_content").innerHTML=`<div style="background-color:rgba(255,255,255,0.8);"><p style="font-size: 30px;text-align:center;color:purple;"> </p><br/><p style="font-size: 30px;text-align:center;color:purple;">Be always happy like this &#128578;&#128077; ,Good bye</p></div>`

var templateParams = {
    to_name: queryDict['nm'],
    from_name: queryDict['vnm'],
    status:'rejected',
    to_email :'vivrk22719@gmail.com'
};
 
// emailjs.send('service_an9kfit', 'template_4mxgi66', templateParams)
// emailjs.send("service_an9kfit","template_4mxgi66",templateParams).then(function(response) {
//   // alert("success",templateParams.to_name)
//        console.log('SUCCESS!', response.status, response.text,templateParams.to_email);
//     }, function(error) {
//         // alert("failed",templateParams.to_name)
//        console.log('FAILED...', error);
//     });
// aud.firstChild.play()
  }
