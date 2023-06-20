// import React, { useState } from 'react';
// import "../styles/Articles.css"

// function Articles(props) {
//     const [tableData, setTableData] = useState(props.data); // State to hold the table data

//     // Handler function to update the table data
//     function handleDataChange(index, field, value) {
//         const newData = [...tableData]; // Make a copy of the current data
//         newData[index][field] = value; // Update the specified field with the new value
//         setTableData(newData); // Update the state with the new data
//     }

//     return (
//         <>
//             <div className="title-container">
//                 <h1 className="title-text">Articles de magazin</h1>
//             </div>
//             <table className="my-table">
//                 <thead>
//                     <tr>
//                         <th>Nature</th>
//                         <th>Nom</th>
//                         <th>Unité</th>
//                         <th>P.U</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((row, index) => (
//                         <tr key={index}>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nature}
//                                     onChange={(e) => handleDataChange(index, 'nature', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nom}
//                                     onChange={(e) => handleDataChange(index, 'nom', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.unite}
//                                     onChange={(e) => handleDataChange(index, 'unite', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.pu}
//                                     onChange={(e) => handleDataChange(index, 'pu', e.target.value)}
//                                 />
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     );

// }

// export default Articles;

// import React, { useState } from 'react';
// import "../styles/Articles.css"
// import Header from './Header';
// import Footer from './Footer';

// function Articles(props) {
//     const [tableData, setTableData] = useState(props.data || []); // State to hold the table data

//     // Handler function to update the table data
//     function handleDataChange(index, field, value) {
//         const newData = [...tableData]; // Make a copy of the current data
//         newData[index][field] = value; // Update the specified field with the new value
//         setTableData(newData); // Update the state with the new data
//     }

//     return (
//         <>
//         <Header />
//             <div className="title-container">
//                 <h1 className="title-text">Articles de magazin</h1>
//             </div>
//             <table className="my-table">
//                 <thead>
//                     <tr>
//                         <th>Nature</th>
//                         <th>Nom</th>
//                         <th>Unité</th>
//                         <th>P.U</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData && tableData.map((row, index) => (
//                         <tr key={index}>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nature}
//                                     onChange={(e) => handleDataChange(index, 'nature', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nom}
//                                     onChange={(e) => handleDataChange(index, 'nom', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.unite}
//                                     onChange={(e) => handleDataChange(index, 'unite', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.pu}
//                                     onChange={(e) => handleDataChange(index, 'pu', e.target.value)}
//                                 />
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <Footer />
//         </>
//     );

// }

// export default Articles;

// import React, { useState } from 'react';
// import "../styles/Articles.css"

// function Articles(props) {
//     const [tableData, setTableData] = useState([{ nature: '', nom: '', unite: '', pu: '' }]); // State to hold the table data

//     // Handler function to update the table data
//     function handleDataChange(index, field, value) {
//         const newData = [...tableData]; // Make a copy of the current data
//         newData[index][field] = value; // Update the specified field with the new value
//         setTableData(newData); // Update the state with the new data
//     }

//     // Handler function to add a new row
//     function addRow() {
//         setTableData([...tableData, { nature: '', nom: '', unite: '', pu: '' }]);
//     }

//     return (
//         <>
//             <div className="title-container">
//                 <h1 className="title-text">Articles de magazin</h1>
//             </div>
//             <table className="my-table">
//                 <thead>
//                     <tr>
//                         <th>Nature</th>
//                         <th>Nom</th>
//                         <th>Unité</th>
//                         <th>P.U</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData && tableData.map((row, index) => (
//                         <tr key={index}>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nature}
//                                     onChange={(e) => handleDataChange(index, 'nature', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nom}
//                                     onChange={(e) => handleDataChange(index, 'nom', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.unite}
//                                     onChange={(e) => handleDataChange(index, 'unite', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.pu}
//                                     onChange={(e) => handleDataChange(index, 'pu', e.target.value)}
//                                 />
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={addRow}>Add Row</button>
//         </>
//     );
// }

// export default Articles;

// import React, { useState } from 'react';
// import "../styles/Articles.css"

// function Articles(props) {
//     const [tableData, setTableData] = useState([{ nature: '', nom: '', unite: '', pu: '' }]);

//     // Handler function to update the table data
//     function handleDataChange(index, field, value) {
//         const newData = [...tableData]; // Make a copy of the current data
//         newData[index][field] = value; 
//         setTableData(newData); // Update the state with the new data
//     }

//     // Handler function to add a new row
//     function addRow() {
//         setTableData([...tableData, { nature: '', nom: '', unite: '', pu: '' }]);
//     }

//     // Handler function to delete a row
//     function handleDeleteRow(index) {
//         if (window.confirm('Are you sure you want to delete this row?')) {
//             const newData = [...tableData]; // Make a copy of the current data
//             newData.splice(index, 1); // Remove the row at the specified index
//             setTableData(newData); // Update the state with the new data
//         }
//     }

//     return (
//         <>
//             <div className="title-container">
//                 <h1 className="title-text">Articles de magazin</h1>
//             </div>
//             <table className="my-table">
//                 <thead>
//                     <tr>
//                         <th>Nature</th>
//                         <th>Nom</th>
//                         <th>Unité</th>
//                         <th>P.U</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tableData.map((row, index) => (
//                         <tr key={index}>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nature}
//                                     onChange={(e) => handleDataChange(index, 'nature', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.nom}
//                                     onChange={(e) => handleDataChange(index, 'nom', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.unite}
//                                     onChange={(e) => handleDataChange(index, 'unite', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <input
//                                     type="text"
//                                     value={row.pu}
//                                     onChange={(e) => handleDataChange(index, 'pu', e.target.value)}
//                                 />
//                             </td>
//                             <td>
//                                 <button onClick={() => handleDeleteRow(index)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button onClick={addRow}>Add Row</button>
//         </>
//     );
// }

// export default Articles;