'use client'
import {motion} from 'framer-motion'
const navbar_items:string[]=['Home','About','Contact'];
export default function NavBar(){
    return(
        <div>
             
            <nav className="flex  itmes-center justify-center gap-28 text-green-700 z-10 p-6 ">
                <div className="absolute top-6 left-6">
                    <motion.h1
                    whileHover={{scale:1.2}} 
                    className="font-bold text-2xl">CertiFlow</motion.h1>
                </div>
                  
                {navbar_items.map((items,index)=>{
                    {const path = `/${items.toLowerCase}`;
                        return <li className="list-none text-[19px]" key={index}><a href={path}>{items}</a></li>
                }})}

            </nav>
        </div>
    )
}