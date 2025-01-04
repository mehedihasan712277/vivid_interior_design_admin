import { Briefcase, FileText, Folder, MessageCircle } from "lucide-react"

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-8 max-w-[1000px]">
                <div className="bg-[#4e33b8] flex justify-center items-center gap-2 rounded-md py-4 shadow-md">
                    <div className="text bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <Briefcase size={30} color='#ffffff' />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-[#e6e6e6]">Service</p>
                        <p className="text-[#e6e6e6] text-xl font-bold">12</p>
                    </div>
                </div>

                <div className="bg-[#f97316] flex justify-center items-center gap-2 rounded-md py-4 shadow-md">
                    <div className="text bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <Folder size={30} color='#ffffff' />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-[#e6e6e6]">Portfolio</p>
                        <p className="text-[#e6e6e6] text-xl font-bold">6</p>
                    </div>
                </div>

                <div className="bg-[#22c55d] flex justify-center items-center gap-2 rounded-md py-4 shadow-md">
                    <div className="text bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <FileText size={30} color='#ffffff' />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-[#e6e6e6]">Blog</p>
                        <p className="text-[#e6e6e6] text-xl font-bold">13</p>
                    </div>
                </div>

                <div className="bg-[#06b6d4] flex justify-center items-center gap-2 rounded-md py-4 shadow-md">
                    <div className="text bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <MessageCircle size={30} color='#ffffff' />
                    </div>
                    <div>
                        <p className="font-semibold text-sm text-[#e6e6e6]">Consultancy</p>
                        <p className="text-[#e6e6e6] text-xl font-bold">13</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero