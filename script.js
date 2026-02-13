// Hero Slider
let slide=0;
setInterval(()=>{
  const s=document.querySelectorAll('.slide');
  s.forEach(i=>i.classList.remove('active'));
  slide=(slide+1)%s.length;
  s[slide].classList.add('active');
},3000);

// Theme Toggle
function toggleTheme(){
  document.body.classList.toggle('dark');
}

// Modal
function closeCaution(){
  document.getElementById('cautionModal').style.display='none';
}

window.onload=()=>{
  setTimeout(()=>{
    document.getElementById('cautionModal').style.display='flex';
  },1000);
}

// Buy Button Counter
function buy(btn){
  let c=btn.innerText.match(/\d+/);
  btn.innerText=c?`BUY (${parseInt(c[0])+1})`:'BUY (1)';
}

// Read More
function read(text){
  alert(text);
}

// Load More Instagram
function loadMore(){
  const g=document.getElementById('insta');
  ['img26.png','img27.png','img28.png','img29.png','img30.png'].forEach(i=>{
    let im=document.createElement('img');
    im.src=i;
    g.appendChild(im);
  });
}

// Scroll to Footer
function scrollToFooter(){
  document.getElementById('footer').scrollIntoView({behavior:'smooth'});
}

// Video Toggle Sound
function toggleVideo(){
  const video = document.getElementById('mainVideo');
  const btn = document.getElementById('videoToggle');
  
  if(video.muted){
    video.muted = false;
    btn.innerText = '🔊 Mute';
  } else {
    video.muted = true;
    btn.innerText = '🔇 Unmute';
  }
}