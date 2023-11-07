export const Page3=()=>{
    return(
       < div className="step3">  

        <span>step 3/3</span><br></br>
        <h3>Skills</h3>
        Technical Skills:<br></br>
         <input type="text" id="technicalSkills" placeholder="Enter your professional" required/><br></br>
        Professional Goal: <br></br>
        <input type="text" id="professionalGoal" placeholder="Enter your professional goal" required/><br></br>
        Do you have something to add? <br></br>
        <input type="text" id="additionalInfo" placeholder="  optional" /><br></br>

        <input type="button" value="Save" />
    </div>
    )
}