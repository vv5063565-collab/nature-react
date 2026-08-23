import { servicepage } from "../utils/helper";
import Header from "./common/header";

const ServicesNature = () => {
  return (
    <>
      <section className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .3)),url("https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2025/06/ales-krivec-N-aTikX-b00-unsplash.jpg")`, }}>
        <div className="max-w-300 h-105 mx-auto pt-6 text-white">
          <Header />
          <div className="absolute inset-0 h-100 flex justify-center  items-center pointer-events-none">
            <h1 className="text-[76px]">our services</h1>
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

      <section className="text-[#536942] flex items-center justify-center h-[1820px] mt-7">
        <div className="w-300 mx-30">
          {servicepage.map((servepage) => (
            <div key={servepage} className="flex  mb-12.5">
              <div className="p-2.5">
                <div className="w-127 flex justify-center pl-20">
                  <img src={servepage.image} alt={servepage.title} />
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5 p-2.5 pl-12.5">
                <h4 className="text-[34px]" style={{ fontFamily: "'Forum', serif" }}>{servepage.title}</h4>
                <p className="text-[15px] leading-7.5 mb-2">
                  Tell your visitor how your service can improve their life.
                  Connect with<br /> the problem that they're trying to solve and
                  address any objections<br /> you think they might have.
                </p>
                <p className="text-[15px] leading-7.5">
                  What is the biggest benefit your customer will get from this?
                  Keep your<br /> target audience in mind.
                </p>
                <h3 className="text-[23px] mt-2.5 mb-5">{servepage.price}</h3>
                <div><a href="#" className="border hover:bg-[#00000017] py-3 px-7.5 rounded-sm"><span className="text-sm">Start a Project</span></a></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="text-[#536942] h-123.5 bg-[#f5f7f2] flex justify-center">
        <div className="w-335 ">
          <div className="mx-[97.5px] pt-15 pb-17.5 flex">
            <div className="w-171.75 p-3.75 flex flex-col justify-center gap-10">
              <h4 className="text-[40px] tracking-tighter" style={{ fontFamily: "'Forum', serif" }}> Why Love Nature</h4>
              <p className="text-lg pb-5 text-[#536942df]">
                Your customers just learned what services you offer. Tell them why
                they<br /> should work with you or your team, for example you could
                highlight your<br /> experience and positive client reviews.
              </p>
              <p className="text-lg text-[#536942df]">
                The badges illustrate this. We also focus on key benefits they will
                get while<br /> using our services, namely quick turnaround times and
                dedicated support.<br /> You could also use them to show awards you won
                for your best work.
              </p>
            </div>

            <div className="w-114.5 pl-6.25 flex items-center">
              <div className="grid grid-cols-2">
                <div className="w-54 flex flex-col items-center text-center pt-15">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-award text-[42px]"></i>
                  </div>
                  <h3 className="mt-2 text-[13px]"><span>8 Years Experience</span></h3>
                </div>

                <div className="w-54 flex flex-col items-center text-center pt-15">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <i className="fa fa-star text-[42px]" aria-hidden="true"></i>
                  </div>
                  <h3 className="mt-2 text-[13px]"><span>5 Star Rating</span></h3>
                </div>

                <div className="w-54 flex flex-col items-center text-center pt-15">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-arrows-rotate text-[42px]"></i>
                  </div>
                  <h3 className="mt-2 text-[13px]"><span>Quick Turnaround</span></h3>
                </div>

                <div className="w-54 flex flex-col items-center text-center pt-15">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-life-ring text-[42px]"></i>
                  </div>
                  <h3 className="mt-2 text-[13px]"><span>Dedicated Support</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesNature