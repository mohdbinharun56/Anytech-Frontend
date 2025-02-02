import './Contact.css'
import { IoIosArrowForward } from "react-icons/io";
const ContactUS = () => {
    return (
        <>
            <div className="diagonal">
                <div className='px-20 lg:px-40 py-24 lg:py-40 relative'>
                    <h1 className='text-2xl lg:text-5xl'>Legacy no longer</h1>
                    <p className='text-base mt-5'>Talk to us to find out how we can transform your organisation for the future</p>
                    <button className='bg-[#FE8B53] py-3 px-3 my-5 rounded-md text-lg flex items-center gap-2 font-bold'><span>Reach out to us</span><span><IoIosArrowForward /></span></button>
                    <div className='wave absolute'>
                        <img src="/src/assets/backgrounds/WaveLinesDesktop1.svg" alt="" />
                    </div>
                    <div className='wave absolute w-1/2 -top-10 right-1'>
                        <img src="/src/assets/backgrounds/WaveLinesDesktop2.svg" alt="" />
                    </div>
                    <div className='wave absolute -left-1 -top-2 w-1/2'>
                        <img src="/src/assets/backgrounds/WaveLinesDesktop3.svg" alt="" />
                    </div>
                    <div className='wave absolute top-1 w-1/2'>
                        <img src="/src/assets/backgrounds/WaveLinesDesktop4.svg" alt="" />
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactUS;