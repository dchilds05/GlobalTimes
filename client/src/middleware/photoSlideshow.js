export default function photoSlideshow() {

    let counter = 2;

    var currentPhoto = document.getElementById("loginLeftDiv1");
    console.log("currentPhoto", currentPhoto)

    setInterval(() =>{
        currentPhoto.id = `loginLeftDiv${counter}`
        if (counter === 8) counter = 1;
        else counter++
    }, 3000)
  }


  