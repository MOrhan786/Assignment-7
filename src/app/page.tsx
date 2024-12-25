
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    
    <div className=" min-h-screen flex flex-col items-center justify-center text-black gap-14 ">
      
      {/* Title Section */}
      <div className="mt-[70px] " >
 <h1 className="font-bold flex items-center justify-center  text-4xl ]" >Data fetching Assignment-7</h1>
 </div>
 
 <div className="flex flex-col items-center justify-center  text-black text-4xl ]   gap-4 ">

 <h2 className="text-3xl font-bold " >Client-Side Data fetching</h2>
 <p className="text-base ">Client-side data fetching retrieves data in the browser after a page loads, enabling dynamic updates without reloading.</p>

  <h2 className="text-3xl font-bold ">Server-Side Data fetching</h2>
  <p className="text-base " >Server-side data fetching retrieves data on the server before sending a fully rendered page to the browser.</p>
  </div>
  <div className="flex items-center justify-center gap-6 ">
    <Link href={"/Client-Side"}><Button  >Client Side Data</Button></Link>

    <Link href={"/Server-Side"}><Button  >Server Side Data</Button></Link>
 
  
    </div>



      
     
     
   
    </div>
  );
}