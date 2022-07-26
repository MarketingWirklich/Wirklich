import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

/* Context para o toggle do menu lateral nas versões mobile */


interface IDrawerContextData {
    isMenuOpen: boolean;
    handleMenuClick: () => void;
    scrollToTop: () => void;
    moveToTecnologia: () => void;
    moveToInovation: () => void;
    moveToNoticias: () => void;
}

const DrawerContext = createContext ({} as IDrawerContextData)

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

            if (body?.classList.contains('overflow-auto')) {
                body?.classList.add('overflow-hidden')
                body?.classList.remove('overflow-auto')
    
              } else {
                console.log("False")
                body?.classList.remove('overflow-hidden')
                body?.classList.add('overflow-auto')
                
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

            if (body?.classList.contains('overflow-auto')) {
                body?.classList.add('overflow-hidden')
                body?.classList.remove('overflow-auto')
    
              } else {
                console.log("False")
                body?.classList.remove('overflow-hidden')
                body?.classList.add('overflow-auto')
                
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

            if (body?.classList.contains('overflow-auto')) {
                body?.classList.add('overflow-hidden')
                body?.classList.remove('overflow-auto')
    
              } else {
                console.log("False")
                body?.classList.remove('overflow-hidden')
                body?.classList.add('overflow-auto')
                
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


    return (
        <DrawerContext.Provider value={{isMenuOpen, handleMenuClick, scrollToTop, moveToTecnologia, moveToInovation, moveToNoticias}}>
          {children}
        </DrawerContext.Provider>
    )
}