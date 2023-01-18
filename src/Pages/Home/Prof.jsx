import React from "react";
import "./Home.scss";
import rakesh_sir from "../../Assets/rakesh_sir.jpg";
const Prof = () => (
  <div
    className="Prof section__padding"
    id="Prof"
    style={{ height: "fit-content" }}
  >
    <iframe
      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fgreatstep%2Fvideos%2F914564435357394%2F&show_text=false&width=560&t=0"
      width="100%"
      height="100%"
      style={{ border: "none", overflow: "hidden" }}
      // scrolling="no"
      // frameborder="0"
      allowfullscreen="true"
      // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
    />
  </div>
);

export default Prof;
