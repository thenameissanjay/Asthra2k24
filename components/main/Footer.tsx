import React from "react";

import Image from "next/image";
import Link from "next/link";



const Footer = () => {
  return (
<footer className="footer footer-center p-10 bg-white bg-opacity-30 text-center text-primary-content">
  {/* Content */}
  <aside>
  <Image
            src="/logoastra.png"
            alt="logo"
            width={90}
            height={90}
            className="cursor-pointer hover:animate-slowspin"
          />
    <p className="font-bold">
      ASTHRA 2K24. <br/>Department Of IT
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
    <Link href="https://www.instagram.com/asthra.2k24/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
          <img src="./insta1.png" className="w-10 h-10"></img>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
    </div>
  </nav>
</footer>
  )
}

export default Footer