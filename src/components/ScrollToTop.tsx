import { useEffect, useState } from "react";
import { useDrawerContext } from "../Contexts/MainContext";
import { AiOutlineArrowDown } from 'react-icons/ai'

export function ScrollToTop() {

    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 Leva para o topo da página
    // Behavior: Para subir lentamente

    const { scrollToTop } = useDrawerContext()

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 2500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);

  }, []);


    return (
        <div className="scroll-to-top duration-700">
      {isVisible && (
        <div onClick={scrollToTop}>
          <div className="scroll-to-top-style fixed flex justify-center items-center w-[40px] h-[40px] rounded-full bottom-6 left-6 z-50 cursor-pointer animate-bounce">
            <AiOutlineArrowDown className="rotate-180" color="#FFF" size={20}/>
          </div>
        </div>
      )}
    </div>
    )
}