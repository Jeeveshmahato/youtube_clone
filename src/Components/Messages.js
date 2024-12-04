import React from 'react'

const Messages = ({name , text , userPic}) => {
    console.log(userPic);
  return (
   <>
   <div
    className="flex items-center  gap-2 py-2 px-4 border-b border-gray-300">
  
       <img className=' w-6 h-6' src={userPic} alt='user_image'/>
        <p>{name}</p>
        <p>{text}</p>
    </div>
   </>
  )
}

export default Messages