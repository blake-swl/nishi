import React from 'react';
import transPoke from '../../../dist/assets/pokeTransLarge.png';

import './pokeMenu.scss';


const PokeMenu = () => (
  <div id="pokeMenu">
    <div className="leftHeader">
      <img src={transPoke} className="pokeImage1"/>
      <h3 className="pokeTitle">Signature &</h3>
      <h3 className="pokeTitle">BYO Bowls</h3>
    </div>
    <div className="leftItems">
      <div className="left_left">
        <div id="pokeItems">
          <div className="itemNprice">
            <h3 className="item">Aloha Bowl</h3>
            {/* <h3 className="price">Reg | $10.95</h3> */}
          </div>
          <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Crabmeat, Spicy Mayo, Eel Sauce</p>
        </div>
        <div id="pokeItems">
          <div className="itemNprice">
              <h3 className="item">Hoku Bowl</h3>
              {/* <h3 className="price">Reg | $10.95</h3> */}
            </div>
            <p>Ahi Tuna, Albacore, Spicy Tuna, Crabmeat, Ponzu, Sesame Oil</p>
          </div>
        <div id="pokeItems">
          <div className="itemNprice">
            <h3 className="item">Koa Bowl 🌶</h3>
            {/* <h3 className="price">Lg | $12.95</h3> */}
          </div>
          <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Albacore, Crabmeat, Sesame Oil, Danger Sauce, Spicy Ponzu</p>
        </div>
        <div id="pokeItems">
          <div className="itemNprice">
            <h3 className="item">Moana Bowl</h3>
            {/* <h3 className="price">Lg | $12.95</h3> */}
          </div>
          <p>Shrimp, Octopus, Scallops, Tuna, Crabmeat, Pineapple, Spicy Mayo, Eel Sauce, Sesame Oil</p>
        </div>
        <div id="pokeItems">
          <div className="itemNprice">
            <h3 className="item">Ono Bowl</h3>
            {/* <h3 className="price">Prm | $14.95</h3> */}
          </div>
          <p>Hawaiian Salmon, Hawaiian Tuna, Spicy Tuna, Shrimp, Crabmeat, Avocado, Spicy Mayo, Eel Sauce, Sesame Oil</p>
        </div>
      </div>
    </div>
  </div>
);

export default PokeMenu;