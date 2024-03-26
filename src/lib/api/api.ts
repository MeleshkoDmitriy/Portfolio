import { TFormData } from "../types/types";

export const API_URL:string = 'https://2973b8a6249c7b11.mokky.dev';

async function createFeedback(data: TFormData) {  
    const { 
        name,
        contact, 
        text,
        date
    } = data;
  
    await fetch(`${API_URL}/feedbacks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        name, 
        contact, 
        text,
        date
      })
    });
}    
  
export { createFeedback };

