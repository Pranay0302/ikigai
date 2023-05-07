import { useEffect, useState } from "react"
import Search from "./Search"
import { HiMenuAlt2 } from "react-icons/hi"
import MainMenu from "./MainMenu"
import NewSnap from "./NewSnap"
import { Toaster } from "react-hot-toast"
import axios from "axios"
import Image from "next/image"
import nft_1 from "../assets/nft_11.jpeg";
import nft_2 from "../assets/nft_12.png";
import nft_3 from "../assets/nft_3.png";
import nft_4 from "../assets/nft_4.webp";
import nft_5 from "../assets/nft_5.jpg";
import nft_6 from "../assets/nft_6.jpg";
import nft_7 from "../assets/nft_7.jpeg";
import nft_8 from "../assets/nft_8.webp";
import nft_9 from "../assets/nft_9.jpg";

const imgArray = [nft_1,nft_2,nft_3,nft_4,nft_5,nft_6,nft_7,nft_8,nft_9];

export default function MainLayout({ children }) {
  const [displayMenu, setDisplayMenu] = useState(false)
  const [displayNew, setDisplayNew] = useState(false)
  const [trending, setTrending] = useState([])
  const [imageURL,setImageURL] = useState(imgArray[imgArray.length-1]);
  const [counter, setCounter] = useState(0);

  // hot topics
  useEffect(() => {
    const getTrending = async () => {
      try {
        const response = await axios.get("/api/trending")
        setTrending(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getTrending()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter<imgArray.length-1)
        setCounter(counter+1)
      else
        setCounter(0)
      setImageURL(imgArray[counter])
    }, 5000);

    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <div className="min-h-screen grid md:grid-cols-[1fr_2fr] xl:grid-cols-[1fr_2fr_1fr] items-start w-[95%] relative max-w-[1100px] mx-auto gap-12">
      <Toaster />
      {/* mobile menu button */}
      <button
        type="button"
        className="rounded-full fixed md:hidden bg-blue-600 text-white flex items-center justify-center p-3 aspect-square bottom-8 right-8 z-40 outline-none focus:ring hover:bg-blue-700 active:bg-blue-600 shadow-lg"
        onClick={() => setDisplayMenu(!displayMenu)}
      >
        <HiMenuAlt2 className="text-2xl" />
      </button>

      {/* new snap modal */}
      <NewSnap
        className={displayNew ? "flex" : "hidden"}
        setDisplayNew={setDisplayNew}
      />

      {/* desktop menu */}
      <MainMenu
        className="hidden md:flex sticky top-8 h-[80vh] overflow-auto"
        setDisplayNew={setDisplayNew}
        trending={trending}
        setDisplayMenu={setDisplayMenu}
      />

      {/* mobile menu */}
      <MainMenu
        className={`${
          displayMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }  bg-white p-7 transition-opacity md:hidden fixed z-30 left-1/2 top-4 bottom-4 overflow-auto -translate-x-1/2 w-[90%] shadow-2xl rounded-lg`}
        setDisplayNew={setDisplayNew}
        trending={trending}
        setDisplayMenu={setDisplayMenu}
      />

      {/* middle content */}
      <main className="w-full rounded-lg mb-12">{children}</main>

      {/* right aside */}
      <aside className="hidden lg:hidden xl:flex flex-col gap-4 sticky top-8">
        <Search className="hidden lg:block" trending={trending}  setDisplayMenu={setDisplayMenu}/>
        <div className="nft-gallery">
          <Image src={imageURL} alt="" className="min-width-images-transition"/>
        </div>
      </aside>
    </div>
  )
}
