import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({index,color}) => {

  const saveToClipBoard = async()=>{

    if(navigator.clipboard){
      try{
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      }catch(error){
        toast.error("Failed to copy to clipboard")
      }
      }else{  toast.error("clipboard navigator not available")
               }
  };

 const{hex,weight} =color;
  return (
    <article className={index>10?'color color-light':'color'} 
    onClick={saveToClipBoard}
    style={{background:`#${hex}`}} >
 <p className='percent-value'>{weight}</p>
 <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor