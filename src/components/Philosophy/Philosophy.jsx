
const Philosophy = () => {
    return (
        <div>
            <h1 className="text-center">Our PHILOSOPHY</h1>
            <h1 className="text-center">Human-centred innovation</h1>


            <div className="bg-[url(/src/assets/icons/easy-banking/Bridge.svg)] bg-repeat bg-cover  min-h-96 px-44 py-7">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-20">
                    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
                        <div className="shadow-xl bg-white px-10 py-5 lg:px-20 lg:py-7 ">
                            <h3 className="text-[#007bff] font-medium text-sm text-center">CORE TECH</h3>
                            <h1 className="text-[#333] font-bold text-base lg:text-xl mt-2 text-center">Artificial <br></br> Intelligence</h1>
                        </div>
                        <div className="">
                            <img src="/src/assets/icons/easy-banking/Line1.svg" className="lg:rotate-90" />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:gap-40 relative">
                        <div>
                            <div className="shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7">
                                <h3 className="text-[#007bff] font-medium text-sm text-center">MECHANISM</h3>
                                <h1 className="text-[#333] font-bold text-xl mt-5 text-center">Block Chain</h1>
                            </div>
                        </div>
                        <div className="absolute w-20 top-20 lg:top-1 left-32 lg:left-52">
                            <img src="/src/assets/icons/easy-banking/Line3.svg" className="lg:-rotate-90 w-20 lg:w-full" />
                        </div>
                        <div className="flex flex-row lg:flex-col items-center gap-20 mt-10 lg:mt-0 -ml-0 lg:-ml-32 lg:mr-0">
                            <div className="shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7">
                                <h3 className="text-[#007bff] font-medium text-sm text-center ">INFRASTRUCTURE</h3>
                                <h1 className="text-[#333] font-bold text-xl mt-2 text-center">Cloud</h1>
                            </div>
                            <div className="shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7">
                                <h3 className="text-[#007bff] font-medium text-sm text-center">RESOURCE</h3>
                                <h1 className="text-[#333] font-bold text-xl mt-2 text-center">Data</h1>
                            </div>

                            <div className="absolute w-20 top-24 lg:top-52 -left-20 lg:left-60">
                                <img src="/src/assets/icons/easy-banking/Line2.svg" className="lg:-rotate-90 w-20 lg:w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 bg-[url(/src/assets/icons/easy-banking/Bridge.svg)] bg-repeat bg-cover  min-h-96 px-44 py-7"> */}
            {/* <div className="flex items-center bg-[url(/src/assets/icons/easy-banking/Bridge.svg)] bg-repeat bg-cover  min-h-96 px-44 py-32"> */}
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 items-center">
                {/* <div>
                        <div className="shadow-xl bg-white px-20 py-7 ">
                            <h3 className="text-[#007bff] font-medium text-sm text-center">CORE TECH</h3>
                            <h1 className="text-[#333] font-bold text-xl mt-2 text-center">Artificial <br></br> Intelligence</h1>
                        </div>
                    </div>
                    <div className="">
                        <img src="/src/assets/icons/easy-banking/Line1.svg" alt="" className="lg:rotate-90" />
                    </div> */}
            </div>
            {/* <p className="text-sm text-[#333] w-60 mt-2 ml-3">Using AI/ML to upgrade legacy process, reduce cost, and improve efficiency</p> */}

            <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-20">
                {/* <div className="relative">
                        <div className="shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7">
                            <h3 className="text-[#007bff] font-medium text-sm text-center">MECHANISM</h3>
                            <h1 className="text-[#333] font-bold text-xl mt-5 text-center">Block Chain</h1>
                        </div>
                        <div className="absolute -bottom-16 -right-20 lg:-top-28 lg:-right-14  ">
                            <img src="/src/assets/icons/easy-banking/Line3.svg" className="lg:-rotate-90 w-20 lg:w-full" />
                        </div>
                        <div className="absolute -left-20 lg:-right-14 top-28 ">
                            <img src="/src/assets/icons/easy-banking/Line2.svg" className="lg:-rotate-90 w-20" />
                        </div>
                        <div className="absolute left-24 -bottom-40 block lg:hidden">
                            <img src="/src/assets/icons/easy-banking/Line1.svg" alt="" className="rotate-90" />
                        </div>
                    </div> */}

                {/* <div className="lg:mb-32 mt-10 shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7 absolute lg:relative -left-44 -top-3"> */}


                {/* <div className="flex flex-row lg:flex-col gap-20 mt-5 relative">
                        <div className="lg:mb-32 mt-10 shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7 sm:absolute lg:relative -left-44 lg:-left-0 -top-3 lg:-top-0">
                            <h3 className="text-[#007bff] font-medium text-sm text-center ">INFRASTRUCTURE</h3>
                            <h1 className="text-[#333] font-bold text-xl mt-2 text-center">Cloud</h1>
                        </div>
                        <div className="mt-10 shadow-xl bg-white px-5 py-5 lg:px-20 lg:py-7  sm:absolute lg:left-0 lg:-top-0 left-24 -top-3">
                            <h3 className="text-[#007bff] font-medium text-sm text-center">RESOURCE</h3>
                            <h1 className="text-[#333] font-bold text-xl mt-2 text-center">Data</h1>
                        </div>
                    </div> */}
            </div>
        </div>
        // </div>
    );
};

export default Philosophy;