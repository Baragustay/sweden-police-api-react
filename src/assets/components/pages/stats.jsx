import Navbar from "../navbar.jsx";//Putting in component navbar.jsx
import Footer from "../footer.jsx";//Putting in component navbar.jsx
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

export default function Stats({ events = [] }) {
    const categories = [
        "Misshandel",
        "Mord/dråp, försök",
        "Trafikolycka",
        "Brand",
        "Rattfylleri",
        "Narkotikabrott",
        "Bedrägeri",
        "Stöld/inbrott",
        "Försvunnen person",
        "Olaga hot",
        "Våld/hot mot tjänsteman",
        "Skadegörelse",
        "Mordbrand",
        "Ofredande/förargelse",
        "Explosion",
        "Stöld",
        "Djur",

    ];

    const data = categories.map((category) => ({
        name: category,
        value: events.filter((e) =>
            (e.type || "").toLowerCase().includes(category.toLowerCase())
        ).length,
    }));



    return (

        <>
            <Navbar />
            <div className="p-6 pt-20 text-center max-w-prose mx-auto">
                <div className="inline-block text-left">
                    <h1 className="text-2xl font-bold mb-2 text-center">
                        Här ser du antalet av de vanligaste polishändelserna, presenterade som ett cirkeldiagram.                    </h1>

                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-20 items-start px-6 pb-20 pt-20 " >


                <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                outerRadius="90%"
                                label
                                fill="#c65fe5"
                            />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>


                <div className="w-full lg:w-1/2 max-w-prose mx-auto lg:mx-0 text-left">
                    <h2 className="text-xl font-bold mb-2">
                        Om diagrammet
                    </h2>

                    <p className="text-base mb-3">
                        Detta är ett cirkeldiagram som visar de vanligaste händelserna som polisen hanterar i Sverige.                         Det som visas är antalet inrapporterade händelser av de 500 senaste som polisen skickar ut.

                    </p>
                    <h2 className="text-lg font-bold mb-2 pt-6"> Diagrammet inkluderar dessa kategorier:</h2>

                    <ul className="list-disc pl-5 space-y-1 mb-4 p-6">
                        <li>Bedrägeri</li>
                        <li>Rattfylleri</li>
                        <li>Skadegörelse</li>
                        <li>Narkotikabrott</li>
                        <li>Mord/dråp försök</li>
                        <li>Mordbrand</li>
                        <li>Explosion</li>
                        <li>Våld/hot mot tjänsteman</li>
                        <li>Försvunnen person</li>
                        <li>Ofredande/förargelse</li>
                        <li>Djur</li>
                    </ul>
                    <p className="text-lg  mb-4">
                        💡 Vilken sorts händelse händer oftast? Varför tror du att det är så?
                    </p>
                    <p className="text-lg  mb-4">
                        🤔 Vet du vad alla kategorier betyder?
                    </p>
                </div>

            </div>



            <Footer />
        </>
    );
}