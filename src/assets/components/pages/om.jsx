import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";

import { useNavigate } from "react-router-dom";

export default function Om() {
    return (
        <>
            <Navbar />
            <div className="p-6 pt-20   text-center max-w-200 mx-auto">
                <h1 className="text-2xl font-bold">Information om webbplatsen</h1>
                <p className="mt-2">
                    Bilderna som används på webbplatsen är hämtade från Wikimedia Commons och publicerade under licensen Creative Commons Erkännande-Dela Lika 3.0 (CC BY-SA 3.0). Upphovsperson anges enligt respektive bilds licensvillkor.
                </p>

                <div class="p-6 pb-20 overflow-x-auto ">
                    <h2 class="text-xl font-bold mb-4">Länsvapen – licenser & attribut</h2>
                    <table class="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>Län</th>
                                <th>Filnamn</th>
                                <th>Författare</th>
                                <th>Licens</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Stockholms län</td>
                                <td>Stockholm länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Uppsala län</td>
                                <td>Uppsala länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Södermanlands län</td>
                                <td>Södermanland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Östergötlands län</td>
                                <td>Östergötland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Jönköpings län</td>
                                <td>Jönköping länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Kronobergs län</td>
                                <td>Kronobergs läns vapen.svg</td>
                                <td>Leonid 2</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Kalmar län</td>
                                <td>Kalmar länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Gotlands län</td>
                                <td>Gotland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Blekinge län</td>
                                <td>Blekinge länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Skåne län</td>
                                <td>Skåne länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Hallands län</td>
                                <td>Halland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Västra Götalands län</td>
                                <td>Västra Götalands länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Värmlands län</td>
                                <td>Värmland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Örebro län</td>
                                <td>Örebro länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Västmanlands län</td>
                                <td>Västmanland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Dalarnas län</td>
                                <td>Dalarna länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Gävleborgs län</td>
                                <td>Gävleborg länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Västernorrlands län</td>
                                <td>Västernorrland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Jämtlands län</td>
                                <td>Jämtland länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Västerbottens län</td>
                                <td>Västerbotten länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                            <tr>
                                <td>Norrbottens län</td>
                                <td>Norrbotten länsvapen – Riksarkivet Sverige.png</td>
                                <td>Vladimir Sagerlund / Riksarkivet Sverige</td>
                                <td>CC BY‑SA 3.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    );
}