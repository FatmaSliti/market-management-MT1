import { useEffect } from "react";
import stylesAtt from "../styles/Attachement.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import img from "../assets/imge.png";
const Attachement = () => {
  useEffect(() => {
    const date = document.getElementById("date");
    if (date) {
      date.innerHTML = new Date().getFullYear();
    }

    const btns = document.querySelectorAll(`.${stylesAtt.tabBtn}`);
    const about = document.querySelector(`.${stylesAtt.about}`);
    const articles = document.querySelectorAll(`.${stylesAtt.content}`);

    about.addEventListener("click", function (e) {
      const id = e.target.dataset.id;

      if (id) {
        btns.forEach(function (btn) {
          btn.classList.remove(stylesAtt.active);
        });

        e.target.classList.add(stylesAtt.active);

        articles.forEach(function (article) {
          article.classList.remove(stylesAtt.active);
        });

        const element = document.getElementById(id);
        element.classList.add(stylesAtt.active);
      }
    });

    const addRowBtns = document.querySelectorAll(`.${stylesAtt.addRowBtn}`);
    const tableBodies = document.querySelectorAll(`.${stylesAtt.tableBody}`);

    function handleDeleteButtonClick(event) {
      const deleteBtn = event.target;
      const row = deleteBtn.closest("tr");

      if (row.textContent.trim() === "") {
        row.remove();
      } else {
        if (window.confirm("Are you sure you want to delete this row?")) {
          row.remove();
        }
      }
    }

    tableBodies.forEach((tableBody) => {
      tableBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-btn")) {
          handleDeleteButtonClick(event);
        }
      });
    });

    addRowBtns.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        const tableBody = event.target
          .closest(`.${stylesAtt.table}`)
          .querySelector(`.${stylesAtt.tableBody}`);

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <button class="${stylesAtt["delete-btn"]}">Delete</button>
            </td>
        `;

        tableBody.appendChild(newRow);
      });
    });
  }, []);
  return (
    <div>
      {/* start header */}
      <Header />
      {/* end header */}

      {/* start title */}
      <div className={stylesAtt.headerTitle}>
        <p>Attachement journalier N°</p>
        <p>Journée du: 1/04/2023</p>
      </div>
      {/* end title */}

      {/* start renseignement généreaux */}
      <div className={stylesAtt.renseignement}>
        <h2 className={stylesAtt.title}>Renseignement généreaux</h2>
        {/* ****form****** */}
        <section className={stylesAtt.section} id="about">
          <div
            className={`${stylesAtt["about-center"]} ${stylesAtt["section-center"]}`}
          >
            <article className={stylesAtt["about-img"]}>
              <img src={img} alt="aboutpicture" />
            </article>
            <article className={stylesAtt.about}>
              {/* btn container */}
              <div className={stylesAtt["btn-container"]}>
                <button
                  className={`${stylesAtt["tab-btn"]} ${stylesAtt.active}`}
                  data-id="history"
                >
                  Attachement
                </button>
                <button className={stylesAtt["tab-btn"]} data-id="goals">
                  Service
                </button>
              </div>
              <article className={stylesAtt["about-content"]}>
                {/* single item */}
                <div
                  className={`${stylesAtt.content} ${stylesAtt.active}`}
                  id="history"
                >
                  {/* history */}
                  <div>
                    <div className={stylesAtt["form-group"]}>
                      <label htmlFor="référence">Nom du surveillant :</label>
                      <input
                        type="text"
                        id="référence"
                        name="référence"
                        placeholder="Entrez votre nom"
                        className={stylesAtt["input-field"]}
                      />
                    </div>

                    <div className={stylesAtt["form-group"]}>
                      <label htmlFor="nomEntreprise">Non de l entreprise :</label>
                      <input
                        type="text"
                        id="nomEntreprise"
                        name="nomEntreprise"
                        placeholder="Entrez votre name"
                        className={stylesAtt["input-field"]}
                      />
                    </div>

                    <div className={stylesAtt["form-group"]}>
                      <label htmlFor="address">Intitulé de l opération :</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Entrez votre adresse"
                        className={stylesAtt["input-field"]}
                      />
                    </div>
                  </div>
                </div>
                {/* end of single item */}
                {/* single item */}
                <div className={stylesAtt.content} id="goals">
                  {/* goals */}
                  <div>
                    <div className={stylesAtt["form-group"]}>
                      <label htmlFor="responsable">Référence du marché:</label>
                      <input
                        type="text"
                        id="responsable"
                        name="responsable"
                        placeholder="Entrez le nom du responsable"
                      />
                    </div>

                    <div className={stylesAtt["form-group"]}>
                      <label htmlFor="contact">Ordre de service N°:</label>
                      <input
                        type="text"
                        id="contact"
                        name="contact"
                        placeholder="Entrez le numéro du responsable"
                      />
                    </div>
                  </div>
                </div>
                {/* end of single item */}
              </article>
            </article>
          </div>
        </section>
      </div>
      {/* end renseignement généreaux */}

      {/* start prestation GC */}
      <div className={stylesAtt.prestation}>
        <h2 className={stylesAtt.title}>Prestations dues à l entreprise</h2>
        <div>
          <h4>Travaux & préstations exécutés</h4>
          <div className={stylesAtt["table-container"]}>
            <table className={stylesAtt.table}>
              <thead>
                <tr>
                  <th>Article</th>
                  <th>Désignation</th>
                  <th>Unité</th>
                  <th>Qantité</th>
                  <th>observations</th>
                </tr>
                <tr className={stylesAtt.specialRow}>
                  <td colSpan="5">Génie Civil</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
            <button className={stylesAtt["add-row-btn"]}>Add Row</button>
            {/* <button id="delete-row-btn">Delete Last Row</button> */}
          </div>
        </div>
      </div>
      {/* end prestation GC */}

      {/* start prestation RU */}
      <div className={stylesAtt.prestation}>
        <div className={stylesAtt["table-container"]}>
          <table className={stylesAtt.table}>
            <thead>
              <tr>
                <th>Article</th>
                <th>Désignation</th>
                <th>Unité</th>
                <th>Qantité</th>
                <th>observations</th>
              </tr>
              <tr className={stylesAtt.specialRow}>
                <td colSpan="5">Réseaux Urbain</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <button className={stylesAtt["add-row-btn"]}>Add Row</button>
          {/* <button id="delete-row-btn">Delete Last Row</button> */}
        </div>
      </div>
      {/* end prestation RU */}

      {/* start matériel fournit par l'entreprise */}
      <div>
        <h4>Matériel fournit par l entreprise</h4>
        <div className={stylesAtt["table-container"]}>
          <table className={stylesAtt.table}>
            <thead>
              <tr>
                <th>Nature</th>
                <th>Nom</th>
                <th>Unité</th>
                <th>Qantité</th>
                <th>observations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <button className={stylesAtt["add-row-btn"]}>Add Row</button>
          {/* <button id="delete-row-btn">Delete Last Row</button> */}
        </div>
      </div>
      {/* end matériel fournit par l'entreprise */}

      {/* start matériel fournit par l'administration */}
      <div>
        <h4>matériel fournit par l administration</h4>
        <div className={stylesAtt["table-container"]}>
          <table className={stylesAtt.table}>
            <thead>
              <tr>
                <th>Nature</th>
                <th>Nom</th>
                <th>Unité</th>
                <th>Qantité</th>
                <th>observations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
          <button className={stylesAtt["add-row-btn"]}>Add Row</button>
          {/* <button id="delete-row-btn">Delete Last Row</button> */}
        </div>
      </div>
      {/* end matériel fournit par l'administration */}
      {/* observations */}
      <div>
        <h3 className="obs">Observations</h3>
        <div className={stylesAtt["table-container"]}>
          <table className={stylesAtt.table}>
            <thead>
              <tr>
                <th>Le Surveillant</th>
                <th>Le chef de cellule</th>
                <th>l entrepreneur</th>
                <th>Le chef de Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
                <td>
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/OrdreService">
        <button className={stylesAtt.validation}>Valider</button>
      </Link>
      {/* end observations */}
      <Footer />
    </div>
  );
};

export default Attachement;
