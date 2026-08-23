import { ourservices } from "../utils/helper"
import Header from "./common/header";

const HomeNature = () => {
    return (
        <>
            <section className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)),url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2022/01/header-hero.jpg")`, }}>
                <div className="max-w-300 h-163.75 mx-auto pt-6 text-white">
                    <Header/>
                    <div className="text-center my-28">
                        <h2 className="text-[50px] h-8">we all love</h2>
                        <h2 className="text-[117px] ">nature</h2>
                        <p className="h-8">Look deep into nature, and you will<br />understand everything better.</p>
                        <button className="bg-[#ffd936] hover:bg-[#f7c81de3] px-10 py-3.5 rounded-md text-sm cursor-pointer text-green-800 mt-10">Get started</button>
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

            <section className="text-[#536942]">
                <div className="max-w-280 mx-auto my-17.5 h-194 text-center">
                    <h1 className="text-[40px] pt-2.5">Our Services</h1>
                    <div className="border-2 border-yellow-300 w-22.5 mx-auto my-4"></div>

                    <div className="flex justify-center items-center text-left pt-6.25 gap-7.5">
                        {ourservices.map((service) => (
                            <div key={service.title} className="py-4 w-[343.33px] ">
                                <img src={service.image} alt={service.title} className="h-116" />
                                <div className="mx-2.5 mt-1.5">
                                    <h2 className="text-xl mt-6 mb-2">{service.title}</h2>
                                    <p className="leading-7 text-[#556b3dd6]">Focus on how you can help and benefit <br />
                                        your user. Use simple words so that you <br />
                                        don't confuse people.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="text-[#536942] bg-[#f5f7f2] py-12.5 my-0 mx-auto flex items-center justify-center">
                <div className="w-285 h-88.5 text-center flex flex-col justify-center items-center">
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/quotes.svg" alt="quote-icon" className="w-9.25 h-7.5 block mx-auto mb-7.5 opacity-30" />
                    <h2 className="text-[35px] mb-10 leading-10.75 tracking-[-2px]" style={{ fontFamily: "'Forum', serif" }}>
                        “Original and with an innate understanding of their<br /> customer’s needs,
                        the team at Love Nature are<br /> always a pleasure to work with.”
                    </h2>
                    <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/avatar_on_home.png"
                        alt="Jane Miller" className="w-12.5 h-12.5 mb-3" />
                    <p className="text-sm">Jane Miller</p>
                </div>
            </section>

            <section className="h-160.25  text-[#536942]">
                <div className="flex h-full my-0 mx-35 py-12.5 items-center justify-center">
                    <div className="py-2.5 pl-6.25 pr-62.5 h-full flex flex-col justify-center">
                        <p className="text-[12px]  text-[#536942d0] mb-5">ABOUT US</p>
                        <h2 className="text-[40px] leading-none tracking-tighter mb-5" style={{ fontFamily: "'Forum', serif" }}>
                            Tell website visitors who you <br /> are and why they should <br />choose your business.
                        </h2>
                        <p className="mb-10 leading-7 text-[#536942c5]">
                            Because when a visitor first lands on your website,<br /> you're a stranger to them. They have to get to know<br /> you in order to want to read your blog posts, subscribe<br /> to your email newsletter, or buy what you're selling.
                        </p>
                        <a href="#" className="py-4 flex flex-col text-center w-43 border text-[15px] hover:bg-[#00000017] rounded"><span>Find Out More</span></a>
                    </div>
                    <div className="p-4 ">
                        <img src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/leaf.jpg" alt="nature" className="w-101 h-122.25" />
                    </div>
                </div>
            </section>

            <section className="h-120 text-[#536942] my-0 mx-auto bg-center bg-cover bg-no-repeat flex justify-center"
                style={{ backgroundImage: "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/footer-hero-big.jpg')", }}>
                <div className="w-280 flex flex-col items-center justify-center text-center">
                    <h1 className=" text-[56px] tracking-wide">QUESTIONS?</h1>
                    <p className="text-[17px] leading-8 my-6">Whether you’re curious about features, a free trial, or<br /> even press, we’re here to answer any questions.</p>
                    <button href="#" className="rounded-md py-3.5 text-sm mt-4 tracking-[-0.8px] px-10 cursor-pointer bg-[#ffd936] hover:bg-[#f7c81de3] flex items-center justify-center">Let's Talk Now</button>
                </div>
            </section>
        </>
    )
}

export default HomeNature