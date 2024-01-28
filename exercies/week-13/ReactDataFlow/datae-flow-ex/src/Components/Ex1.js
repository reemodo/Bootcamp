import React from 'react'
import { useState } from 'react';
import { Images } from './Images'

export function Ex1() {
    
    const images= [
        "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
        "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
      ]
    const [currentImg,setCurrentImg]= useState(0) 
    const handelCurrentImg = (index) =>{
        if (index >= 0 && index < images.length)
        setCurrentImg(index)
    }

    return (
      <>
        <button onClick={() => handelCurrentImg(currentImg-1)}>previous</button>
        <Images url= {images[currentImg]}/>
        <button onClick={() => handelCurrentImg(currentImg+1)}>next</button>
      </>
    );
}
