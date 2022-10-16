import React from "react";
import "./About.scss";
import CTH_data from "./CTH_data";
import GSec from "./Gsec";
import {AiFillFacebook} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
const About = () => {
  return (
    <section className="about">
      <div className="about_container">
        <section className="info_cards">
          <article>
            <h2>Head Of Department</h2>
            <h3>Prof. Sameer Kumar Pal</h3>
           
            <img src="https://source.unsplash.com/s3mR42Spras" alt="CTH"/>
            <div className="links"> 
            <AiFillFacebook className="icons1"/>
            <BsInstagram className="icons2"/>
            <BsTwitter className="icons3"/>
            </div>
          </article>
          <article>
            <h2>President</h2>
            <h3>Prof. Rakesh Kumar</h3>
            <img src="https://source.unsplash.com/s3mR42Spras" alt="CTH" />
            <div className="links">
            <AiFillFacebook className="icons1"/>
            <BsInstagram className="icons2"/>
            <BsTwitter className="icons3"/>
            </div>
          </article>
        </section>
      </div>
      <div className="about_container">
        <section className="info_cards">
          <article>
            <h2>Vice President</h2>
            <h3>Sachin Jaiswal</h3>
            <img src="https://source.unsplash.com/s3mR42Spras" alt="CTH" />
            <div className="links">
            <AiFillFacebook className="icons1"/>
            <BsInstagram className="icons2"/>
            <BsTwitter className="icons3"/>
            </div>
          </article>
          <article>
            <h2>Treasurer</h2>
            <h3>Amit Kumar</h3>
            <img src="https://source.unsplash.com/s3mR42Spras" alt="CTH" />
            <div className="links">
            <AiFillFacebook className="icons1"/>
            <BsInstagram className="icons2"/>
            <BsTwitter className="icons3"/>
            </div>
          </article>
        </section>
      </div>
      <div className="about_container">
        <h2 className="Gsec_h2">General Secretaries</h2>
        <section className="info_cards">
          {GSec.map((each, index) => {
            const { name, img } = each;
            return (
              <article key={index}>
                <h3>{name}</h3>
                <img
                  src="https://assets.website-files.com/60f85e33b5a89c61fcd8377d/61832145912efe370a5d9612_stela-v2-p-500.jpeg"
                  alt="G-Sec"
                />
                 <div className="links">
                  <AiFillFacebook className="icons1"/>
                  <BsInstagram className="icons2"/>
                   <BsTwitter className="icons3"/>
                  </div>
                {/* <img src={img} alt="G-Sec" /> */}
              </article>
            );
          })}
        </section>
      </div>
      
      <div class="divider">
        <div></div>
      </div>
      <div className="about_container">
        <h2 className="Gsec_h2">Core Team Heads</h2>
        <section>
          {CTH_data.map((heads, index) => {
            const { Head_name, data } = heads;
            return (
              <div key={index}>
                <h3 className="head_name">{Head_name}</h3>
                <section className="info_cards">
                  {data.map((indi_name, index_2) => {
                    const { name, img } = indi_name;
                    return (
                      <article key={index_2}>
                        <h4>{name}</h4>
                        <img
                          src="https://assets.website-files.com/60f85e33b5a89c61fcd8377d/6119b7615f69af0e04b36579_francois-v5-p-500.jpeg"
                          alt="CTH"
                        />
                         <div className="links">
                          <AiFillFacebook className="icons1"/>
                           <BsInstagram className="icons2"/>
                          <BsTwitter className="icons3"/>
                          </div>
                        {/* <img src={img} alt="CTH" /> */}
                      </article>
                    );
                  })}
                </section>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default About;

