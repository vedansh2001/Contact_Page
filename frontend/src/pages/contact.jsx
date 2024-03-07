import { useState } from "react"
import InputBox from "../components/inputbox"
import SubHeading from "../components/subheading"



export const ContactForm = () => {



        const [data, setData] = useState({
                name: "",
                email: "",
                phone: "",
                message: ""
                });
        
                const {name, email, phone, message} = data;
        
                const handleChange = (e) => {
                setData({...data, [e.target.name]: e.target.value });
                };
        
                const handleSubmit = async (e) => {
                        e.preventDefault();
                      
                        // Waiting for the state update to complete before sending the request
                        await new Promise((resolve) => setTimeout(resolve, 0));
                      
                        try {
                          console.log("Form data before submission:", data);
                          const response = await fetch("https://v1.nocodeapi.com/vedansh/google_sheets/oeJbyHznfInjWSin?tabId=Sheet1", {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify([[name, email, phone, message]])
                          });
                          await response.json();
                          setData({...data, name:"", email:"", phone:"", message:""});
                        } catch(err){
                          console.log(err);
                        }
                        alert("Message Sent");
                      };
                

return <div className="w-100% h-screen bg-gray-200 flex justify-center ">
<div className="rounded border-slate-300 border-4 shadow-lg bg-gray-100 w-1/3 text-center h-2/3 mt-16 ">
        <h1 className="font-bold text-5xl mb-6 pt-4">Contact Us</h1>
        <div >
        <SubHeading label={"Name"} />
        <InputBox name="name" onChange={handleChange}
        placeholder={"Your name.."} />
        <br></br>
        <SubHeading label={"Email"} />
        <InputBox name="email" onChange={handleChange}
        placeholder={"Your email.."} />
        <br></br>
        <SubHeading label={"Phone"} />
        <InputBox name="phone" onChange={handleChange}
        placeholder={"Phone no."} />
        <br></br>
        <SubHeading label={"Message"} />
        <InputBox name="message" onChange={handleChange}
        placeholder={"Enter your message.."} />
        <br></br>
        
        <button onClick={handleSubmit}
        
         className="mt-5" id='button'><div className="bg-green-500 pl-3 pr-3 pt-2 pb-2 rounded font-semibold text-2xl hover:bg-green-600 duration-200" >Submit</div></button>
        </div>
</div>
</div>
}
