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
        <div className="flex gap-4">
            <div className="shadow-md">
                <div className={value ? "block" : "hidden"}>
                    <PopUp></PopUp>
                </div>

                <div className="bg-white rounded-md p-2 mb-2 w-full flex gap-3 items-center shadow-md">
                    <span>Upload image to get url </span>
                    <button className="px-4 py-2 bg-blue-950 text-white font-bold rounded-md text-sm" onClick={() => changeValue()}>Upload</button>
                </div>
                <AddServiceForm></AddServiceForm>
            </div>
            <div className="content h-[500px] overflow-y-auto">
                <GetService></GetService>
            </div>
        </div>
    )
}

export default ServicePage