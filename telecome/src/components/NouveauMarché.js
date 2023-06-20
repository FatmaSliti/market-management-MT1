import stylesNM from "../styles/NouveauMarché.module.css";
import Footer from "./Footer.js";
import BackToTopButton from "./BackToTopButton.js";
// import './appNM.js'
import Table from "./TableTravaux";
import landing from "../assets/landing-image.png";
import logo from "../assets/logotélécom.png";
import form3 from "../assets/formsimg3.png";
const App = () => {
  return (
    <div className={stylesNM["nouveau__marché"]}>
      {/* font awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
      />
      {/* styles */}
      <link rel="stylesheet" href="../styles/all.min.css" />
      <link rel="stylesheet" href="../styles/normalize.css" />

      {/* header */}
      <header id="home">
        {/* navbar */}
        <nav id="nav">
          <div className={stylesNM["nav-center"]}>
            {/* nav header */}
            <div className={stylesNM["nav-header"]}>
              <img src={logo} alt="logo" className={stylesNM.logo} />
              <button className={stylesNM["nav-toggle"]}>
                <i className="fas fa-bars"></i>
              </button>
            </div>
            {/* links */}
            <div className={stylesNM["links-container"]}>
              <ul className={stylesNM.links}>
                <li>
                  <a href="#home" className={stylesNM["scroll-link"]}>
                    home
                  </a>
                </li>
                <li>
                  <a href="#about" className={stylesNM["scroll-link"]}>
                    information_marché
                  </a>
                </li>
                <li>
                  <a href="#services" className={stylesNM["scroll-link"]}>
                    travaux
                  </a>
                </li>
                <li>
                  <a href="#matériel" className={stylesNM["scroll-link"]}>
                    Matériel
                  </a>
                </li>
                {/* <li>
                <a href="#tours" className={stylesNM['scroll-link']}>
                    tours
                </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <div className={stylesNM.landing}>
          <div className={stylesNM.container}>
            <div className={stylesNM.text}>
              <h2 className="titreNM">Bienvenue, au nouveau marché</h2>
              <p>
                Ici vous allez trouvez tous ce qui est en relation avec le
                nouveau marché tel que les informations, les travaux et le
                matériel
              </p>
            </div>
            <div className={stylesNM.image}>
              <img src={landing} alt="" />
            </div>
          </div>
          <a href="#articles">
            {" "}
            <i className="fa-solid fa-angles-down"></i>
          </a>
        </div>
      </header>

      <section className={stylesNM.section} id="about">
        <div className={stylesNM.titleinfo}>
          <h2 >Information du marché</h2>
          <p>
            les informations concerant le marché , l entreprise et le
            responsable
          </p>
        </div>
        <div className={stylesNM["about-center"]} >
          <article className={stylesNM["about-img"]}>
            <img src={form3} alt="aboutpicture" className={stylesNM["nouveau__marché-img"]} />
          </article>
          <article className={stylesNM.about}>
            {/* btn container */}
            <div className={stylesNM["btn-container"]}>
              <button
                className={`${stylesNM["tab-btn"]} ${stylesNM.active}`}
                data-id="history"
              >
                marché
              </button>
              <button className={stylesNM["tab-btn"]} data-id="goals">
                responsable
              </button>
            </div>
            <article className={stylesNM["about-content"]}>
              {/* single item */}
              <div
                className={`${stylesNM.content} ${stylesNM.active}`}
                id="history"
              >
                {/* history */}
                <div>
                  <div className={stylesNM["form-group"]}>
                    <label htmlFor="référence">Référence du marché :</label>
                    <input
                      type="text"
                      id="référence"
                      name="référence"
                      placeholder="Entrez votre nom"
                      className={stylesNM["input-field"]}
                    />
                  </div>

                  <div className={stylesNM["form-group"]}>
                    <label htmlFor="nomEntreprise">Non de l entreprise :</label>
                    <input
                      type="text"
                      id="nomEntreprise"
                      name="nomEntreprise"
                      placeholder="Entrez votre name"
                      className={stylesNM["input-field"]}
                    />
                  </div>

                  <div className={stylesNM["form-group"]}>
                    <label htmlFor="address">Adresse :</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Entrez votre adresse"
                      className={stylesNM["input-field"]}
                    />
                  </div>
                </div>
              </div>
              {/* end of single item */}
              {/* single item */}
              <div className={stylesNM.content} id="goals">
                {/* goals */}
                <div>
                  <div className={stylesNM["form-group"]}>
                    <label htmlFor="responsable">Nom:</label>
                    <input
                      type="text"
                      id="responsable"
                      name="responsable"
                      placeholder="Entrez le nom du responsable"
                    />
                  </div>

                  <div className={stylesNM["form-group"]}>
                    <label htmlFor="contact">Num contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Entrez le numéro du responsable"
                    />
                  </div>

                  <div className={stylesNM["form-group"]}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Entrez votre email"
                    />
                  </div>
                </div>
              </div>
              {/* end of single item */}
            </article>
          </article>
        </div>
      </section>

      {/* tours */}
      <section id="services" className={stylesNM.section}>
        <Table name="Travaux génie civil" />
      </section>

      <section id="services" className={stylesNM.section}>
        <Table name="Travaux réseaux urbain" />
      </section>

      <section id="services" className={stylesNM.section}>
        <Table name="Poteaux & Obturateurs" />
      </section>

      <section id="matériel" className={stylesNM.section}>
        <div className={stylesNM.title}>
          <h2 className="titreNM">matériel fournit par l entreprise</h2>
          <div className={stylesNM["table-container"]}>
            <table className={stylesNM.table}>
              <thead>
                <tr>
                  <th>Nature</th>
                  <th>Désignation</th>
                  <th>Unité</th>
                  <th>PU HTVA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" className={stylesNM["article-input"]} />
                  </td>
                  <td>
                    <input
                      type="text"
                      className={stylesNM["designation-input"]}
                    />
                  </td>
                  <td>
                    <input type="text" className={stylesNM["unite-input"]} />
                  </td>
                  <td>
                    <input type="text" className={stylesNM["pu-input"]} />
                  </td>
                </tr>
              </tbody>
            </table>

            <button className={stylesNM['add-row-btn']}>Add Row</button>
          </div>
        </div>
      </section>
      <button className={stylesNM.valider}>Valider</button>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
