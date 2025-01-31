import './Header.css';
import Navbar from './Navbar/Navbar';
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
    return (
        <>
            <div className='diagonal-section pb-10'>
                <div className='absolute wave'>
                    <img src="/src/assets/backgrounds/WaveLinesDesktop1.svg"/>
                    <img src="/src/assets/backgrounds/WaveLinesDesktop2.svg"/>
                    <img src="/src/assets/backgrounds/WaveLinesDesktop3.svg"/>
                    <img src="/src/assets/backgrounds/WaveLinesDesktop4.svg"/>
                </div>
                
                <div className='mb-10'>
                    <Navbar />
                </div>

                <div className='flex'>
                    <div className="content font-bold  px-20 mb-10">
                        <h1 className='text-5xl lg:text-7xl lg:w-[45%]'>Embrace the future of finance</h1>
                        <p className='text-sm md:text-base mt-5 lg:w-[45%]'>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation</p>
                        <button className='bg-[#FE8B53] py-3 px-3 my-5 rounded-md text-lg flex items-center gap-2 font-bold'><span>Reach out to us</span><span><IoIosArrowForward /></span></button>
                    </div>
                    <div className="lg:bg-[url('/src/assets/banner.png')] bg-no-repeat bg-cover h-[450px] w-[500px]">
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;