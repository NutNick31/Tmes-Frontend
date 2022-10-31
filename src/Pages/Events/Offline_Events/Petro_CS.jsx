import React from "react";
import "./vinod.scss";
/*  Case Study presents an opportunity to investigate into a current buzz
    in the Gas an Oil Industry. Here is achance to develop your insight in
    petroleum and learn the rudiments of it. It aims to gauge your
    analyzing and presentation skills of the fullestPETRO CASE STUDY Case
    Study presents an opportunity to investigate into a current buzz in
    the Gas an Oil Industry. Here is achance to develop your insight in
    petroleum and learn the rudiments of it. It aims to gauge your
    analyzing and presentation skills of the fullest.
*/

/* It is a two phase event 1st phase will be conducted online , Here in
  online mode the problem statement will be submitted Then 2nd phase
  will be conducted offline in the campus during fest, this involves
  Debate /presentation/question answer rounds. 
*/

/*
        1st prize will be of 12000 Rs. 2nd prize will be of 8000 Rs. 3rd prize
        will be of 5000 Rs.
*/

const Petro_CS = () => {
  return (
    <div className="off_events section__padding" id="off_events">
      <div className="off_events-image">
        <img src="https://source.unsplash.com/g5tvZdOK0EM" alt="off_events" />
      </div>
      <div className="off_events-content">
        <h1 className="gradient__text">PETRO CASE STUDY</h1>
        <p>Case Study presents an opportunity to investigate into a current buzz
    in the Gas an Oil Industry. Here is achance to develop your insight in
    petroleum and learn the rudiments of it. It aims to gauge your
    analyzing and presentation skills of the fullestPETRO CASE STUDY Case
    Study presents an opportunity to investigate into a current buzz in
    the Gas an Oil Industry. Here is achance to develop your insight in
    petroleum and learn the rudiments of it. It aims to gauge your
    analyzing and presentation skills of the fullest.</p>
        <p>It is a two phase event 1st phase will be conducted online , Here in
  online mode the problem statement will be submitted Then 2nd phase
  will be conducted offline in the campus during fest, this involves
  Debate /presentation/question answer rounds.</p>
  <div><h1>Prizes</h1>
  <table className="styled_table">
    <thead>
      <tr>
        <th>Rank</th>
        <th>Ammounts(in rupees)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1st</td>
        <td>12000</td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>2nd</td>
        <td>8000</td>
      </tr>
      </tbody>
      <tbody>
      <tr>
        <td>3rd</td>
        <td>5000</td>
      </tr>
    </tbody>
  </table>
  </div>

      </div>
    </div>
  );
};

export default Petro_CS;
