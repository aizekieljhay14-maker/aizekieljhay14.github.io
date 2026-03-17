const message = `Hi desiree, I just wanted to say something clearly and honestly. I asked God for a sign to and let him guide me through in this, this is the time to finally confess my feelings for you—honestly. I like you a lot, desiree. I've been feeling this since the day I met you, the day that I've seen and heard your angelic beauty and voice. I'll be honest at you, na love at first sight ako—maybe not just love at first sight, but also love at first hear. One thing I liked about you is your voice, it really is so beautiful that I wish that i could just listen to it the whole day. The way you don't hesitate to have a duet with me is so admirable—actually, you're the first girl that I've sung with. That day, I don't hesitate too—I don't hesitate to admire you, because I know you're worth to be admired. I admire everything about you, and I will always be here admiring you. 

I'm not expecting something in return, but one thing is for sure—I genuinely like you so much, desiree. That's why I've taken this risk, without even knowing the chances of what's going to happen next. I'm here to honestly confess my feelings for you, and I'm sincerely trying for you—dahil gusto kita, desiree. 

I've seen your worth so much, and I know to my self that I also need to be worthy—worth it to be with you. I want to pursue you, without hesitation—and I'm willing to give you the best version of myself for you. The way you made me comfortable talking to you is so peaceful, I couldn't stop talking with you. It may sounds funny but, umaasa ako sayo—I'm asumming that baka may gusto karin sakin, but I'm not pressuring you and also not expecting something in return from you. I just wanted you to know that I'm really trying for you, because I like you so much.
`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
