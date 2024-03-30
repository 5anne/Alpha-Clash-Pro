// function playNow(){
//     // console.log('Play start now!');
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function playNow(){
    hideElementById('home-screen');
    showElementById('play-ground');
}