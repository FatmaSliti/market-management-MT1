// import React from 'react';
import stylesOS from '../styles/OrdreDeService.module.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function OrderService() {
        const handlePrint = () => {
            window.print();
        };
        return (
            <div>
                <Header />
                <h2 className={stylesOS.title}>Ordre de service</h2>
                <p className={stylesOS.pHeader}>N°24</p>
                <div className={stylesOS.tableContainer}>
                    <table className={stylesOS.table}>
                        <thead>
                            <tr>
                                <th>Expéditeur</th>
                                <th>Destinataire</th>
                                <th>Marché</th>
                                <th>Ref.Marché</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" /></td>
                                <td><input type="text" /></td>
                                <td><input type="text" /></td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={stylesOS.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th>opération</th>
                                <td><input type="text" /></td>
                            </tr>
                            <tr>
                                <th>cout estimatif</th>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={stylesOS.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nature des travaux</th>
                                <th>Génie Civil</th>
                                <td><input type="text" /></td>
                                <th>R.U</th>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={stylesOS.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Zone D action</th>
                            </tr>
                            <tr>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={stylesOS.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date de début des travaux</th>
                                <td><input type="text" /></td>
                                <th>Délai d exécution</th>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={stylesOS.tableContainer}>
                    <table className={stylesOS.lastTable}>
                        <thead>
                            <tr>
                                <th>Message</th>
                                <th>Accusé zone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="text" /></td>
                                <td>
                                    <table>
                                        <tr>
                                            <td>Date de debut des travaux</td>
                                            <td><input type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td>Date de fin des travaux</td>
                                            <td><input type="text" /></td>
                                        </tr>
                                        <tr>
                                            <td>Accusé de reception AFIMTEK PLUS</td>
                                            <td><input type="text" /></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={stylesOS.buttons}>
                    <Link to="/PVReception">
                        <button className={stylesOS.imprimer}>Valider</button>
                    </Link>
                    <button className={`${stylesOS.imprimer} ${stylesOS.impr}`} onClick={handlePrint}>Imprimer</button>
                </div>
                <Footer />
            </div>
        );
    }
    export default OrderService;
