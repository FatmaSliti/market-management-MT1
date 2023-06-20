import stylesHeader from "../styles/Header.module.css";
import logo from "../assets/logotélécom.png";

function Header() {
  return (
    <div
      className={stylesHeader["company-info"]}
    >
      <div className={stylesHeader["company-info-left"]}>
        <span className={stylesHeader["company-name"]}>
          Société Nationale des Télécoms
        </span>
        <br />
        <span className={stylesHeader["company-info-line"]}>
          Direction Régionale des Télécoms de l Ariana
        </span>
        <br />
        <span className={stylesHeader["company-info-line"]}>ULS El Menzah</span>
        <br />
      </div>
      <div className={stylesHeader["company-info-right"]}>
        <img src={logo} alt="Company Logo" className={stylesHeader.logo} />
        <div>
          <span className={stylesHeader["company-name-arabic"]}>
            الشركة الوطنية للاتصالات
          </span>
          <br />
          <span className={stylesHeader["company-info-line-arabic"]}>
            الإدارة الجهوية للاتصالات بأريانة
          </span>
          <br />
          <span className={stylesHeader["company-info-line-arabic"]}>
            {" "}
            المنزه ULS
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Header;
