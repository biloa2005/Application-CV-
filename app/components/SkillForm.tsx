import { Skill } from "@/public/type";
import { useState } from "react";
import {Plus} from "lucide-react"
type Props={
    skills:Skill[];
    setSkills:(skills:Skill[])=>void
}

const SkillForm:React.FC<Props>=({skills,setSkills})=>{
const [newSkill, setNewSkill] = useState<Skill>({

   name:''
});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof Skill
  ) => {
    setNewSkill({ ...newSkill, [fied]: e.target.value });
  };
  const handleAddSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill({
       name:''
    });
  };
    return(
        <div>
           <div className="mt-4">
            <input
              type="text"
              placeholder="Competence"
              value={newSkill.name}
              onChange={(e) => handleChange(e, "name")}
              className="input input-bordered w-full ml-4"
            />
           </div>
             <button className="btn btn-primary mt-4" onClick={handleAddSkill}>
          Ajouter
          <Plus className="w-4" />
        </button>
        </div>
    )
}
export default SkillForm