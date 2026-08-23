import { Link } from "react-router-dom"
function Header () {
    return (
        <header >
            <div className="flex justify-between items-center text-[16px]">
                <img className="w-15" src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg" alt="logo" />
                <ul className="flex gap-7.5  cursor-pointer ">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/AboutNature"  >About</Link></li>
                    <li><Link to="/ServiceNature">Services</Link></li>
                    <li><Link to="/ContactNature" >Contact</Link></li>
                    <li><a className="border text-[15px] rounded-sm px-6.25 py-3.25 hover:bg-[#00000017]">202-555-0188</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header