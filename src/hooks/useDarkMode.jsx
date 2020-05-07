import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [modeChange, setmodeChange] = useLocalStorage('isDark');

    useEffect(() => {
        const body = document.querySelector('body');
        if (modeChange) {
            
            body.classList.add('dark-mode');
        } else {
            
            body.classList.remove('dark-mode');
        
        }
    },[modeChange])
    
    return [modeChange, setmodeChange];
 //return to access hook
}

export default useDarkMode; 