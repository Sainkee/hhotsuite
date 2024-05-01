import { navItem } from "../constants";
export default function Head() {
  return (
    <>
      <div className="    py-6  px-6 ">
        <div className="container ">
          <div className="flex justify-between items-center gap-6 ">
            <a href="#" className="flex gap-2 cursor-pointer justify-center items-center">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/emoji/48/owl-emoji.png"
                alt="owl-emoji"
              />
              <h1 className="text-2xl font-bold hidden lg:block capitalize ">
                {navItem.logo}
              </h1>
            </a>
            <div className=" hidden lg:flex  text-base justify-center  items-center">
              <ul className="  flex items-center justify-center  gap-4">
                {navItem.navLink.map((x, index) => (
                  <li key={index} className=" capitalize hover:text-blue-600 ">
                    <a href="" className="text-base">{x.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex capi text-base items-center capitalize   justify-around  gap-3 ">
              <a href="#" className=" hover:text-blue-600 ">contact us</a>
              <a href="#" className=" hover:text-blue-600 ">
                Sign in
              </a>
              <a
                className="bg-blue-500 px-3 rounded-md py-2 text-white hover:bg-blue-800"
                href="#"
              >
                {" "}
                sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
