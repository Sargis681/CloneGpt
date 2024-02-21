import React from 'react'
import home from "../../assets/home.svg";
import saved from "../../assets/bookmark.svg";
import rocket from "../../assets/rocket.svg";

function LowerSide() {
  return (
    <div className="lowerSide">
    <div className="listItems"><img src={home} alt="Home" className="listTitlesImg" />Home</div>
    <div className="listItems"><img src={saved} alt="Saved" className="listTitlesImg" />Saved</div>
    <div className="listItems"><img src={rocket} alt="Upgrade" className="listTitlesImg" />Upgrade to Pro</div>
  </div>
  )
}

export default LowerSide