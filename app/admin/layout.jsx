import AdminSidebar from "@/components/AdminSidebar";
import Image from "next/image";
import eximg from "../../assets/cyborg.png";
export default function RootLayout({ children }) {
    return (
        <>
       <div className="flex">
        <AdminSidebar/>
        <div className="flex flex-col w-full">

        <div className="w-full border-b border-white navbar p-4 flex justify-between bg-black text-white ">
            <h1>Admin-panel</h1>
            <Image src={eximg} alt="Avatar" width={40} height={40} className="rounded-full" />

        </div>
        {children}
        </div>
       </div> 
        </>
    );
}