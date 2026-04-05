import { useNavigate } from "react-router-dom";
import Squares from './Squares';

const Hero = ({ events = [] }) => {
    const navigate = useNavigate();
    const allCrimes = events.length;

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction="diagonal"
                    borderColor="#271E37"
                    hoverFillColor="#222222"
                />
            </div>

            {/* Foreground content */}
            <div className="hero bg-transparent min-h-screen">



                <div className="hero-content text-center">
                    <div className="max-w-md ">
                        <h1 className="text-5xl font-bold p-6">Vad händer i Sverige? 👮</h1>

                        <p className="p-10">
                            Detta är en databas som visar de senaste {allCrimes} polishändelserna i Sverige.
                            Här kan du upptäcka vad som har hänt runt om i landet och se vilka händelser som är vanligast.
                        </p>

                        <div className="flex gap-6 m-auto justify-center ">
                            <button
                                className="px-6 py-3 rounded-full bg-purple-700/80 text-white hover:bg-purple-500/90 transition duration-300 font-medium"
                                onClick={() => navigate("/crimeSearch")}
                            >
                                Vad händer i ditt län?
                            </button>

                            <button
                                className="px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/15 transition duration-300 font-medium"
                                onClick={() => navigate("/stats")}
                            >
                                Vanligaste händelser
                            </button>
                        </div>
                        <div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;