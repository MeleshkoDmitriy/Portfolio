export const API_URL:string = 'https://2973b8a6249c7b11.mokky.dev';

async function createFeedback(data) {  
    console.log(data)
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