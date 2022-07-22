console.log('Hello World!');



for (var o = 0; o < 17; o++) {

var img = new Array('1.jpg', '2.jpg','3.jpeg', '4.png', '5.jpg','6.jpg','7.gif', '8.jpg','9.jpg', '10.jpg', '11.jpg','12.jpg','13.jpg','14.jpg','15.jpg','16.png','17.jpg');

var a = new Array('https://bhaveshbhavu.github.io/Doremon/', 'https://bhaveshbhavu.github.io/password-N/','https://bhaveshbhavu.github.io/LET-S-TRAVEL/', 'https://bhaveshbhavu.github.io/YOU-TUBE/', 'https://bhaveshbhavu.github.io/May-play/','https://bhaveshbhavu.github.io/food/','https://bhaveshbhavu.github.io/Loki/','https://bhaveshbhavu.github.io/img/','https://bhaveshbhavu.github.io/HDJum.Com/', 'https://bhaveshbhavu.github.io/Colors/', 'https://bhaveshbhavu.github.io/RATHORE-BHAVESH/','https://bhaveshbhavu.github.io/-_-/','https://bhaveshbhavu.github.io/Hamster/','https://bhaveshbhavu.github.io/Free-g/','https://bhaveshbhavu.github.io/Download-/','https://github.com/','https://bhaveshbhavu.github.io/new-random-image/');

for (var i = 0; i < 1; i++) {
  
 var box = document.querySelector('.img_box');
  

 box.innerHTML += `<img src="img/${img[o]}" onclick="window.open('${a[o]}')"/>`;
  
 
  }
  
}



