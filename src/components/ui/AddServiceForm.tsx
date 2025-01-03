"use client";
import { base_url } from "@/utils/constants";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import RichTextEditor from "./RichTextEditor/RichTextEditor";

const AddServiceForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        subtitle: "",
        type: "",
        img: "",
        description: "",
    });

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
            .then((res) => {
                setFormData({
                    title: "",
                    subtitle: "",
                    type: "",
                    img: "",
                    description: "",
                });

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
        <div className=" p-4 bg-white rounded w-fit">
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-between w-[514px]">
                {/* Title Field */}
                <div className="w-[250px]">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                        className="w-full p-2 border rounded-md bg-slate-200"
                    />
                </div>

                {/* Subtitle Field */}
                <div className="w-[250px]">
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">
                        Subtitle
                    </label>
                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                        required
                        className="w-full p-2 border rounded-md bg-slate-200"
                    />
                </div>

                {/* Type Field */}
                <div className="w-[250px]">
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                        Type
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        required
                        className="w-full p-2 border rounded-md bg-slate-200"
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
                <div className="w-[250px]">
                    <label htmlFor="img" className="block text-sm font-medium text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="img"
                        name="img"
                        value={formData.img}
                        onChange={(e) => setFormData({ ...formData, img: e.target.value })}
                        required
                        className="w-full p-2 border rounded-md bg-slate-200"
                    />
                </div>

                {/* Description Field */}
                <div className="">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <RichTextEditor
                        content={formData.description}
                        onChange={(content: string) => setFormData({ ...formData, description: content })}
                    ></RichTextEditor>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-500 mt-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddServiceForm;
