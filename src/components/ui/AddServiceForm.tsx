"use client";
import { base_url } from "@/utils/constants";
import axios from "axios";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import RichTextEditor from "./RichTextEditor/RichTextEditor";
import { AuthContext } from "../shared/AuthProvider";

const AddServiceForm = () => {
    const authContext = useContext(AuthContext)


    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        type: "",
        img: "",
        description: "",
    });



    if (!authContext) {
        return null
    }
    const { changeServiceKey } = authContext;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedData = {
            title: formData.title.trim(),
            subtitle: formData.subtitle.trim(),
            type: formData.type,
            img: formData.img.trim(),
            description: formData.description,
        };

        await axios
            .post(`${base_url}/service`, trimmedData)
            .then(() => {
                setFormData({
                    title: "",
                    subtitle: "",
                    type: "",
                    img: "",
                    description: "",
                });
                changeServiceKey()
                Swal.fire({
                    title: "Success!",
                    text: "Service Posted Successfully",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Add Another",
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Done!",
                            text: "You can now add another service.",
                            icon: "success",
                        });
                    }
                });
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Failed to Add Service",
                    text: err.message,
                });
            });
    };

    return (
        <div className="rounded w-fit">
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-between gap-4">
                <div className="grid grid-cols-2 gap-4 w-full">
                    {/* Title Field */}
                    <div className="">
                        <input
                            type="text"
                            placeholder="title"
                            name="title"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            required
                            className="w-full p-2 bg-[#1f2937] shadow-none text-white rounded-sm "
                        />
                    </div>

                    {/* Subtitle Field */}
                    <div className="">
                        <input
                            type="text"
                            placeholder="subtitle"
                            name="subtitle"
                            value={formData.subtitle}
                            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                            required
                            className="w-full p-2 bg-[#1f2937] shadow-none text-white rounded-sm "
                        />
                    </div>

                    {/* Type Field */}
                    <div className="">
                        <select
                            name="type"
                            value={formData.type}
                            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                            required
                            className="w-full p-2 bg-[#1f2937] shadow-none text-white rounded-sm "
                        >
                            <option value="">Select Type</option>
                            <option value="Hospital">Hospital</option>
                            <option value="Residence">Residence</option>
                            <option value="Showroom">Showroom</option>
                            <option value="Office">Office</option>
                            <option value="Restaurant">Restaurant</option>
                        </select>
                    </div>

                    {/* Image URL Field */}
                    <div className="">
                        <input
                            type="text"
                            placeholder="img"
                            name="img"
                            value={formData.img}
                            onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                            required
                            className="w-full p-2 bg-[#1f2937] shadow-none text-white rounded-sm "
                        />
                    </div>
                </div>

                {/* Description Field */}
                <div className="">
                    <RichTextEditor
                        content={formData.description}
                        onChange={(content: string) => setFormData({ ...formData, description: content })}
                    ></RichTextEditor>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-950 mt-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddServiceForm;
