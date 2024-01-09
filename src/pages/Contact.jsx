import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

function Contact() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const [users, setUser] = useState(
        {
            Name: "",
            Email: "",
            Subject: "",
            Message: ""
        }
    )
    let name, value
    const data = (e) => {
        name = e.target.name
        value = e.target.value
        setUser({ ...users, [name]: value })
    }
    const senddata = async (e) => {
        e.preventDefault()
        const { Name, Email, Subject, Message } = users
        const options =
        {
            method: "POST",
            headers: {
                "Content-type": "aplication/json"
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch("https://e-commerce-c24fd-default-rtdb.firebaseio.com/Message.json", options)
        if (res) {
            alert("Your Message sent")
        } else {
            alert("An error occured")
        }
    }
    return (
        <>
            <div className="contact_container">
                <div className="container">
                    <div className="contant">
                        <h2># Contact us</h2>
                        <div className="form">
                            <form method='POST'>
                                <input name='Name' type="text" value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data} />
                                <input name='E-mail' type="email" value={users.Email} placeholder='Enter Your E-mail' required autoComplete='off' onChange={data} />
                                <input name='Subject' type="text" value={users.Subject} placeholder='Enter Your Subject' required autoComplete='off' onChange={data} />
                                <textarea name="Message" value={users.Message} placeholder='Your Message' required autoComplete='off' onChange={data}></textarea>
                                {
                                    isAuthenticated ? <button type='submit' onClick={senddata}>Send</button>
                                        : <button type='submit' onClick={() => loginWithRedirect()}>Login to Send</button>
                                }

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact