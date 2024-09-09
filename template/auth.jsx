import React, { useState } from 'react';
import axios from 'axios';

function Auth() {
    // Sample list of countries with ISO codes
    const countries = [
        { name: "Afghanistan", code: "AF" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "Andorra", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia", code: "BO" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Brazil", code: "BR" },
        { name: "Brunei", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cabo Verde", code: "CV" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Central African Republic", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
        { name: "Colombia", code: "CO" },
        { name: "Comoros", code: "KM" },
        { name: "Congo (Congo-Brazzaville)", code: "CG" },
        { name: "Costa Rica", code: "CR" },
        { name: "Croatia", code: "HR" },
        { name: "Cuba", code: "CU" },
        { name: "Cyprus", code: "CY" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Democratic Republic of the Congo", code: "CD" },
        { name: "Denmark", code: "DK" },
        { name: "Djibouti", code: "DJ" },
        { name: "Dominica", code: "DM" },
        { name: "Dominican Republic", code: "DO" },
        { name: "Ecuador", code: "EC" },
        { name: "Egypt", code: "EG" },
        { name: "El Salvador", code: "SV" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" },
        { name: "Estonia", code: "EE" },
        { name: "Eswatini", code: "SZ" },
        { name: "Ethiopia", code: "ET" },
        { name: "Fiji", code: "FJ" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "Gabon", code: "GA" },
        { name: "Gambia", code: "GM" },
        { name: "Georgia", code: "GE" },
        { name: "Germany", code: "DE" },
        { name: "Ghana", code: "GH" },
        { name: "Greece", code: "GR" },
        { name: "Grenada", code: "GD" },
        { name: "Guatemala", code: "GT" },
        { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" },
        { name: "Guyana", code: "GY" },
        { name: "Haiti", code: "HT" },
        { name: "Honduras", code: "HN" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Ireland", code: "IE" },
        { name: "Israel", code: "IL" },
        { name: "Italy", code: "IT" },
        { name: "Ivory Coast", code: "CI" },
        { name: "Jamaica", code: "JM" },
        { name: "Japan", code: "JP" },
        { name: "Jordan", code: "JO" },
        { name: "Kazakhstan", code: "KZ" },
        { name: "Kenya", code: "KE" },
        { name: "Kiribati", code: "KI" },
        { name: "Kuwait", code: "KW" },
        { name: "Kyrgyzstan", code: "KG" },
        { name: "Laos", code: "LA" },
        { name: "Latvia", code: "LV" },
        { name: "Lebanon", code: "LB" },
        { name: "Lesotho", code: "LS" },
        { name: "Liberia", code: "LR" },
        { name: "Libya", code: "LY" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Madagascar", code: "MG" },
        { name: "Malawi", code: "MW" },
        { name: "Malaysia", code: "MY" },
        { name: "Maldives", code: "MV" },
        { name: "Mali", code: "ML" },
        { name: "Malta", code: "MT" },
        { name: "Marshall Islands", code: "MH" },
        { name: "Mauritania", code: "MR" },
        { name: "Mauritius", code: "MU" },
        { name: "Mexico", code: "MX" },
        { name: "Micronesia", code: "FM" },
        { name: "Moldova", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Mongolia", code: "MN" },
        { name: "Montenegro", code: "ME" },
        { name: "Morocco", code: "MA" },
        { name: "Mozambique", code: "MZ" },
        { name: "Myanmar (formerly Burma)", code: "MM" },
        { name: "Namibia", code: "NA" },
        { name: "Nauru", code: "NR" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands", code: "NL" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nicaragua", code: "NI" },
        { name: "Niger", code: "NE" },
        { name: "Nigeria", code: "NG" },
        { name: "North Korea", code: "KP" },
        { name: "North Macedonia", code: "MK" },
        { name: "Norway", code: "NO" },
        { name: "Oman", code: "OM" },
        { name: "Pakistan", code: "PK" },
        { name: "Palau", code: "PW" },
        { name: "Panama", code: "PA" },
        { name: "Papua New Guinea", code: "PG" },
        { name: "Paraguay", code: "PY" },
        { name: "Peru", code: "PE" },
        { name: "Philippines", code: "PH" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Qatar", code: "QA" },
        { name: "Romania", code: "RO" },
        { name: "Russia", code: "RU" },
        { name: "Rwanda", code: "RW" },
        { name: "Saint Kitts and Nevis", code: "KN" },
        { name: "Saint Lucia", code: "LC" },
        { name: "Saint Vincent and the Grenadines", code: "VC" },
        { name: "Samoa", code: "WS" },
        { name: "San Marino", code: "SM" },
        { name: "Sao Tome and Principe", code: "ST" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia", code: "RS" },
        { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" },
        { name: "Singapore", code: "SG" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Solomon Islands", code: "SB" },
        { name: "Somalia", code: "SO" },
        { name: "South Africa", code: "ZA" },
        { name: "South Korea", code: "KR" },
        { name: "South Sudan", code: "SS" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sudan", code: "SD" },
        { name: "Suriname", code: "SR" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Syria", code: "SY" },
        { name: "Taiwan", code: "TW" },
        { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania", code: "TZ" },
        { name: "Thailand", code: "TH" },
        { name: "Timor-Leste", code: "TL" },
        { name: "Togo", code: "TG" },
        { name: "Tonga", code: "TO" },
        { name: "Trinidad and Tobago", code: "TT" },
        { name: "Tunisia", code: "TN" },
        { name: "Turkey", code: "TR" },
        { name: "Turkmenistan", code: "TM" },
        { name: "Tuvalu", code: "TV" },
        { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates", code: "AE" },
        { name: "United Kingdom", code: "GB" },
        { name: "United States", code: "US" },
        { name: "Uruguay", code: "UY" },
        { name: "Uzbekistan", code: "UZ" },
        { name: "Vanuatu", code: "VU" },
        { name: "Vatican City", code: "VA" },
        { name: "Venezuela", code: "VE" },
        { name: "Vietnam", code: "VN" },
        { name: "Yemen", code: "YE" },
        { name: "Zambia", code: "ZM" },
        { name: "Zimbabwe", code: "ZW" }
    ];


    const [selectedCountry, setSelectedCountry] = useState('IN');
    const [activeTab, setActiveTab] = useState('login');
    const [profileCreationVisible, setProfileCreationVisible] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        location: '',
        country_code: 'IN',
        body_type: 'underweight',
        gender: 'male',
    });

    const handleCountryChange = (e) => {
        setFormData({ ...formData, country_code: e.target.value });
    };

    const handleTabSwitch = (tab) => {
        setActiveTab(tab);
        setProfileCreationVisible(false); // Reset profile creation visibility
    };

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if (validateForm('signupForm')) {
            try {
                await axios.post('http://10.11.14.101:8000/authenticate/register', formData,

                );
                setProfileCreationVisible(true); // Set this to true to show profile creation form
                // headers: {
                //     'Content-Type': 'application/json',
                //     // Add other headers if necessary
                // }
            } catch (error) {
                console.error('Error registering user', error);
                console.log(error)
                console.log(formData);
            }
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        if (validateForm('loginForm')) {
            // Handle login logic here
            try {
                const data = {
                    grant_type: "password",
                    username: "a",
                    password: "123456",

                };

                // Use URLSearchParams to format data for x-www-form-urlencoded
                const formData = new URLSearchParams(data).toString();

                axios.post("http://10.11.14.101:8000/authenticate/token", formData, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                });
            } catch (error) {
                console.error('Error during login:', error);
                // Handle error (e.g., display a message to the user)
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => password.length >= 6;

    const validateForm = (formId) => {
        const form = document.getElementById(formId);
        const email = form.querySelector('[name="login-email"]') || form.querySelector('[name="signup-email"]');
        const password = form.querySelector('[name="login-password"]') || form.querySelector('[name="signup-password"]');
        const confirmPassword = form.querySelector('[name="signup-confirm-password"]');
        const firstName = form.querySelector('[name="signup-firstname"]');
        const lastName = form.querySelector('[name="signup-lastname"]');

        let isValid = true;

        // Clear previous errors
        form.querySelectorAll('.error-message').forEach((msg) => (msg.textContent = ''));
        form.querySelectorAll('input').forEach((input) => input.classList.remove('error'));

        // Validate email
        if (email && !validateEmail(email.value)) {
            isValid = false;
            email.classList.add('error');
            document.getElementById(email.id + '-error').textContent = 'Invalid email address';
        }

        // Validate password
        if (password && !validatePassword(password.value)) {
            isValid = false;
            password.classList.add('error');
            document.getElementById(password.id + '-error').textContent = 'Password must be at least 6 characters long';
        }

        // Confirm password
        if (confirmPassword && confirmPassword.value !== password.value) {
            isValid = false;
            confirmPassword.classList.add('error');
            document.getElementById(confirmPassword.id + '-error').textContent = 'Passwords do not match';
        }

        // Validate required fields
        [firstName, lastName].forEach((field) => {
            if (field && field.value.trim() === '') {
                isValid = false;
                field.classList.add('error');
                document.getElementById(field.id + '-error').textContent = 'This field is required';
            }
        });

        return isValid;
    };

    return (
        <div className="container">
            <div className="tab">
                <div
                    id="login-tab"
                    className={activeTab === 'login' ? 'active' : ''}
                    onClick={() => handleTabSwitch('login')}
                >
                    Login
                </div>
                <div
                    id="signup-tab"
                    className={activeTab === 'signup' ? 'active' : ''}
                    onClick={() => handleTabSwitch('signup')}
                >
                    Sign Up
                </div>
            </div>

            {/* Login Form */}
            {activeTab === 'login' && (
                <div id="login-form" className="form-container fade-in">
                    <form id="loginForm" onSubmit={handleLoginSubmit}>
                        <div className="form-group">
                            <label htmlFor="login-email">Email</label>
                            <input
                                type="email"
                                id="login-email"
                                name="login-email"
                                required
                                value={formData.login - email}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="login-email-error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="login-password">Password</label>
                            <input
                                type="password"
                                id="login-password"
                                name="login-password"
                                required
                                value={formData.login - password}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="login-password-error"></div>
                        </div>
                        <button className="button share" type="submit">
                            <span className="button-content">Login</span>
                        </button>
                    </form>
                </div>
            )}

            {/* Signup Form */}
            {activeTab === 'signup' && !profileCreationVisible && (
                <div id="signup-form" className="form-container fade-in">
                    <form id="signupForm" onSubmit={handleSignupSubmit}>
                        <div className="form-group">
                            <label htmlFor="signup-username">User Name</label>
                            <input
                                type="text"
                                id="signup-username"
                                name="username"
                                required
                                value={formData.username}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="signup-username-error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-firstname">First Name</label>
                            <input
                                type="text"
                                id="signup-firstname"
                                name="first_name"
                                required
                                value={formData.first_name}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="signup-firstname-error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-lastname">Last Name</label>
                            <input
                                type="text"
                                id="signup-lastname"
                                name="last_name"
                                required
                                value={formData.last_name}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="signup-lastname-error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-email">Email</label>
                            <input
                                type="email"
                                id="signup-email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="signup-email-error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-password">Password</label>
                            <input
                                type="password"
                                id="signup-password"
                                name="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className="error-message" id="signup-password-error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="signup-confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="signup-confirm-password"
                                name="confirm_password"
                                required
                            />
                            <div className="error-message" id="signup-confirm-password-error"></div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <select
                                id="country"
                                name="country_code"
                                value={formData.country_code}
                                onChange={handleCountryChange}
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body-type">Body Type</label>
                            <select
                                id="body-type"
                                name="body_type"
                                value={formData.body_type}
                                onChange={handleChange}
                            >
                                <option value="underweight">Underweight</option>
                                <option value="normal">Normal</option>
                                <option value="overweight">Overweight</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <button className="button share" type="submit">
                            <span className="button-content">Sign Up</span>
                        </button>
                    </form>
                </div>
            )}
            {/* console.log(profileCreationVisible); */}
            {/* Profile Creation */}
            {profileCreationVisible && (

                <div id="profile-creation-form" className="form-container fade-in">
                    <form id="profileCreationForm" onSubmit={handleSignupSubmit}>
                        {/* Form fields for profile creation */}

                        <button className="button share" type="submit">
                            <span className="button-content">Create Profile</span>
                        </button>
                    </form>
                </div>
            )
            }
        </div>
    );
}

export default Auth;





