 var data = {
     title : [
     "listok",
     "malaya",
     "mr-lambo"
    ],
     song : [
     "music/xcho-listok-mp3.mp3",
     "music/xcho-malaya-mp3.mp3",
     "music/xcho-mr-lambo-pablo-daj-mne-ognya-mp3.mp3"
    ],
     poster :[
         "https://i.scdn.co/image/ab67616d0000b2732faf4c952f860083b2e6c82e",
         "https://i.scdn.co/image/ab67616d00001e025d4156362a337995a4e56c87", 
         "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/dd/ef/47/ddef4793-bb6f-5531-84ba-50bd8999a5a7/cover.jpg/400x400cc.jpg"
        
        ],

  
 } 



  var song = new  Audio()
  window.onload = function (){
        playSong()
  }
  var currentSong = 0

  function playSong(){
     song.src = data.song[currentSong]

     var songTitle = document.getElementById("songTitle")
     songTitle.textContent = data.title[currentSong]

     var img = document.getElementById("row1")
     img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";

     var main = document.getElementById("main")

     main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
     song.play()

     
  }





  function playOrPauseSong(){
      let play = document.getElementById("play")

      if(song.paused){
          song.play()
          play.src = "images/pause.png"

      }else{
           song.pause()
           play.src = "images/play-button-arrowhead.png"
      }
        
  }



  song.addEventListener("timeupdate", function(){

    // console.log(song.duration);
    // console.log(song.currentTime);
    
    let fill = document.getElementById("fill")
    // console.log(fill);
    //276
    let posation = song.currentTime / song.duration
    
    fill.style.width = posation * 100 + "%"
    
    convertTime(song.currentTime)
    
    if(song.ended){
    next ()
    }
    
})



  function  convertTime(seconds){
      let currentTime = document.getElementById("currentTime")
      let min = Math.floor(seconds/60)
      let sec = Math.floor(seconds%60)

      min = (min < 10) ? "0" + min : min;
      sec = (sec < 10) ? "0" + sec : sec;

      currentTime.textContent = min + ":" + sec
  
      totalTime(Math.round(song.duration))
  }



      function totalTime(seconds){
          let min = Math.floor(seconds / 60)
          let sec = Math.floor(seconds % 60)

          min = (min < 10) ? "0" + min : min;
          sec = (sec < 10) ? "0" + sec : sec;

          currentTime.textContent += "  /  " + min + ":" + sec

      }


      function next (){
          currentSong++

          if(currentSong >= data.song.length){
              currentSong = 0
          }

          playSong()
          play.src = "images/pause.png"


      }

      function prev (){
        currentSong--

        if(currentSong < 0){
              currentSong = data.song.length -1
        }

        playSong()
        play.src = "images/pause.png"



    }  
    
   
    

    function muted(){
        let mute = document.getElementById("mute")


        if(song.muted){
            song.muted = false
            mute.src = "images/volume.png"

        }else{
            song.muted = true
            mute.src = "images/volume-mute.png"

        }

    }


    function decrease(){
        song.volume -= 0.2

    }


    function increase(){
        song.volume += 0.2
    }