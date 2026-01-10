import { Experience } from "@/public/type";
import { useState } from "react";
import {Plus} from "lucide-react"
type Props = {
  experience: Experience[];
  setExperiences: (experience: Experience[]) => void;
};


const ExperiencesForm: React.FC<Props> = ({ experience,setExperiences}) => {
  const [newExperience, setNewExperience] = useState<Experience>({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof Experience
  ) => {
    setNewExperience({ ...newExperience, [fied]: e.target.value });
  };
  const handleAddExperience=()=>{
  setExperiences([...experience,newExperience])
     setNewExperience({
    jobTitle: "",
    companyName: "",
    startDate: "",
    endDate: "",
    description: "",
    })
}
  return (
   <div>
     <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Nom complet"
          value={newExperience.jobTitle}
          onChange={(e) => handleChange(e, "jobTitle")}
          className="input input-bordered w-full ml-4"
        />
        <input
          type="text"
          placeholder="Nom de l'entreprise"
          value={newExperience.companyName}
          onChange={(e) => handleChange(e, "companyName")}
          className="input input-bordered w-full ml-4"
        />
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Date de debut"
          value={newExperience.startDate}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          onChange={(e) => handleChange(e, "startDate")}
          className="input input-bordered w-full "
        />
        <input
          type="text"
          placeholder="Date de fin"
          value={newExperience.endDate}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => {
            if (!e.target.value) e.target.type = "text";
          }}
          onChange={(e) => handleChange(e, "endDate")}
          className="input input-bordered w-full ml-4"
        />
      </div>
      <textarea
        placeholder="Description de la personne"
        value={newExperience.description}
        onChange={(e) => handleChange(e, "description")}
        className="input input-bordered w-full"
      ></textarea>
    </div>
    <button className="btn btn-primary mt-4"
    onClick={handleAddExperience}
    >
     Ajouter 
     <Plus className="w-4"/>
    </button>
   </div>
  );
};
export default ExperiencesForm;
