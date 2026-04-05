import Navbar from "../navbar.jsx";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../footer.jsx";

export default function CountyDetail({ events = [] }) {
    const { countyName } = useParams();
    const decodedCountyName = decodeURIComponent(countyName || "");

    const crimesInCounty = events.filter(
        (e) => e.location?.name === decodedCountyName
    );

    let counties = events.map((item) => item.location?.name);
    counties = counties.filter(Boolean);
    counties = [...new Set(counties)];

    const navigate = useNavigate();

    const crimeImages = {
        Djur: "🐕",
        "Stöld/inbrott": "🥸",
        "Fylleri/LOB": "🍺",
        Arbetsplatsolycka: "👷‍♀️",
        Misshandel: "🤕",
        Brand: "🔥",
        Trafikolycka: "🚗 🚗",
        "Trafikolycka, singel": "🚗",
        "Försvunnen person": "🔍",
        Explosion: "💥",
        "Mord/dråp, försök": "🔪",
        Rattfylleri: "🍺🚗",
        Bedrägeri: "🤥",
        Mordbrand: "🔪🔥",
        Bråk: "🤼",
    };

    return (
        <>
            <Navbar />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center px-4 sm:px-6 pt-10 pb-12 sm:pt-10 sm:pb-10 lg:pt-20 lg:pb-20" >

                <div className="p-4 sm:p-6 pt-20 w-full max-w-2xl">
                    <h1 className="text-2xl font-bold">
                        Polishändelser i {decodedCountyName}
                    </h1>

                    <p className="opacity-70 mt-1">
                        Antal händelser: {crimesInCounty.length}
                    </p>

                    <p className="mt-1">
                        Senaste händelser rapporterade av polisen i {decodedCountyName}
                    </p>

                    <div className="mt-6 space-y-4">
                        {crimesInCounty.map((crime) => {
                            const icon = crimeImages[crime.type];

                            return (
                                <div
                                    key={crime.id}
                                    className="rounded-2xl px-4 py-4 bg-white border border-gray-200"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <h2 className="text-lg text-gray-800 font-bold">
                                            {crime.name}
                                        </h2>

                                        {icon && (
                                            <div className="text-3xl leading-none shrink-0">
                                                {icon}
                                            </div>
                                        )}
                                    </div>

                                    <p className="text-sm text-gray-800 opacity-80 mt-1">
                                        {crime.datetime} • {crime.type}
                                    </p>

                                    {crime.summary && (
                                        <p className="mt-2 text-base text-gray-800">
                                            {crime.summary}
                                        </p>
                                    )}

                                    {crime.url && (
                                        <a
                                            className="mt-3 inline-block underline text-yellow-600 hover:text-yellow-700 font-medium"
                                            href={`https://polisen.se${crime.url}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Läs mer på polisens webbplats
                                        </a>
                                    )}
                                </div>
                            );
                        })}


                    </div>
                </div>


                <div className="items-center justify-center gap-4 mt-10 lg:mt-60 p-4 sm:p-6  w-full">
                    <h2 className="text-xl font-semibold mb-4 ">
                        Välj ett annat län
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                        {counties.map((county) => {
                            return (
                                <div
                                    key={county}
                                    className="cursor-pointer font-medium items-center overflow-hidden hover:-translate-y-1 transition duration-300 pt-5"
                                    onClick={() =>
                                        navigate(`/countyDetail/${encodeURIComponent(county)}`)//removes swedish symbols
                                    }
                                >
                                    <h2 className="card-title text-gray-200">{county}</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}