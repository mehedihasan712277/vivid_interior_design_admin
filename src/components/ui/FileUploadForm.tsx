"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios, { AxiosResponse } from "axios";
import CopyLink from "./CopyLink";
import { base_url } from "@/utils/constants";

const FileUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null); // Single file
    const [uploadMessage, setUploadMessage] = useState<string>("");
    const [link, setLink] = useState<string>("");

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const file = event.target.files?.[0] || null; // Only take the first file
        if (file) {
            // Check if the file type is PNG, JPG, or JPEG
            const validFormats = ["image/png", "image/jpeg", "image/jpg"];
            if (!validFormats.includes(file.type)) {
                setUploadMessage("Invalid file format! Please upload a PNG, JPG, or JPEG file.");
                setSelectedFile(null); // Reset file input
                return;
            }
            setSelectedFile(file);
        }
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if (!selectedFile) {
            setUploadMessage("No file selected!");
            return;
        }

        const formData = new FormData();
        formData.append("file", selectedFile); // Append single file

        try {
            const response: AxiosResponse = await axios.post(
                `${base_url}/file`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 201) {
                setUploadMessage("File uploaded successfully!");
                setLink(`${response.data}`);
            } else {
                setUploadMessage(`Error: ${response.status}`);
            }
        } catch (error: unknown) {
            const errorMessage =
                axios.isAxiosError(error) && error.response?.data
                    ? `Error: ${error.response.data}`
                    : error instanceof Error
                        ? error.message
                        : "Unknown error";
            setUploadMessage(errorMessage);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    style={{ marginBottom: "10px" }}
                />
                <button type="submit">Submit</button>
            </form>
            {uploadMessage && <p>{uploadMessage}</p>}
            <CopyLink url={link}></CopyLink>
        </div>
    );
};

export default FileUploadForm;
