

const Footer = () => {
    return (
        <>
            <div className="flex items-center justify-around lg:justify-between px-10 lg:px-20 py-5 lg:py-10 bg-[#002045] mt-1 text-white">
                <div>
                    <img src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&auto=format" alt="AnyTechLogo" className="w-40 lg:w-full"/>
                </div>
                <div className="hidden lg:block"> 
                    <ul className="flex items-center justify-center gap-10 text-[#00E9EA] font-medium">
                        <li><a href="">Our Solution</a></li>
                        <li><a href="">AnyCaaS</a></li>
                        <li><a href="">AnyBaaS</a></li>
                        <li><a href="">AnyPaaS</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 lg:hidden">
                    <a href=""><img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Linkedin" className="w-10" /></a>
                    <a href=""><img src="/src/assets/phone-logo.png" alt="Linkedin" className="w-10" /></a>
                    <a href=""><img src="/src/assets/message-logo.png" alt="Linkedin" className="w-10" /></a>
                </div>
            </div>
            <div className="text-[#1F80F0] bg-[#00152D] flex flex-col md:flex-row px-10 py-5 justify-around text-center">
                <small>©2023 All rights reserved. Any Technology Pte Ltd.</small>
                <a href="" className="mt-3 lg:mt-0">Privacy Policy</a>
            </div>
        </>
    );
};

export default Footer;