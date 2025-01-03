"use client"
import { base_url } from "@/utils/constants";
import axios from "axios";
import { useState } from "react"
import Swal from "sweetalert2";


const AddCategoryForm = () => {
    const [name, setName] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await axios.post(`${base_url}/categorys`, { name: name.trim() }).then((res) => {
            setName("")
            Swal.fire({
                title: "Success?",
                text: "Category Posted Successfully",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Refresh"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });
        }).catch(err => {
            Swal.fire({
                icon: "error",
                title: "Filed To Add Category",
                text: err.message,
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required

                    className="bg-slate-200 rounded-md p-2"
                />

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddCategoryForm