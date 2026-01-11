"use client";
import Image from "next/image";

//  rimport PersonalDetailsForm from "./components/personalDetailsForm"
import { Eye, RotateCw, Save} from "lucide-react";
import {
  PersonalDetails,
  Experience,
  Education,
  Language,
  Skill,
  Hobby,
} from "@/type";
import { useRef,useEffect, useState } from "react";
import PersonalDetailsForm from "./components/personalDetailsForm";
import {
  personalDetailsPreset,
  experiencesPreset,
  educationsPreset,
  languagesPreset,
  skillsPreset,
  hobbiesPreset,
} from "@/preset";
import CVPreview from "./components/CVPreview";
import ExperiencesForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
import LanguageForm from "./components/LanguageForm";
import SkillForm from "./components/SkillForm";
import HobbyForm from "./components/HobbyForm";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import confetti from "canvas-confetti"


export default function Home() {
  const [personalDetails, setPersonalDetails] = useState<PersonalDetails>(
    personalDetailsPreset
  );
  const [experiences, setExperiences] =
    useState<Experience[]>(experiencesPreset);
  const [educations, setEducations] = useState<Education[]>(educationsPreset);
  const [languages, setLanguages] = useState<Language[]>(languagesPreset);
  const [skills, setSkills] = useState<Skill[]>(skillsPreset);
  const [hobbies, setHobbies] = useState<Hobby[]>(hobbiesPreset);

  const [file, setFile] = useState<File | null>(null);
  useEffect(() => {
    const defaultImgUrl = "/profile.jpg";
    fetch(defaultImgUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const defaultFile = new File([blob], "profile.jpg", {
          type: blob.type,
        });
        setFile(defaultFile);
      });
  }, []);
  const [theme, setTheme] = useState<string | null>("light");
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  const [zoom, setZoom] = useState<number>(163);
  const handleResetPersonalDetails = () =>
    setPersonalDetails({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      photoUrl: "",
      postSeeking: "",
      description: "",
    });
  const handleResetExperiences = () => setExperiences([]);
  const handleResetEducations = () => setEducations([]);
  const handleResetLanguages = () => setLanguages([]);
  const handleResetSkills = () => setSkills([]);
  const handleResetSHobbies = () => setHobbies([]);
  const cvPreviewRef=useRef(null)
  const handledownloadPdf=async()=>{
const element=cvPreviewRef.current
if(element){
  try{
    const canvas =await html2canvas(element,{scale:3,
 useCORS:true,

    })
const imgData=canvas.toDataURL("image/png")
const pdf=new jsPDF({
  orientation:"portrait",
  unit:"mm",
  format:"A4"
})
const pdfWidth=pdf.internal.pageSize.getWidth();
const pdfHeight=(canvas.height*pdfWidth)/canvas.width

pdf.addImage(imgData,"PNG",0,0,pdfWidth,pdfHeight);
pdf.save('cv.pdf')
const modal= document.getElementById("my_modal_3") as HTMLDialogElement
          if(modal){
            modal.close()
          }  
          confetti({
            particleCount:100,
            spread:70,
            origin:{y:0.6},
            zIndex:99999
          })     
  }catch(error){
    console.error("Erreur lors de la generation du pdf:",error)
  }
}
  }

  return (
    <div>
      <div className="hidden lg:block">
        <section className="flex items-center h-screen">
          <div className="w-1/3 h-full p-10 bg-base-200 scrollable no-scrollbar">
            <div className="mb-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold italic">
                CV<span className="text-primary">Build</span>{" "}
              </h1>

              <button
                className="btn btn-primary"
                onClick={() =>
                  (
                    document.getElementById("my_modal_3") as HTMLDialogElement
                  ).showModal()
                }
              >
                previsualiser
                <Eye className="w-4"/>
              </button>
            </div>
            <div className="flex-col rounded-lg gap-6">
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline badge-sm">
                  Qui etes-vous ?
                </h1>
                <button
                  className="btn btn-primary"
                  onClick={handleResetPersonalDetails}
                >
                  <RotateCw className="w-4  " />
                </button>
              </div>

              <PersonalDetailsForm
                personalDetails={personalDetails}
                setPersonalDetails={setPersonalDetails}
                setFile={setFile}
              />
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline badge-sm">
                  Experiences
                </h1>

                <button
                  className="btn btn-primary"
                  onClick={handleResetExperiences}
                >
                  <RotateCw className="w-4  " />
                </button>
              </div>

              <ExperiencesForm
                experience={experiences}
                setExperiences={setExperiences}
              />
              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline badge-sm">
                  Education
                </h1>

                <button
                  className="btn btn-primary"
                  onClick={handleResetEducations}
                >
                  <RotateCw className="w-4  " />
                </button>
              </div>
              <EducationForm
                educations={educations}
                setEducations={setEducations}
              />

              <div className="flex justify-between items-center">
                <h1 className="badge badge-primary badge-outline badge-sm">
                  langues
                </h1>

                <button
                  className="btn btn-primary"
                  onClick={handleResetLanguages}
                >
                  <RotateCw className="w-4  " />
                </button>
              </div>
              <LanguageForm languages={languages} setLanguages={setLanguages} />
              <div className="flex justify-between">
                <div className="w-1/2">
                  <div className="flex justify-between items-center">
                    <h1 className="badge badge-primary badge-outline badge-sm">
                      Competences
                    </h1>

                    <button
                      className="btn btn-primary"
                      onClick={handleResetSkills}
                    >
                      <RotateCw className="w-4  " />
                    </button>
                  </div>
                  <SkillForm skills={skills} setSkills={setSkills} />
                </div>
                <div className="w-1/2 ml-4">
                  <div className="flex justify-between items-center">
                    <h1 className="badge badge-primary badge-outline badge-sm">
                      Loisirs
                    </h1>

                    <button
                      className="btn btn-primary"
                      onClick={handleResetSHobbies}
                    >
                      <RotateCw className="w-4  " />
                    </button>
                  </div>
                  <HobbyForm hobbies={hobbies} setHobbies={setHobbies} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3 h-full  bg-base-100 bg-[url('/file.svg')] bg-cover bg-center scrollable-preview relative">
            <div className="flex items-center justify-center fixed z-9999 top-5 right-5">
              <input
                type="range"
                min={50}
                max="200"
                value={zoom}
                onChange={(e) => setZoom(Number(e.target.value))}
                className="range range-xs range-primary"
              />
              <p className="ml-4 text-sm text-primary">{zoom}%</p>
            </div>
            <select
              onChange={(e) => setTheme(e.target.value)}
              value={theme??""}
              className="select select-bordered fixed z-[999] select-sm top-12 right-5"
            >
              {themes.map((themeName) => (
                <option key={themeName} value={themeName}>
                  {themeName}
                </option>
              ))}
            </select>
            <div
              className="flex justify-center items-center"
              style={{
                transform: `scale(${zoom / 200})`,
              }}
            >
              <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme??""}
                experiences={experiences}
                educations={educations}
                languages={languages}
                hobbies={hobbies}
                skills={skills}
              />
            </div>
          </div>
        </section>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal"
        
        >
          <div
            className="modal-box w-full max-w-6xl sm;px-6 mx-auto
          px-4 lg: px-8 " 
          >
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost
               absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="mt-5 ">
              <div className="flex justify-end mb-5">
                   <button className="btn btn-primary"
                   onClick={handledownloadPdf}
                   >telecharger <Save className="w-4"/></button>
              </div>
             <div className="w-full max-w-full overflow-auto">
              <div className="w-full max-w-full flex justify-center items-center ">
               <CVPreview
                personalDetails={personalDetails}
                file={file}
                theme={theme??""}
                experiences={experiences}
                educations={educations}
                languages={languages}
                hobbies={hobbies}
                skills={skills}
                download={true}
                ref={cvPreviewRef}
                
              />
             </div>
             </div>
            </div>
          </div>
        </dialog>
      </div>
      <div className="lg:hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-3xl font-bold">
                Desole le CV Builder est uniquement disponible sur ordinateur.
              </h1>
              <Image
                src="/sorry.gif"
                width={500}
                height={500}
                alt="Picture of the author"
                className="mx-auto my-6"
              />
              <p className="py-6">
                Pour creer et personnaliser votre cv, veuillez utiliser un
                ordinateur, nous vous remercions de votre comprehension .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
