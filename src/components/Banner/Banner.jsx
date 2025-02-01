import './Banner.css'
const Banner = () => {
    return (
        <>
            <div className="banner-container px-20 mt-20">
                <div className="">
                    <h3 className="text-[#1F80F0] text-center lg:text-start text-base font-semibold">POWERING THE FUTURE OF FINANCE</h3>
                    <h1 className="text-blue-950 font-bold mt-10 text-xl lg:text-7xl mx-auto lg:mx-0 w-8/12 lg:w-1/2">Uncovering new ways to delight customers</h1>
                </div>
                <div className="content flex flex-col-reverse lg:flex-row justify-around items-center">
                    <div className="">
                        <p className="text-blue-950 font-semibold text-sm md:text-lg mt-5 md:w-2/5">AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                        <p className="mt-10 text-[#164377] text-sm md:text-base md:w-2/5">Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                    </div>
                    <div className="w-1/2 mx-auto mt-10 relative lg:-top-32">
                        <img src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format" alt="BannerImage" className="w-3/4 shadow-lg bg-[#16437763]" />
                        <div className=" absolute w-32 bottom-10 lg:w-80 h-96 lg:-top-32 -left-10 lg:-left-24 opacity-50 -z-10 rotate-180">
                            <img src="/src/assets/frames/story/3.svg"/>
                        </div>
                        <div className="bounce absolute  lg:w-80 h-96 -top-10 lg:-top-24 lg:-right-20 -z-10 opacity-50 hidden lg:block">
                            <img src="/src/assets/frames/story/2.svg"/>
                        </div>
                        <div className="mouseOver absolute bottom-1 w-10 lg:w-full hidden lg:block">
                            <img src="/src/assets/frames/story/2.svg"/>
                        </div>
                        <div className="mouseOver absolute bottom-1 right-28 opacity-32 rotate-90 scale-y-50 hidden lg:block">
                            <img src="/src/assets/frames/story/2.svg"/>
                        </div>
                        <div></div>
                        <div className="bounce absolute top-10 -left-5 lg:-left-10">
                            <img src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format" className="w-1/2 lg:w-full"/>
                        </div>
                        <div className="bounce absolute top-20 left-10 lg:top-1/2">
                            <img src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format" className="w-1/2 lg:w-full"/>
                        </div>
                        <div className="bounce absolute bottom-1/2 lg:top-10 -right-10 lg:right-10">
                            <img src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format" alt="" className="w-1/2 lg:w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;