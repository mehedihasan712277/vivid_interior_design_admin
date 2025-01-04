"use client"
import { AuthContext } from "@/components/shared/AuthProvider";
import AddServiceForm from "@/components/ui/AddServiceForm"
import GetService from "@/components/ui/GetService";
import PopUp from "@/components/ui/PopUp"
import { useContext } from "react";


const ServicePage = () => {
    const authContext = useContext(AuthContext)
    if (!authContext) {
        // Handle the case where AuthContext is null
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { value, changeValue } = authContext


    return (
        <div className="flex w-full justify-between">
            <div className="w-[612px] h-[480px] overflow-y-auto pl-1 pr-2 custom-scrollbar">
                <div className={value ? "block" : "hidden"}>
                    <PopUp></PopUp>
                </div>

                <div className=" bg-[#182232] w-[595px] rounded-md p-2 mb-2 flex gap-3 items-center shadow-md">
                    <span className="text-gray-400">Upload image to get url </span>
                    <button className="px-4 py-2 bg-blue-950 text-white font-bold rounded-md text-sm" onClick={() => changeValue()}>Upload</button>
                </div>
                <div className="w-[595px]">
                    <AddServiceForm></AddServiceForm>
                </div>
            </div>

            <div className=" h-[480px] overflow-y-auto pr-4 rounded-md custom-scrollbar">
                <GetService></GetService>
            </div>
        </div>
    )
}

export default ServicePage