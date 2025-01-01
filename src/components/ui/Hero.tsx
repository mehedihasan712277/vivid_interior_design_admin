import { Briefcase, FileText, Folder, MessageCircle } from "lucide-react"

const Hero = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-8 max-w-[1000px]">
                <div className="flex justify-center items-center gap-2 bg-white rounded-md py-4 shadow-md">
                    <div className="bg-[#ef1c63] bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <Briefcase size={30} color='#ef1c63' />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-[#293543]">Service</p>
                        <p className="text-gray-500 font-bold">12</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 bg-white rounded-md py-4 shadow-md">
                    <div className="bg-[#00ffde] bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <Folder size={30} color='#00ffde' />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-[#293543]">Portfolio</p>
                        <p className="text-gray-500 font-bold">6</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 bg-white rounded-md py-4 shadow-md">
                    <div className="bg-[#00acee] bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <FileText size={30} color='#00acee' />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-[#293543]">Blog</p>
                        <p className="text-gray-500 font-bold">13</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 bg-white rounded-md py-4 shadow-md">
                    <div className="bg-[#ff00ae] bg-opacity-20 flex justify-center items-center h-12 w-12 rounded-full">
                        <MessageCircle size={30} color='#ff00ae' />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-[#293543]">Consultancy</p>
                        <p className="text-gray-500 font-bold">13</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero