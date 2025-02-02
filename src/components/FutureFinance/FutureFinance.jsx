import { useState } from "react";

const FutureFinance = () => {
    const [item,setItem] = useState("");
    
    const handleItem = (item) =>{
        // e.preventDefault();
        console.log(item);
        setItem(item);
    }
    return (
        <>
            <div className="mt-20">
                <h3 className="text-[#007bff] font-medium text-lg lg:text-2xl text-center">TECHNOLOGY BUILT FOR YOU</h3>
                <h1 className="text-[#333] font-bold text-2xl lg:text-7xl text-center">The future of finance</h1>
                <div>
                    <div className="hidden md:block">
                        <ul className="flex flex-1 items-center justify-around mt-10 px-3 py-3 lg:px-20 lg:py-5 text-[#007bff] text-base font-medium">
                            <li className={`${item === "item1" ? 'bg-blue-400 md:px-5 py-2 rounded-md bg-opacity-30' : ''} text-center md:px-5 py-2`}><a onClick={()=>handleItem("item1")} href="#item1">Customer focused</a></li>
                            <li className={`${item === "item2" ? 'bg-blue-400 md:px-5 py-2 rounded-md bg-opacity-30' : ''} text-center md:px-5 py-2`}><a onClick={()=>handleItem("item2")} href="#item2">Agile and Adaptable</a></li>
                            <li className={`${item === "item3" ? 'bg-blue-400 md:px-5 py-2 rounded-md bg-opacity-30' : ''} text-center md:px-5 py-2`}><a onClick={()=>handleItem("item3")} href="#item3">Complience ready</a></li>
                            <li className={`${item === "item4" ? 'bg-blue-400 md:px-5 py-2 rounded-md bg-opacity-30' : ''} text-center md:px-5 py-2`}><a onClick={()=>handleItem("item4")} href="#item4">Secure and safe</a></li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <div className="carousel w-full my-10">
                            <div id="item1" className="carousel-item w-full">

                                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 h-fit w-[80%] md:w-3/4 rounded-md px-5 lg:px-20 py-5 lg:py-10 bg-base-100 shadow-2xl mx-auto">

                                    <div>
                                        <h2 className="text-base text-[#007bff] mb-2 font-bold">CUSTOMER FOCUSED</h2>
                                        <h1 className="card-title text-xl lg:text-5xl mb-5">Purpose-built financial services</h1>
                                        <p className="text-sm md:text-base mb-2 md:mb-10"><strong>Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.</strong></p>
                                        <p className="text-sm md:text-base mt-5">Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities.</p>
                                    </div>
                                    <figure>
                                        <img
                                            src="https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg?w=640&auto=format"
                                            alt="Customer-Focused" className="rounded-lg" />
                                    </figure>
                                </div>

                            </div>
                            <div id="item2" className="carousel-item w-full">
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-3/4 rounded-md px-5 lg:px-20 py-5 lg:py-10 bg-base-100 shadow-2xl mx-auto">

                                    <div className="">
                                        <h2 className="text-base text-[#007bff] mb-2 font-bold">FLEXIBLE AND ADAPTABLE</h2>
                                        <h1 className="card-title text-xl lg:text-5xl mb-5">Agile and adaptable for growth</h1>
                                        <p className="text-sm md:text-base mb-2 md:mb-10">Innovate to meet evolving client needs through our open platform technology architecture. Stay ahead of the ever-changing financial landscape with a focus on security, compliance and efficiency.</p>
                                        <p className="text-sm md:text-base mt-5">Enhance your offerings to unlock new revenue streams and deliver exceptional customer experiences with digitally designed core banking, payment processing and lending capabilities.</p>
                                    </div>
                                    <figure>
                                        <img
                                            src="https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format" alt="Customer-Focused" className="rounded-lg" />
                                    </figure>
                                </div>
                            </div>
                            <div id="item3" className="carousel-item w-full">
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-3/4 rounded-md px-5 lg:px-20 py-5 lg:py-10 bg-base-100 shadow-2xl mx-auto">

                                    <div className="">
                                        <h2 className="text-base text-[#007bff] mb-2 font-bold">Ready for regulatory compliance</h2>
                                        <h1 className="card-title text-xl lg:text-5xl mb-5">Manage regulatory compliance with ease</h1>
                                        <p className="text-sm md:text-base mb-2 md:mb-10">Help you confidently meet changing regulations by streamlining compliance management through real-time risk monitoring solutions powered by AI and machine learning.</p>
                                        <p className="text-sm md:text-base mt-5">Transform your compliance strategy with flexible and versatile policy rules powered by cutting-edge technology designed to seamlessly integrate with core banking and card payment systems.</p>
                                    </div>
                                    <figure>
                                        <img
                                            src="https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format" alt="Customer-Focused" className="rounded-lg" />
                                    </figure>
                                </div>
                            </div>
                            <div id="item4" className="carousel-item w-full">
                                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 w-3/4 rounded-md px-5 lg:px-20 py-5 lg:py-10 bg-base-100 shadow-2xl mx-auto">

                                    <div className="">
                                        <h2 className="text-base text-[#007bff] mb-2 font-bold">Safe and stable</h2>
                                        <h1 className="card-title text-xl lg:text-5xl mb-5">High stability and security</h1>
                                        <p className="text-sm md:text-base mt-5">Experience unparalleled security, the security trusted by financial institutions worldwide. Our applications are meticulously developed to meet international security standards, drawing on over 20 years of technical expertise.</p>
                                        </div>
                                    <figure>
                                        <img
                                            src="https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format" alt="Customer-Focused" className="rounded-lg" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center gap-2">
                            <a href="#item1" className="btn btn-xs"></a>
                            <a href="#item2" className="btn btn-xs"></a>
                            <a href="#item3" className="btn btn-xs"></a>
                            <a href="#item4" className="btn btn-xs bg-blue-400"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FutureFinance;