import React from "react";
import wajid from "../assets/wajid.jpg"

const About = () =>{
    return (
        <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4 ">
                        <p className="text-4xl font-bold inline border-b-4 border-[#ccd6f6]">About</p>
                    </div>
                    <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                        {/* <p >Delighted to have you here. </p> */}
                        <img className="w-1/2 mx-auto rounded-full" src={wajid} alt="img"></img>
                        </div>
                        <div>
                            <p className="text-lg tracking-wider">
                            I'm a Software Engineer, an avid learner, and a tech enthusiast. I am passionate about building websites with great UIs and improving User Experience. I specialize in creating software that not only meets but exceeds client expectations, from individuals and small businesses to large enterprise corporations. My dedication to learning and innovation drives me to deliver top-notch solutions tailored to each project's unique needs.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

       
    )
}

export default About