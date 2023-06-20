
// import { useState } from "react";
// import React  from "react";
// const Table = (props) => {
//     return (
//             <div className="title">
//                 <h2>{props.name}</h2>
//                 <div className="table-container">
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th>Article</th>
//                                 <th>Désignation</th>
//                                 <th>Unité</th>
//                                 <th>PU HTVA</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>
//                                     <input type="text" className="article-input" />
//                                 </td>
//                                 <td>
//                                     <input type="text" className="designation-input" />
//                                 </td>
//                                 <td>
//                                     <input type="text" className="unite-input" />
//                                 </td>
//                                 <td>
//                                     <input type="text" className="pu-input" />
//                                 </td>
//                             </tr>
//                         </tbody>
//                     </table>
//                     <button id="add-row-btn">Add Row</button>
//                 </div>
//             </div>
//     );
// };

import PropTypes from "prop-types";
import aa from '../styles/NouveauMarché.module.css'
// export default Table;
const Table = (props) => {
    return (
        <div className="title">
            <h2 className={aa.titreNM}>{props.name}</h2>
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
                <button className={aa['add-row-btn']}>Add Row</button>
            </div>
        </div>
    );
};
Table.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Table;
