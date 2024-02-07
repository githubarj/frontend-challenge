import propTypes from "prop-types";

function Header({currentPlan, MAUs}) {
  return (
    <div className="header-container">
      <p className="normal-text">Your current plan:</p>
      <h2 className="medium-text">{currentPlan} &#8226; {MAUs} </h2>
    </div>
  );
}

Header.propTypes = {
  currentPlan: propTypes.string,
  MAUs: propTypes.string,
};

export default Header;
