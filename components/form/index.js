import Link from "next/link"
import { useState, useEffect } from "react"
import styles from './Form.module.css'

export default function Form({
    navigate = "/."
}) {

    const [firstName, setFirstName] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [firstNamePass, setFirstNamePass] = useState(0);

    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [lastNamePass, setLastNamePass] = useState(0);

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [emailPass, setEmailPass] = useState(0);


    const [show, setShow] = useState(false);


    function isValidFirstName(firstName) {
        return /^\p{Lu}/u.test(firstName);
    }

    function isValidLastName(lastName) {
        return /^\p{Lu}/u.test(lastName);
    }

    function isValidEmail(email) {
        return /.+\@.+\..+/.test(email);
    }

    const handleChangeFirstName = (event) => {
        if (!isValidFirstName(event.target.value)) {
            setErrorFirstName('First name error. First letter must be capital. Must use alphabets only');

            if (firstNamePass == 0) {
                setFirstNamePass(firstNamePass + 1);
            }
        } else {
            setErrorFirstName('');
            if (firstNamePass == 1) {
                setFirstNamePass(firstNamePass - 1);
                setShow(true);
            }
        }
        setFirstName(event.target.value);
        console.log(firstNamePass);

    }


    const handleChangeLastName = (event) => {
        if (!isValidLastName(event.target.value)) {
            setErrorLastName('Last name error. First letter must be capital. Must use alphabets only');

            if (lastNamePass == 0) {
                setFirstNamePass(lastNamePass + 1);
            }
        } else {
            setErrorLastName('');
            if (lastNamePass == 1) {
                setLastNamePass(lastNamePass - 1);
                setShow(true);
            }
        }
        setLastName(event.target.value);
        console.log(lastNamePass);

    }


    const handleChangeEmail = (event) => {
        if (!isValidEmail(event.target.value)) {
            setErrorEmail('Email is invalid');

            if (emailPass == 0) {
                setEmailPass(emailPass + 1);
            }
        } else {
            setErrorEmail('');
            if (emailPass == 1) {
                setEmailPass(emailPass - 1);
                setShow(true);
            }
        }
        setEmail(event.target.value);
        console.log(emailPass);

    }

    return (
        <>
            <div className={styles.center}>
                <form className={styles.boxCenter}>
                    <fieldset className={styles.box}>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <label className={styles.labelfn}
                                            for="firstName">First name</label>
                                    </th>
                                    <th>
                                        <label className={styles.labelln}
                                            for="lastName">Last name</label>
                                    </th>
                                </tr>
                                <tr>
                                    <td>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            value={firstName}
                                            placeholder="First Name here"
                                            size={30}
                                            onChange={handleChangeFirstName}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            className={styles.leftIndent}
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            value={lastName}
                                            placeholder="Last Name here"
                                            size={30}
                                            onChange={handleChangeLastName}
                                        />
                                    </td>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        <label className={styles.labelm}
                                            for="email">Email</label>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={email}
                                            placeholder="Email here"
                                            size={70}
                                            onChange={handleChangeEmail}
                                        />
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>

                <div className={styles.buttonEnd}>
                    {
                        show && (errorFirstName.length == 0) && (errorLastName.length == 0) && (errorEmail.length == 0) ?
                            <Link href={navigate}>
                                <button type="button"
                                    className={styles.submitButton}>
                                    Submit
                                </button>
                            </Link>
                            : <></>
                    }
                </div>

                <div className={styles.alert}>
                    {
                        errorFirstName && <p style={{ color: '#B22222', fontWeight: 500 }}>{errorFirstName}</p>
                    }

                    {
                        errorLastName && <p style={{ color: '#B22222', fontWeight: 500 }}>{errorLastName}</p>
                    }

                    {
                        errorEmail && <p style={{ color: '#B22222', fontWeight: 500 }}>{errorEmail}</p>
                    }
                </div>
            </div>
        </>
    )
}
