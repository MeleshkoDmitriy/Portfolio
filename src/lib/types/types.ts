import { StaticImageData } from "next/image";

export type TProject = {
    id: number;
    title: string;
    image: string | StaticImageData;
    description: string;
    stack: string[];
    features: string[];
    github: string;
    netlify: string;
}

export type TFormData = {
    name: string;
    contact: string;
    text: string;
    date: string;
}

export type TFormDataReceived = {
    id: number;
} & TFormData;
