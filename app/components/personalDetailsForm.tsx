import { PersonalDetails } from "@/type";

type props = {
  personalDetails: PersonalDetails;
  setPersonalDetails: (pd: PersonalDetails) => void;
  setFile: (file: File | null) => void;
};
const PersonalDetailsForm: React.FC<props> = ({
  personalDetails,
  setPersonalDetails,
  setFile,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fied: keyof PersonalDetails
  ) => {
    setPersonalDetails({ ...personalDetails, [fied]: e.target.value });
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      // setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="flex flex-col gap-4 ">
      <input
        type="text"
        placeholder="Nom complet"
        value={personalDetails.fullName}
        onChange={(e) => handleChange(e, "fullName")}
        className="input input-bordered w-full ml-4"
      />

      <div className="flex">
        <input
          type="email"
          placeholder="Email"
          value={personalDetails.email}
          onChange={(e) => handleChange(e, "email")}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Numero de telephone"
          value={personalDetails.phone}
          onChange={(e) => handleChange(e, "phone")}
          className="input input-bordered w-full ml-4"
        />
      </div>
      <input
        type="email"
        placeholder="Adresse"
        value={personalDetails.address}
        onChange={(e) => handleChange(e, "address")}
        className="input input-bordered w-full"
      />
      <input
        type="file"
        accept="image/*"
        placeholder="Adresse"
        
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full file-input-primary"
      />
      <input
        type="text"
        placeholder="Poste recherche"
        value={personalDetails.postSeeking}
        onChange={(e) => handleChange(e, "postSeeking")}
        className="input input-bordered w-full"
      />

      <textarea
        placeholder="Description de la personne"
        value={personalDetails.description}
        onChange={(e) => handleChange(e, "description")}
        className="input input-bordered w-full"
      ></textarea>
      
      
    </div>
  );
};
export default PersonalDetailsForm;
