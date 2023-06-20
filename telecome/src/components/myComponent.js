import { useEffect } from 'react';

const YourComponent = () => {
    useEffect(() => {
        // ********** set date *****************(footer)
        const date = document.getElementById("date");
        date.innerHTML = new Date().getFullYear();

        // ************ close links ************
        const navToggle = document.querySelector(".nav-toggle");
        const linksContainer = document.querySelector(".links-container");
        const links = document.querySelector(".links");

        navToggle.addEventListener('click', function () {
            const containerHeight = linksContainer.getBoundingClientRect().height;
            const linksHeight = links.getBoundingClientRect().height;

            if (containerHeight === 0) {
                linksContainer.style.height = `${linksHeight}px`;
            } else {
                linksContainer.style.height = 0;
            }
        });

        const navbar = document.getElementById('nav');
        const topLink = document.querySelector('.top-link');

        // ************* fixed navbar **********
        window.addEventListener('scroll', function () {
            const scrollHeight = window.pageYOffset;
            const navHeight = navbar.getBoundingClientRect().height;

            if (scrollHeight > navHeight) {
                navbar.classList.add("fixed-nav");
            } else {
                navbar.classList.remove("fixed-nav");
            }

            if (scrollHeight > 500) {
                topLink.classList.add("show-link");
            } else {
                topLink.classList.remove("show-link");
            }
        });

        // ************* smooth scroll *********
        // select links
        const scrollLinks = document.querySelectorAll(".scroll-link");

        scrollLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const id = e.currentTarget.getAttribute("href").slice(1);
                const element = document.getElementById(id);
                const navHeight = navbar.getBoundingClientRect().height;
                const fixedNav = navbar.classList.contains("fixed-nav");
                let position = element.offsetTop - navHeight;

                if (!fixedNav) {
                    position = position - navHeight;
                }

                window.scrollTo({
                    left: 0,
                    top: position,
                    behavior: "smooth"
                });

                linksContainer.style.height = 0;
            });
        });

        // concernant le nouveau look du formulaire
        const btns = document.querySelectorAll(".tab-btn");
        const about = document.querySelector(".about");
        const articles = document.querySelectorAll(".content");

        about.addEventListener("click", function (e) {
            const id = e.target.dataset.id;
            if (id) {
                btns.forEach(function (btn) {
                    btn.classList.remove("active");
                });
                e.target.classList.add("active");

                articles.forEach(function (article) {
                    article.classList.remove('active');
                });

                const element = document.getElementById(id);
                element.classList.add("active");
            }
        });

        // concernant les tables des traveaux 
        const addRowBtns = document.querySelectorAll("#add-row-btn");
        const tableBodies = document.querySelectorAll("table tbody");

        function handleDeleteButtonClick(event) {
            const deleteBtn = event.target;
            const row = deleteBtn.closest('tr');

            if (row.textContent.trim() === "") {
                row.remove();
            } else {
                if (window.confirm('Are you sure you want to delete this row?')) {
                    row.remove();
                }
            }
        }

        tableBodies.forEach((tableBody) => {
            tableBody.addEventListener('click', function (event) {
                if (event.target.classList.contains('delete-btn')) {
                    handleDeleteButtonClick(event);
                }
            });
        });

        addRowBtns.forEach((addRowBtn, index) => {
            const tableBody = tableBodies[index];

            addRowBtn.addEventListener("click", function () {
                const newRow = `
            <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><button class="delete-btn">╳</button></td>
            </tr>
        `;

                tableBody.insertAdjacentHTML("beforeend", newRow);
            });
        });
    }, []);

    return (
        <div>
                <div className="title">
                <h2>Hello</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Article</th>
                                <th>Désignation</th>
                                <th>Unité</th>
                                <th>PU HTVA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" className="article-input" />
                                </td>
                                <td>
                                    <input type="text" className="designation-input" />
                                </td>
                                <td>
                                    <input type="text" className="unite-input" />
                                </td>
                                <td>
                                    <input type="text" className="pu-input" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button id="add-row-btn">Add Row</button>
                </div>
            </div>
        </div>
    );
};

export default YourComponent;

