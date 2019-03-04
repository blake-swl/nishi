import React from 'react';

const transpoke = 'https://s3.amazonaws.com/nishi-blakeswl/ramenTrans.png';

import './ramenMenu.scss';

const menuPDF = 'https://s3.amazonaws.com/nishi-blakeswl/menu.pdf';


const RamenMenu = () => (
  <div id="ramenCon">
    <h3 className="menu-category">Ramen</h3>
    <div id="ramenMenu">
      <div className="ramenRight">
        <div className="left_left">
          <div id="ramenItems">
            <div className="itemNprice">
              <h3 className="item tonkatsu">Tonkatsu</h3>
            </div>
            <p>Pork broth, pork chashu, green onion, spinach, bean sprouts, seaweed.</p>
          </div>
          <div id="ramenItems">
            <div className="itemNprice">
                <h3 className="item">Spicy Miso 🌶</h3>
              </div>
              <p>Miso broth, pork chashu, green onion, spinach, bean sprouts, cabbage, bamboo shoots, seaweed.</p>
            </div>
          <div id="ramenItems">
            <div className="itemNprice">
              <h3 className="item">Chicken Shoyu</h3>
            </div>
            <p>Chicken Broth, Chicken, White Onions, Bamboo Shoots, Seaweed, Alfalfa Sprouts.</p>
          </div>
          <div id="ramenItems">
            <div className="itemNprice">
              <h3 className="item">Vegetarian</h3>
            </div>
            <p>Sesame miso broth, broccoli, tofu, corn, bean sprouts, spring mix, sesame oil.</p>
          </div>
        </div>
      </div>
      <div className="ramenLeft">
        <img src={transpoke} className="ramenImage1" alt="ramen"  data-aos-offset="500" data-aos-duration="200" data-aos-easing="linear"/>
        <h3 className="ramenTitle">Tonkatsu</h3>
      </div>
    </div>
      {/* <div className="menu-download"><a href={menuPDF} target="_blank">↠ View our full menu HERE ↞</a></div> */}

    <div className="menu-download"><h3>↠ View our full</h3>{'  '}<a href={menuPDF} target="_blank" rel="alternate">MENU HERE</a><h3>↞</h3></div>
  </div>
);

export default RamenMenu;