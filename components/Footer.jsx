import React from 'react'

const Footer = () => {
  return (
    <div>
        
       <footer className="bg-[white] text-black py-4">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">ThoughtBridge</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} ThoughtBridge. All rights reserved.</p>
      </div>
    </footer>
    
    </div>
  )
}

export default Footer
