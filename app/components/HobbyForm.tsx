import { Hobby } from "@/public/type";
import { useState } from "react";
import {Plus} from "lucide-react"
type Props={
    hobbies:Hobby[];
    setHobbies:(hobbies:Hobby[])=>void
}

const HobbyForm: React.FC<Props>=({hobbies,setHobbies})=>{
    const [newHobby, setNewHobby] = useState<Hobby>({
    
       name:''
    });
      const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        fied: keyof Hobby
      ) => {
        setNewHobby({ ...newHobby, [fied]: e.target.value });
      };
      const handleAddHobby = () => {
        setHobbies([...hobbies, newHobby]);
        setNewHobby({
           name:''
        });
      };
    return(
        <div>
 <input
              type="text"
              placeholder="Loisir"
              value={newHobby.name}
              onChange={(e) => handleChange(e, "name")}
              className="input input-bordered w-full ml-4 mt-4"
            />
            <button className="btn btn-primary mt-4" onClick={handleAddHobby}>
          Ajouter
          <Plus className="w-4" />
        </button>
        </div>
    )
}
export default HobbyForm