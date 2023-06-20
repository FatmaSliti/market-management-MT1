import styleAcc from "../styles/ChoosePage.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import imgs from "../assets/images.jpeg";
import carousel from "../assets/imageconsul.jpg";
import imgArticle from "../assets/imgarticle.jpg";
// import SignIn from "./SignIn";
function App() {
  return (
    <>
      <Header />
      <div className="signu" style={{ textAlign: 'center', width: '100%' }}>
        <button className={styleAcc.sign}><Link to="/SignIn">Sign In</Link></button>
        <button className={styleAcc.sign}><Link to="/SignUp">Sign Up</Link></button>
      </div>
      <div className={styleAcc.features} id="features">
        <div className={styleAcc.container}>
          <div className={styleAcc.box}>
            <div className={styleAcc.image}>
              <img src={imgs} alt="" />
            </div>
            <h1>Créer un nouveau marché</h1>
            <p>
              Dans cette section vous allez trouvez les champs necessaires pour
              créer un nouveau marché
            </p>
            <Link to="/NouveauMarché">Explore</Link>
          </div>

          <div className={styleAcc.box}>
            <div className={styleAcc.image}>
              <img src={carousel} alt="" />
            </div>
            <h1>consultation du marché</h1>
            <p>
              Ici vous allez avoir le droit de créer un attachement avec l ordre
              de service et extraire le PV de reception
            </p>
            <Link to="/Attachement">Explore</Link>
          </div>

          <div className={styleAcc.box}>
            <div className={styleAcc.image}>
              <img src={imgArticle} alt="" />
            </div>
            <h1>articles de magazin</h1>
            <p>
              Dans cette section vous avez l endroit pour ajouter le matériel
              disponible au sein de l entreprise
            </p>
            <Link to="/Articles">Explore</Link>
          </div>
        </div>
      </div>

      <div className={styleAcc.spikes}></div>

      <Footer />
    </>
  );
}

export default App;
