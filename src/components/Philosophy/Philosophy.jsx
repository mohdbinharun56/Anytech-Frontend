
const Philosophy = () => {
    return (
        <div>
            <h1 className="text-center text-base lg:text-xl text-[#007bff]">Our PHILOSOPHY</h1>
            <h1 className="text-center text-lg lg:text-3xl font-bold my-5">Human-centred innovation</h1>


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

            {/* card container */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-20 mt-5">
                <div className="bg-[F8FCFF] shadow-md my-10 px-10 py-5">
                    <img src="https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format" />
                    <h1 className="font-medium text-lg text-[#333] my-2">Full-suite solutions</h1>
                    <p className="text-base mb-2">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
                </div>
                <div className="bg-[F8FCFF] shadow-md my-10 px-10 py-5">
                    <img src="https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format" />
                    <h1 className="font-medium text-lg text-[#333] my-2">Simplify the complex</h1>
                    <p className="text-base mb-2">Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.</p>
                </div>
                <div className="bg-[F8FCFF] shadow-md my-10 px-10 py-5">
                    <img src="https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format" />
                    <h1 className="font-medium text-lg text-[#333] my-2">Cutting-edge tech</h1>
                    <p className="text-base mb-2">We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.</p>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Philosophy;