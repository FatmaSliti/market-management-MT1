
import stylesRec from '../styles/PVReception.module.css';
import Header from './Header';
import Footer from './Footer';

function PvReceptionProvisoire() {
    const handlePrint = () => {
        window.print();
    };
    return (
        <>
            <Header />

            <h2 className={stylesRec.title}>pv reception provisoire</h2>

            <div className={stylesRec.pHeader}>
                <p>Date: 18/01/2023</p>
                <p>N°24/AFIMTEK PLUS/2022</p>
            </div>

            <div className={stylesRec.tableContainer}>
                <table>
                    <tbody>
                        <tr>
                            <th>Nature du Marché</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>Intitulé de l opération</th>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={stylesRec.tableContainer}>
                <table>
                    <tbody>
                        <tr>
                            <th>Entreprise</th>
                            <th>Numéro du Marché</th>
                            {/* <th rowspan="2">Nature de la Réception</th> */}
                            <th >Nature de la Réception</th>
                            <th>GC</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <th>RU</th>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={stylesRec.tableContainer}>
                <table>
                    <tbody>
                        <tr>
                            {/* <th rowspan="2" style={{ width: '70%' }}>Documentation</th> */}
                            <th style={{ width: '70%' }}>Documentation</th>
                            <th>Oui</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>Non</th>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={stylesRec.tableContainer}>
                <table>
                    <tbody>
                        <tr>
                            <th style={{ width: '70%' }}>Réception prononcée</th>
                            <th>Oui</th>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={stylesRec.conclusion}>
                <h3>Conclusion :</h3>
                <h3>la réception provisoire est prononcée</h3>
            </div>

            <div className={stylesRec.tableContainer}>
                <table className={stylesRec.table}>
                    <thead>
                        <tr>
                            <th>le surveillant des travaux</th>
                            <th>le chef de cellule</th>
                            <th>le chef ULS</th>
                            <th>le chef CSC</th>
                            <th>l entreprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={stylesRec.buttons}>
                <button className={stylesRec.imprimer}>Enregistrer</button>
                <button className={`${stylesRec.imprimer} ${stylesRec.impr}`} onClick={handlePrint}>Imprimer</button>
            </div>
            <Footer />
        </>
    );
}
export default PvReceptionProvisoire;
