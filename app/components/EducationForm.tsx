import { Education } from "@/type";
import { useState } from "react";
import {Plus} from "lucide-react"
type Props = {
  educations: Education[];
  setEducations: (educations: Education[]) => void;
};

const EducationForm: React.FC<Props> = ({ educations, setEducations }) => {
  const [newEducation, setNewEducation] = useState<Education>({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof Education
  ) => {
    setNewEducation({ ...newEducation, [fied]: e.target.value });
  };
  const handleAddEducation = () => {
    setEducations([...educations, newEducation]);
    setNewEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };
  return (
    <div>
      <div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Nom de l'ecole"
              value={newEducation.school}
              onChange={(e) => handleChange(e, "school")}
              className="input input-bordered w-full ml-4"
            />
            <input
              type="text"
              placeholder="Diplome"
              value={newEducation.degree}
              onChange={(e) => handleChange(e,"degree")}
              className="input input-bordered w-full ml-4"
            />
          </div>
          <div className="flex justify-between">
            <input
              type="text"
              placeholder="Date de debut"
              value={newEducation.startDate}
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
              value={newEducation.endDate}
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
            value={newEducation.description}
            onChange={(e) => handleChange(e, "description")}
            className="input input-bordered w-full"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleAddEducation}>
          Ajouter
          <Plus className="w-4" />
        </button>
      </div>
    </div>
  );
};
export default EducationForm;
