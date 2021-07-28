export default function photoSlideshow() {

    let counter = 2;

    var currentPhoto = document.getElementsByClassName("loginLeftDiv1");

    setInterval(() =>{
        if(counter === 1) {
            currentPhoto.classList.remove(`loginLeftDiv8`)
        } else {
        currentPhoto.classList.remove(`loginLeftDiv${counter-1}`)
        }

        currentPhoto.classList.add(`loginLeftDiv${counter}`)

        if (counter === 8) counter = 1
        else {counter++}
    }, 2000)
  }
  