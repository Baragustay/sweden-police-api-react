import Navbar from "../navbar.jsx";
import Footer from "../footer.jsx";
import { useNavigate } from "react-router-dom";

export default function CrimeSearch({ events }) {
    let counties = events.map((item) => item.location?.name);
    counties = counties.filter(Boolean);
    counties = [...new Set(counties)];

    const navigate = useNavigate();

    const countyImages = {
        "Skåne län": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Skåne_läns_vapen.svg/250px-Skåne_läns_vapen.svg.png",
        "Uppsala län": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Uppland_vapen.svg/250px-Uppland_vapen.svg.png",
        "Blekinge län": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blekinge_vapen.svg/1280px-Blekinge_vapen.svg.png",
        "Västra Götalands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Västra_Götaland_länsvapen_-_Riksarkivet_Sverige.png/250px-Västra_Götaland_länsvapen_-_Riksarkivet_Sverige.png",
        "Östergötlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Östergötland_vapen.svg/250px-Östergötland_vapen.svg.png",
        "Norrbottens län": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Norrbotten_länsvapen_-_Riksarkivet_Sverige.png/250px-Norrbotten_länsvapen_-_Riksarkivet_Sverige.png",
        "Västernorrlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Västernorrlands_läns_vapen.svg/250px-Västernorrlands_läns_vapen.svg.png",
        "Västerbottens län": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Västerbotten_länsvapen_-_Riksarkivet_Sverige.png/250px-Västerbotten_länsvapen_-_Riksarkivet_Sverige.png",
        "Jämtlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jämtland_län_vapen.svg/250px-Jämtland_län_vapen.svg.png",
        "Stockholms län": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Stockholms_läns_vapen.svg/250px-Stockholms_läns_vapen.svg.png",
        "Jönköpings län": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Jönköping_län_vapen.svg/250px-Jönköping_län_vapen.svg.png",
        "Södermanlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Södermanland_vapen.svg/250px-Södermanland_vapen.svg.png",
        "Örebro län": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Örebro_länsvapen_-_Riksarkivet_Sverige.png/250px-Örebro_länsvapen_-_Riksarkivet_Sverige.png",
        "Dalarnas län": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Dalarna_vapen.svg/250px-Dalarna_vapen.svg.png",
        "Värmlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Värmland_vapen.svg/250px-Värmland_vapen.svg.png",
        "Hallands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Halland_vapen.svg/250px-Halland_vapen.svg.png",
        "Kalmar län": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Kalmar_län_vapen.svg/250px-Kalmar_län_vapen.svg.png",
        "Västmanlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Västmanland_vapen.svg/250px-Västmanland_vapen.svg.png",
        "Gävleborgs län": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Gävleborgs_län_vapen.svg/250px-Gävleborgs_län_vapen.svg.png",
        "Kronobergs län": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Kronobergs_läns_vapen.svg/250px-Kronobergs_läns_vapen.svg.png",
        "Gotlands län": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gotland_vapen.svg/250px-Gotland_vapen.svg.png",
    };

    return (
        <>
            <Navbar />
            <div className="p-6 md:pt-20 text-center">
                <div className="inline-block text-center">
                    <h1 className="text-2xl font-bold mb-2" >Välj län och se de senaste polishändelserna</h1>
                    <p> 💡 Det finns 21 län i Sverige. </p>
                    <p> 🤔 Finns alla med i listan?</p>
                    <p className="p-6">Om något län saknas har det inte hänt någon polishändelse på sistone. Grattis!</p>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {counties.map((county) => {
                        const img = countyImages[county];

                        return (
                            <div
                                key={county}
                                className="cursor-pointer w-full font-medium flex flex-col items-center bg-white rounded-2xl p-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300"
                                onClick={() => navigate(`/countyDetail/${encodeURIComponent(county)}`)}
                            >
                                <h2 className="card-title text-gray-500 text-center">{county}</h2>

                                {img && (
                                    <img
                                        src={img}
                                        alt={county}
                                        className="mt-3 h-16 w-16 object-contain"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </>
    );
}