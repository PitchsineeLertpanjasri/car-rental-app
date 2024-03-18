import { useRef,useEffect, useState } from "react"
import { useWindowListener } from "@/hooks/useWindowListener"


export function VlogPlayer({vdoSrc,isPlaying}:{vdoSrc:string,isPlaying:boolean}){
    
    const vdoRef=useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(isPlaying){
            vdoRef.current?.play()
            //alert('play')
        }
        else{
            vdoRef.current?.pause()
            //alert('pause');
        }
    },[isPlaying])

    useWindowListener("resize",(e)=>{alert('window width is '+(e.target as Window).innerWidth)})
    
    return (
        <video className="w-[40%]" src={vdoSrc} ref={vdoRef} muted loop controls></video>
    )
}