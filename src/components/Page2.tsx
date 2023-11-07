export const Page2=()=>{
    return(
        <div className="step2">
        <span>Step 2/3</span><br></br>
        <h3>Academics</h3>
        Select your Bac:
        <div className="details">
        <select id="bac" required>
            <option value="PC">PC</option>
            <option value="SM">SM</option>
            <option value="SVT">SVT</option>
            <option value="ECO">ECO</option>
            <option value="PRO">PRO</option>
            <option value="OTHER">OTHER</option>
        </select><br></br>
        Select Languages:<br></br>
        <input type="checkbox" name="languages" value="FRENCH"/> French
        <input type="checkbox" name="languages" value="ENGLISH"/> English<br></br>
        <input type="checkbox" name="languages" value="GERMAN"/> German
        <input type="checkbox" name="languages" value="ARABIC"/> Arabic<br></br>
        <input type="checkbox" name="languages" value="SPANISH"/> Spanish
        <input type="checkbox" name="languages" value="CHINESE"/> Chinese<br></br>
        <input type="checkbox" name="languages" value="OTHER"/> Other<br></br>
        Select your Level:<br></br>
        <select id="level" required>
            <option value="bac">Bac</option>
            <option value="bac1">Bac+1</option>
            <option value="bac2">Bac+2</option>
            <option value="bac3">Bac+3</option>
            <option value="bac5">Bac+5</option>
            <option value="bac8">Bac+8</option>
        </select><br></br>
        </div>
    </div>
    )
}