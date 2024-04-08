import React from 'react'
import tindog from '../assets/tindog.png'
import snakeGame from '../assets/snakeGame.png'
import toDoList from '../assets/toDoList.png'
import weather_App from '../assets/weather-App.png'
import moveIt from '../assets/moveIt.png'

const Work = () => {
  return (
    <div className='max-w-[1200PX] mx-auto p-5' id='work'>
      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my recent work</p>
      </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
                <img src={tindog} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Tindog-Tindar for dogs</span>
                    <div className="pt-8 text-center">
                        <a href="https://tindog-website-by-karan.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
                <img src={snakeGame} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Snake-Game for pc</span>
                    <div className="pt-8 text-center">
                        <a href="https://snake-game-by-karan.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
                <img src={toDoList} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">ToDo-List</span>
                    <div className="pt-8 text-center">
                        <a href="https://to-do-list-by-karan.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
                <img src={weather_App} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Weather-App</span>
                    <div className="pt-8 text-center">
                        <a href="https://weather-app-by-karan.netlify.app/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
                <img src={moveIt} alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">Move It</span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[200px] bg-cover relative">
                <img src="#" alt="" />
                <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider"></span>
                    <div className="pt-8 text-center">
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold'>Live</button>
                        </a>
                    </div>
                </div>
            </div>
           

        </div>

    </div>
  )
}

export default Work
