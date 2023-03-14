import axios from 'axios';

function NewMCUCharacter () {


    async function handleSubmit(e) {
        e.preventDefault();


        let name = e.target.newName.value;
        let debut = e.target.debut.value;
        let debutYear = e.target.debutYear.value;

        console.log("name:"+name+", debut: " + debut + ", debutYear: " + debutYear);

        try {
                await axios.post(
                    "http://localhost:3001/api/createMcuCharacter",
                    {
                        name,
                        debut,
                        debutYear
                    }
                );


                alert("The character has been insterted successfully.");


        }
        catch(e) {
                console.log("error:" + e);
                alert("Something went wrong, character not insterted!");
        }


    }



    return ( 
        <form onSubmit={handleSubmit}>
            <label> Lets add a new MCU Hero. </label>
            Name:
            <input type="text" name="newName" />
            <br/>
            Debut:
            <input type="text" name="debut" />
            <br/>
            Debut Year:
            <input type="number" name="debutYear" />



            <button>Submit</button>
        </form>



     );
}

export default NewMCUCharacter ;