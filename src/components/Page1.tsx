export const Page1=()=>{
    return(
    <div className="step1" >
    <span>Step 1/3</span> <br></br>
    <h3> professional information</h3>
        First Name: <br></br> <input type="text" id="firstName" required placeholder="enter your first name"/><br></br>
        Last Name:<br></br> <input type="text" id="lastName" required placeholder="enter your last name"/><br></br>
        
        Phone Number: <br></br><input type="tel" id="phoneNumber" required placeholder="enter your phone number" /><br></br>
        Email:<br></br> <input type="email" id="email" required placeholder="enter your email"/><br></br>
        Age: <br></br><input type="number" id="age" required min="18" /><br></br>
        Gender
        <input type="radio" name="gender" value="male" required/> Male
        <input type="radio" name="gender" value="female" required/> Female
    </div>
    )
}