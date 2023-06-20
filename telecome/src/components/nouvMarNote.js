// const addRowBtns = document.querySelectorAll("#add-row-btn");
// const tableBodies = document.querySelectorAll("table tbody");

// addRowBtns.forEach((addRowBtn, index) => {
//     const tableBody = tableBodies[index];

//     addRowBtn.addEventListener("click", function () {
//         const newRow = `
//         <tr>
//                 <td><input type="text"></td>
//                 <td><input type="text"></td>
//                 <td><input type="text"></td>
//                 <td><input type="text"></td>
//                 <td><button class="delete-btn">╳</button></td>
//         </tr>
//     `;

//         tableBody.insertAdjacentHTML("beforeend", newRow);

//         // Add event listener for new delete button
//         const deleteBtns = tableBody.querySelectorAll('.delete-btn');
//         deleteBtns.forEach((deleteBtn) => {
//             deleteBtn.addEventListener('click', function () {
//                 const row = this.closest('tr');
//                 if (row.textContent.trim() === "") {
//                     row.remove();
//                 } else {
//                     if (window.confirm('Are you sure you want to delete this row?')) {
//                         row.remove();
//                     }
//                 }
//             });
//         });
//     });
// });