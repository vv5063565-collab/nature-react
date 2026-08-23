import Header from "./common/Header";
const AboutNature = () => {
    return (
        <>
            <section className="relative h-105 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .3)),url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/header-hero-1.jpg")`, }}>
                <div className="max-w-300  mx-auto pt-6 text-white">
                    <Header />
                    <div className="absolute inset-0 h-100 flex justify-center  items-center pointer-events-none">
                        <h1 className="text-[76px]">about us</h1>
                        <a className="bg-[#ffff] text-[#000000df] fixed cursor-pointer top-60 right-0 p-3.75 flex items-center gap-2 text-sm shadow-[0_0_1px_0_#757575]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#000000">
                                <g transform="translate(24 0) scale(-1 1)">
                                    <path
                                        d="M12 2C6.48 2 2 5.92 2 10.75C2 15.03 5.58 18.5 10 18.5H11.5C12.33 18.5 13 19.17 13 20C13 21.1 13.9 22 15 22C19.97 22 23 17.75 23 12C23 6.48 18.52 2 12 2ZM7.5 10.5A1.5 1.5 0 1 1 9 9A1.5 1.5 0 0 1 7.5 10.5ZM10.5 7.5A1.5 1.5 0 1 1 12 6A1.5 1.5 0 0 1 10.5 7.5ZM15 7.5A1.5 1.5 0 1 1 16.5 6A1.5 1.5 0 0 1 15 7.5ZM17.5 11.5A1.5 1.5 0 1 1 19 10A1.5 1.5 0 0 1 17.5 11.5Z" />
                                </g>
                            </svg><span className="font-semibold">Customize</span>
                        </a>
                    </div>
                </div>
            </section>

            <section className="text-[#536942] flex flex-col justify-center items-center text-center">
                <div className="w-285 h-267.5 py-2.5 px-12 ">
                    <div className="my-17.5">
                        <h4 className="text-[36px] tracking-[-2px] leading-11" style={{ fontFamily: "'Forum', serif" }}>
                            We’re a highly collaborative and supportive team,<br />
                            coming together on every project to ensure our<br />
                            clients get the very best result.
                        </h4>
                    </div>
                    <div>
                        <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero.jpg" alt="mountain goat" />
                    </div>
                    <div className="pt-10 pb-17.5 flex gap-12">
                        <div>
                            <h3 className="text-[21px] mb-2.5">Our Mission</h3>
                            <p className="leading-7.5">
                                Build the best product that creates the most value for our
                                customers,<br /> use business to inspire and implement
                                environmentally friendly<br /> solutions.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[21px] mb-2.5">Our Values</h3>
                            <p className="leading-7.5">
                                We strive to go above and beyond for our clients no matter
                                the<br /> challenge. We aim to deliver our very best work every
                                single day<br /> across our services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-[#536942]  text-center bg-[#f5f7f2]  flex items-center justify-center">
                <div className="w-285 h-102.75 mx-37.5 py-12.5 flex flex-col items-center justify-center gap-5">
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/quotes.svg"
                        alt="Quote" className="w-9.25 h-7.5 opacity-30" />
                    <h4 className="text-[35px] pt-2.5 pb-5 px-20 leading-11 tracking-tighter" style={{ fontFamily: "'Forum', serif" }}>
                        “Love Nature has an amazing team of hard working<br /> professionals. It has been a pleasure to meet
                        them.”
                    </h4>
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_on_about.png"
                        alt="Emily Davis" className="w-12.5 h-12.5" />
                    <p className="text-sm">Emily Davis</p>
                </div>
            </section>
        </>
    )
}

export default AboutNature