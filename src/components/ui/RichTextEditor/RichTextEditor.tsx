"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import ToolBar from "./ToolBar";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ImageResize from "tiptap-extension-resize-image";

interface RichTextEditorProps {
    content: string; // Initial HTML content for the editor
    onChange: (content: string) => void; // Callback to handle content changes
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure(),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Heading.configure({
                levels: [1, 2, 3],
            }),
            OrderedList.configure({
                HTMLAttributes: {
                    class: "list-decimal ml-6",
                },
            }),
            BulletList.configure({
                HTMLAttributes: {
                    class: "list-disc ml-6",
                },
            }),
            Highlight,
            Image,
            ImageResize,
        ],
        content: content,
        editorProps: {
            attributes: {
                class: "min-h-[156px] min-w-[595px] rounded-md bg-[#182232] py-2 px-3 text-white",
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    return (
        <div>
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
