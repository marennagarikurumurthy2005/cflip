let image = document.getElementById('img')
let button = document.getElementById('btn')
let audio = new Audio('/audio/salaar.mp3')
let previous = '';

button.addEventListener('click',()=>{
    image.classList.remove('flip-image');
    void image.offsetWidth;
    image.classList.add("flip-image");
    audio.currentTime = 0;
    audio.play();

    // setTimeout(()=>{
    //     num=Math.random()
    //     if (num%2==0){
    //         image.src = 'images/head.jpg';
    //     }
    //     else{
    //         image.src = 'images/tail.jpg'
    //     }

    // },750)
    setTimeout(() => {
    let result;
    if(previous === 'head'){
        result = Math.random() < 0.6 ? 'tail' : 'head';
    }
    else{
        result = Math.random() < 0.6 ? 'head' : 'tail';
    }
    previous = result;
    image.src = `images/${result}.jpg`;
    audio.pause();          // stop audio
    audio.currentTime = 0;
    }, 15500);

})