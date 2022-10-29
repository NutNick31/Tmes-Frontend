import React from "react";
import "./Quiz.scss";

const Quiz_spiel = () => {
  // // Set the date we're counting down to
  // var countDownDate = new Date("Oct 13, 2022 23:59:25").getTime();

  // // Update the count down every 1 second
  // var x = setInterval(function () {
  //   // Get today's date and time
  //   var now = new Date().getTime();

  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now;

  //   // Time calculations for days, hours, minutes and seconds
  //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //   var hours = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   // Output the result in an element with id="demo"
  //   document.getElementById("demo").innerHTML =
  //     +minutes + "m " + seconds + "s ";

  //   // If the count down is over, write some text
  //   if (distance < 0) {
  //     clearInterval(x);
  //     document.getElementById("demo").innerHTML = "EXPIRED";
  //   }
  // }, 1000);

  return (
    <div className=""></div>

    // <div className="quiz_container">
    //   <h1>Quiz Spiel</h1>
    //   <p>Attempt the quiz within the given time</p>
    //   <div className="timer">
    //     <p className="timer text">Time Left :</p>
    //     <p id="demo" className="timer main"></p>
    //   </div>

    //   <iframe
    //     src="https://docs.google.com/forms/d/e/1FAIpQLSeCikVIkNuzlsgtjHM6iR1Ry27cBNtNXJ_s8cu6RDeKC1SmiA/viewform?embedded=true"
    //     width={640}
    //     height={1200}
    //     frameborder={0}
    //     marginheight={0}
    //     marginwidth={0}
    //     title="quiz"
    //   ></iframe>
    // </div>
  );
};

export default Quiz_spiel;
