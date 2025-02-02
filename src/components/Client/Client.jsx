const Client = () => {
    return (
        <>
            <div>
                <h1 className="text-center text-lg mt-20 font-bold text-[#007bff]">TRUSTED BY THE BEST</h1>
                <div className="flex flex-col lg:flex-row gap-20 items-center justify-center mt-10 font-bold">
                    <div className="flex flex-row md:flex-col justify-between items-center gap-10 lg:gap-0">
                        <h1 className="text-3xl md:text-7xl text-[#0057BB]">> 20</h1>
                        <p className="text-base font-normal text-[#333]">Years of Experience</p>
                    </div>
                    <div className="flex flex-row md:flex-col justify-between items-center gap-10 lg:gap-0">
                        <h1 className="text-3xl md:text-7xl text-[#0057BB]">40+</h1>
                        <p className="text-base font-normal text-[#333]">Financial Institutions</p>
                    </div>
                    <div className="flex flex-row md:flex-col justify-between items-center gap-10 lg:gap-0">
                        <h1 className="text-3xl md:text-7xl text-[#0057BB]">>200m</h1>
                        <p className="text-base font-normal text-[#333]">Customers Each</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Client;