import axios from "axios";

function DeleteMcuCharacter() {

    async function handleSubmit(e) {
        e.preventDefault();

        let name = e.target.newName.value;

        try {
            await axios.delete("http://localhost:3001/api/deleteMcuCharacter/"+name);

            alert("Character deleted successfully.");
        }
        catch(error) {
            console.log("error:" + error);
            alert("Something went wron with delete:" + error);
        }
    }
    
    
    return (

        <form onSubmit={handleSubmit}>
                <label>Lets delete an MCU Hero:</label>
                <br />
                Name:
                <input type="text" name="newName" />
                <button>Submit</button>

        </form>

      );
}

export default DeleteMcuCharacter;