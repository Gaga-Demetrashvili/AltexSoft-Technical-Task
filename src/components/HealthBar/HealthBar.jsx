import "./HealthBar.scss";

const HealthBar = ({ initial, health, name, isRTL, damage }) => {

  return (
    <div className="bar-wrapper" style={{ direction: isRTL ? "rtl" : "ltr" }}>
      <p className="name">{name}</p>
      <p className="damage">{damage}</p>
      <div
        className="bar"
        style={{ width: `${(health * 100) / initial}%` }}
      ></div>
    </div>
  );
};

export default HealthBar;
