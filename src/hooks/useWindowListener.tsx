import {useRef,useEffect,useState} from 'react';

export function useWindowListener(evetType:string,listener:EventListener){
 
 
 
    useEffect(()=>{

        window.addEventListener(evetType,listener)

        return ()=>{
            window.removeEventListener(evetType,listener)
        }
    },[])
}