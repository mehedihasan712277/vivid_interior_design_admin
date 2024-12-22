"use client";

// import RichTextEditor from "@/components/ui/RichTextEditor/RichTextEditor";
import { useContext, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { Button } from "@/components/ui/button";
import PopUp from "@/components/ui/PopUp";
import { AuthContext } from "@/components/shared/AuthProvider";
import Swal from "sweetalert2";


// Dynamically import the RichTextEditor with SSR disabled
const RichTextEditor = dynamic(() => import("@/components/ui/RichTextEditor/RichTextEditor"), {
    ssr: false,
});

const PostPage = () => {
    const [title, setTitle] = useState<string>("");
    // const [img, setImg] = useState<string>("");
    const [description, setDescription] = useState<string>(""); // Use this for the rich text editor content
    const [file, setFile] = useState<File | null>(null);

    // context api------------------------------
    const authContext = useContext(AuthContext)
    if (!authContext) {
        // Handle the case where AuthContext is null
        throw new Error("AuthContext must be used within an AuthProvider");
    }
    const { value, changeValue } = authContext
    //------------------------------------------

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        // formData.append("img", img);
        formData.append("description", description);
        if (file) {
            formData.append("file", file);
        }

        // Example: Send the form data via POST request to the backend
        await axios.post('http://localhost:5000/service', formData)
            .then((res) => {
                console.log(res.data);

                if (res.data.acknowledged) {
                    Swal.fire({
                        title: "Sueccess",
                        text: "Service posted successfully",
                        icon: "success",
                        showConfirmButton: false,
                        showCloseButton: true,
                    });
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: "Failed",
                    text: err.message,
                    icon: "error",
                    showConfirmButton: false,
                    showCloseButton: true,
                });
            });

    };

    return (
        <div>
            <div className={value ? "block" : "hidden"}>
                <PopUp></PopUp>
            </div>

            <div>
                <span>Upload image to get url </span>
                <Button className="ml-4" onClick={() => changeValue()}>Upload</Button>
            </div>
            <form
                onSubmit={handleSubmit}
                className="bg-slate-500 flex flex-col justify-center gap-4 w-80 p-4 mx-auto"
            >
                {/* Title Input */}
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="p-2 border rounded"
                />

                {/* Image URL Input */}
                {/* <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                    className="p-2 border rounded"
                /> */}

                {/* File Upload Input */}
                <input
                    type="file"
                    name="file"
                    onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setFile(e.target.files[0]);
                        }
                    }}
                    required
                    className="p-2 border rounded"
                />

                {/* Rich Text Editor */}
                <div>
                    <label htmlFor="description" className="text-white">Description:</label>
                    <RichTextEditor
                        content={description}
                        onChange={(content: string) => setDescription(content)}
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PostPage;
