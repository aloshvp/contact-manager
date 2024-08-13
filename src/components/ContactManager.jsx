import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const ContactManager = () => {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]+$/; // Allows alphabets and spaces
        return nameRegex.test(name);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format validation
        return emailRegex.test(email);
    };

    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        }
    };

    const addContact = () => {
        if (!name || !validateName(name)) {
            alert('Please enter a valid name (alphabets only).');
            return;
        }

        if (!email || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setContacts([...contacts, { name, email }]);
        setName('');
        setEmail('');
    };

    const deleteContact = (index) => {
        setContacts(contacts.filter((_, i) => i !== index));
    };

    return (
        <div className="formWrapper">
            <h1>Contact Manager</h1>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="addContactForm">
                            <form>
                                <h2>Add Contact</h2>
                                <div className="mb-3">
                                    <label htmlFor="nameInput" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nameInput"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailInput" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={handleEmailBlur} // Email validation on blur
                                    />
                                </div>
                                <button type="button" className="btn btn-outline-primary" onClick={addContact}>Add</button>
                            </form >
                            <div className="contactList">
                                <ul>
                                    {contacts.map((contact, index) => (
                                        <li key={index}>
                                            <b>{contact.name}</b>
                                            <p>{contact.email}</p>
                                            <span
                                                className="contactDeleteBtn"
                                                onClick={() => deleteContact(index)}>
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};


export default ContactManager;
