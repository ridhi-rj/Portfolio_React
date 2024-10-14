import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ridhiRajput.jpg"

const Hero = () => {
    return (
        <div className = "m-7 border-b border-neutral-900 pb-4 lg:mb-36">
            <div className = "flex flex-wrap">
                <div className = "w-full lg:w-1/2">
                <div className = "flex flex-col lg:items-start">
                    <h1 className = "pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text8xl">Ridhi Rajput</h1>
                    <span className = "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer
                    </span>
                    <p className = "text-justify my-2 max-w-xl py-6 font-light tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
             </div>
             <div className = "w-full lg:w-1/2 p-8">
                <div className = "flex justify center">
                    <img className = "rounded w-full sm:w-48 md:w-64 lg:w-96 h-auto" src = {profilePic} alt="Ridhi Rajput"></img>
                </div>
             </div>
        </div>
    </div>
    );
};

export default Hero;