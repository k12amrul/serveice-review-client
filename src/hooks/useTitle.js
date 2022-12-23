import { useEffect } from "react"


   const useTitle =title =>{
    useEffect( () =>{
        document.title =  `${title} -assi`

    }  , [title])

}

export default useTitle