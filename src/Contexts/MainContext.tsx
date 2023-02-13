import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

/* Context para o toggle do menu lateral nas versões mobile */


interface IDrawerContextData {
    isMenuOpen: boolean;
    handleMenuClick: () => void;
    scrollToTop: () => void;
    moveToTecnologia: () => void;
    moveToInovation: () => void;
    moveToNoticias: () => void;
    moveToAgro: () => void;
    moveToFerroviario: () => void;
    moveToAutomotivo: () => void;
    moveToFrigorifico: () => void;
    moveToMeioAmbiente: () => void;
    moveToEnergiaSolar: () => void;
    moveToServicoDeTerceirizacao: () => void;
    langToPortuguese: () => void;
    langToEnglish: () => void;
    langToSpanish: () => void;
    isPortuguese: boolean;
    isEnglish: boolean;
    isSpanish: boolean;
}

const DrawerContext = createContext ({} as IDrawerContextData)

const responsive = window.matchMedia('(max-width: 1024px)');

export const useDrawerContext = () => {
    return useContext(DrawerContext);

}

const body = document.querySelector("body")

body?.classList.add('overflow-auto')



type Props = {
    children: React.ReactNode
};
export const MenuContext = ({children}:Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate()

    const moveToTecnologia =  useCallback(() => {

      navigate('/')

          setMenuOpen(false)

          setTimeout(() => {

            if (responsive.matches) {
                body?.classList.add('overflow-auto')
                body?.classList.remove('overflow-hidden')
    
              } 
  
              
          }, 600)

          const url = location.href;
   
          setTimeout(() => {
            

            location.href = "#tecnologia"
            
          }, 100)

          setTimeout(() => {
            history.replaceState(null, url)
            console.log("Change URL")
          }, 200);

    }, [])

    const moveToInovation =  useCallback(() => {

      navigate('/')

          const url = location.href;

          setMenuOpen(false)

          setTimeout(() => {

            if (responsive.matches) {
              body?.classList.add('overflow-auto')
              body?.classList.remove('overflow-hidden')
  
            } 
  
              
          }, 600)
   
          setTimeout(() => {
            

            location.href = "#inovação"
            
          }, 100)

          setTimeout(() => {
            history.replaceState(null, url)
            console.log("Change URL")
          }, 200);

    }, [])

    const moveToNoticias =  useCallback(() => {

      navigate('/')

          const url = location.href;

          setMenuOpen(false)

          setTimeout(() => {

            if (responsive.matches) {
              body?.classList.add('overflow-auto')
              body?.classList.remove('overflow-hidden')
  
            } 
  
              
          }, 600)
   
          setTimeout(() => {
            

            location.href = "#noticias"
            
          }, 100)

          setTimeout(() => {
            history.replaceState(null, url)
            console.log("Change URL")
          }, 200);

    }, [])

    const moveToFerroviario = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#ferroviario"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
      }, 600);

    }, [])

    const moveToAutomotivo = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#ferroviario"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
      }, 600);

    }, [])

    const moveToFrigorifico = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#automotivo"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
      }, 600);

    }, [])



    const moveToAgro = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#frigorifico"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
        console.log(url)
      }, 600);

    }, [])

    const moveToMeioAmbiente = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#agro"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
        console.log(url)
      }, 600);

    }, [])

    const moveToEnergiaSolar = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#meio-ambiente"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
        console.log(url)
      }, 600);

    }, [])

    const moveToServicoDeTerceirizacao = useCallback(() => {
      const url = location.href;


      navigate('/solu%C3%A7%C3%B5es')

      setTimeout(() => {
        location.href = "/solu%C3%A7%C3%B5es#energia-solar"

      }, 200);


      setTimeout(() => {
        history.replaceState(null, url)
        console.log(url)
      }, 600);

    }, [])


    /* Usado useCallback para previnir possiveis loops infinitos */
    const handleMenuClick = useCallback(() => {

        

    
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        setTimeout(() => {

          if (body?.classList.contains('overflow-auto')) {
              body?.classList.add('overflow-hidden')
              body?.classList.remove('overflow-auto')
  
            } else {
              console.log("False")
              body?.classList.remove('overflow-hidden')
              body?.classList.add('overflow-auto')
              
            }

            
        }, 600)

        setMenuOpen(oldMenuOpen => !oldMenuOpen)


    }, [])


    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
        
      };

    const [isPortuguese, setIsPortuguese] = useState(true)
    const [isEnglish, setIsEnglish] = useState(false)
    const [isSpanish, setIsSpanish] = useState(false)

    const langToPortuguese = () => {
      setIsEnglish(false)
      setIsPortuguese(true)
    }

    const langToEnglish = () => {
      setIsPortuguese(false)
      setIsEnglish(true)
    }

    const langToSpanish = () => {
      setIsPortuguese(false)
      setIsEnglish(false)
      setIsSpanish(true)
    }


    return (
        <DrawerContext.Provider value={{isMenuOpen, langToSpanish, isSpanish, isPortuguese, handleMenuClick, scrollToTop, moveToTecnologia, moveToInovation, moveToNoticias, moveToFerroviario, 
        moveToAutomotivo, moveToFrigorifico, moveToAgro, moveToMeioAmbiente, moveToEnergiaSolar, moveToServicoDeTerceirizacao, isEnglish, langToPortuguese, langToEnglish  }}>
          {children}
        </DrawerContext.Provider>
    )
}