import { Language } from "@/type";
import { useState } from "react";
import {Plus} from "lucide-react"
type Props = {
  languages: Language[];
  setLanguages: (languages: Language[]) => void;
};
const LanguageForm:React.FC<Props>=({languages,setLanguages})=>{

const [newLanguage, setNewLanguage] = useState<Language>({

    language:'',
    proficiency:''
});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fied: keyof Language
  ) => {
    setNewLanguage({ ...newLanguage, [fied]: e.target.value });
  };
  const handleAddLanguage = () => {
    setLanguages([...languages, newLanguage]);
    setNewLanguage({
       language:'',
    proficiency:''
    });
  };
    return(
    <div className="space-y-4 ">
 <input
              type="text"
              placeholder="Langue"
              value={newLanguage.language}
              onChange={(e) => handleChange(e, "language")}
              className="input input-bordered w-full ml-4"
            />
            <select value={newLanguage.proficiency}
             onChange={(e) => handleChange(e, "proficiency")}
             className="select select bordered w-full"
            >
                <option value="">Selectionner la maitrise</option>
                <option value="Debutant">Debutant</option>
                <option value="Intermediaire">Intermediaire</option>
                <option value="Avance">Avance</option>
            </select>
             <button className="btn btn-primary mt-4" onClick={handleAddLanguage}>
          Ajouter
          <Plus className="w-4" />
        </button>
    </div>
)
}
export default LanguageForm