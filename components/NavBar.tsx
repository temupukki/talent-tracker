'use client'

const navbar_items:string[]=["Home","About","Contact us","Talents"];
export default function NavBar(){
    return(
        <div>
            <nav className="flex  justify-center items-center gap-28  bg-bl-200 text-purple-900 mr-10 z-10 sticky p-8">
                
                {navbar_items.map((items,index)=>{
                const path=`/${items.toLowerCase}`;
                   return <li className="list-none" key={index}><a href={path}>{items}</a></li>
                })}

            </nav>
        </div>
    )
}