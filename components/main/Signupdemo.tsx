"use client";
import React, { useState } from "react";
import { Label } from "../sub/label";
import { Input } from "../sub/input";
import { cn } from "@/utils/cn";
import { collection, addDoc } from 'firebase/firestore';
import SuccessModal from './successmodal';
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { db } from "@/app/FirebaseConfig";
type TeamMember1 = {
  name: string;
  email: string;
  phone: string;
};
type TeamMember2 = {
  name: string;
  email: string;
  phone: string;
};
type TeamMember3 = {
  name: string;
  email: string;
  phone: string;
};




export function SignupFormDemo() {

  // Function to add a document to Firestore
  const addDocumentToFirestore = async (teamName: string,collegeName: string, selectedDepartment: string, concatenatedNames: string, concatenatedEmails: string, concatenatedPhones: string, collectionName: string) => {
    try {
      // Reference to the collection
      const docRef = collection(db, collectionName);
  
      // Add document with fields to the collection
      await addDoc(docRef, {
        college_name:collegeName,
        team_name: teamName,
        department: selectedDepartment,
        team_members: concatenatedNames,
        team_mails: concatenatedEmails,
        team_numbers: concatenatedPhones
      });
  
      console.log("Document added to Firestore collection:", collectionName);
    } catch (error) {
      console.error("Error adding document to Firestore:", error);
    }
    setShowModal(true);

  };
  

  const [selectedDisplayText1, setSelectedDisplayText1] = useState(""); // State for selected display text
  const [selectedNumberValue1, setSelectedNumberValue1] = useState(""); // State for selected number value
  const [fieldsCount1, setFieldsCount1] = useState(0); // State to store number of fields
  const [teamMembers1, setTeamMembers1] = useState<TeamMember1[]>([]); // State to store team members' information

  const [selectedDisplayText2, setSelectedDisplayText2] = useState(""); // State for selected display text
  const [selectedNumberValue2, setSelectedNumberValue2] = useState(""); // State for selected number value
  const [fieldsCount2, setFieldsCount2] = useState(0); // State to store number of fields
  const [teamMembers2, setTeamMembers2] = useState<TeamMember1[]>([]); // State to store team members' information


  const [selectedDisplayText3, setSelectedDisplayText3] = useState(""); // State for selected display text
  const [selectedNumberValue3, setSelectedNumberValue3] = useState(""); // State for selected number value
  const [fieldsCount3, setFieldsCount3] = useState(0); // State to store number of fields
  const [teamMembers3, setTeamMembers3] = useState<TeamMember1[]>([]); // State to store team members' information

  const [showModal, setShowModal] = useState(false);

 // Declare globally

  const [concatenatedNames1, setconcatenatedNames1] = useState(""); // State for selected display text
  const [concatenatedNames2, setconcatenatedNames2] = useState(""); // State for selected display text
  const [concatenatedNames3, setconcatenatedNames3] = useState(""); // State for selected display text


  const [concatenatedEmails1, setconcatenatedEmails1] = useState(""); // State for selected display text
  const [concatenatedEmails2, setconcatenatedEmails2] = useState(""); // State for selected display text
  const [concatenatedEmails3, setconcatenatedEmails3] = useState(""); // State for selected display text

  const [concatenatedPhones1, setconcatenatedPhones1] = useState(""); // State for selected display text
  const [concatenatedPhones2, setconcatenatedPhones2] = useState(""); // State for selected display text
  const [concatenatedPhones3, setconcatenatedPhones3] = useState(""); // State for selected display text


  const fieldsCountMap: { [key: string]: number } = {
    "NEURONOVA": 1, // NEURONOVA - 1 field
    "PUZZLE PALAZZO": 2, // PUZZLE PALAZZO - 2 fields
    "KNOWLEDGE KNOCKOUT": 4, // KNOWLEDGE KNOCKOUT - 3 fields
    "LINK & WIN": 4, // LINK & WIN - 4 fields
    "CHANNEL SURFING": 4, // CHANNEL SURFING - 4 fields
    "KNOWLEDGE KALEIDESCOPE": 3, // KNOWLEDGE KALEIDESCOPE - 4 fields
    "SPINMANIA TREASURE EDITION": 4, // SPINMANIA TREASURE EDITION - 4 fields
    "LIAR'S LIAR": 4, // LIAR'S LIAR - 4 fields
    "MARKUP MAYHEM ESCAPE": 4,
    "MUSICAL HUNT" :4,// MARKUP MAYHEM ESCAPE - 4 fields
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleSelectChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const displayText = e.target.options[e.target.selectedIndex].text;
  
    setSelectedDisplayText1(displayText); // Store display text
    setSelectedNumberValue1(value); // Store number value
  
    // Use type assertion for fieldsCountMap
    setFieldsCount1(fieldsCountMap[displayText as keyof typeof fieldsCountMap] || 0);
  
    setTeamMembers1([]); // Clear existing team members' data
  };


  
  const handleSelectChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const displayText = e.target.options[e.target.selectedIndex].text;
  
    setSelectedDisplayText2(displayText); // Store display text
    setSelectedNumberValue2(value); // Store number value
  
    // Use type assertion for fieldsCountMap
    setFieldsCount2(fieldsCountMap[displayText as keyof typeof fieldsCountMap] || 0);
  
    setTeamMembers2([]); // Clear existing team members' data
  };

  const handleSelectChange3 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const displayText = e.target.options[e.target.selectedIndex].text;
  
    setSelectedDisplayText3(displayText); // Store display text
    setSelectedNumberValue3(value); // Store number value
  
    // Use type assertion for fieldsCountMap
    setFieldsCount3(fieldsCountMap[displayText as keyof typeof fieldsCountMap] || 0);
  
    setTeamMembers3([]); // Clear existing team members' data
  };
  // Function to handle input change for team member fields
  const handleInputChange1 = (index: number, fieldName: keyof TeamMember1, value: string) => {
    const updatedTeamMembers1 = [...teamMembers1];
    updatedTeamMembers1[index] = {
      ...updatedTeamMembers1[index],
      [fieldName]: value,
    };
    setTeamMembers1(updatedTeamMembers1);
  };

  const handleInputChange2 = (index: number, fieldName: keyof TeamMember2, value: string) => {
    const updatedTeamMembers2 = [...teamMembers2];
    updatedTeamMembers2[index] = {
      ...updatedTeamMembers2[index],
      [fieldName]: value,
    };
    setTeamMembers2(updatedTeamMembers2);
  };

  const handleInputChange3 = (index: number, fieldName: keyof TeamMember3, value: string) => {
    const updatedTeamMembers3 = [...teamMembers3];
    updatedTeamMembers3[index] = {
      ...updatedTeamMembers3[index],
      [fieldName]: value,
    };
    setTeamMembers3(updatedTeamMembers3);
  };

    // Function to handle form submission
  

  // Function to render text fields based on fieldsCount
  const renderTextFields1 = () => {
    let textFields = [];
    for (let i = 0; i < fieldsCount1; i++) {
      textFields.push(
        <div key={i} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Name`}>Team Member {i + 1} Name</Label>
            <Input
              id={`teamMember${i + 1}Name`}
              placeholder="Name"
              type="text"
              value={teamMembers1[i]?.name || ""}
              onChange={(e) => handleInputChange1(i, "name", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Email`}>Team Member {i + 1} Email</Label>
            <Input
              id={`teamMember${i + 1}Email`}
              placeholder="Email"
              type="text"
              value={teamMembers1[i]?.email || ""}
              onChange={(e) => handleInputChange1(i, "email", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Phone`}>Team Member {i + 1} Ph.No</Label>
            <Input
              id={`teamMember${i + 1}Phone`}
              placeholder="Phone Number"
              type="text"
              value={teamMembers1[i]?.phone || ""}
              onChange={(e) => handleInputChange1(i, "phone", e.target.value)}
            />
          </LabelInputContainer>
        </div>
      );
    }
    return textFields;
  };


  const renderTextFields2 = () => {
    let textFields = [];
    for (let i = 0; i < fieldsCount2; i++) {
      textFields.push(
        <div key={i} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Name`}>Team Member {i + 1} Name</Label>
            <Input
              id={`teamMember${i + 1}Name`}
              placeholder="Name"
              type="text"
              value={teamMembers2[i]?.name || ""}
              onChange={(e) => handleInputChange2(i, "name", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Email`}>Team Member {i + 1} Email</Label>
            <Input
              id={`teamMember${i + 1}Email`}
              placeholder="Email"
              type="text"
              value={teamMembers2[i]?.email || ""}
              onChange={(e) => handleInputChange2(i, "email", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Phone`}>Team Member {i + 1} Ph.No</Label>
            <Input
              id={`teamMember${i + 1}Phone`}
              placeholder="Phone Number"
              type="text"
              value={teamMembers2[i]?.phone || ""}
              onChange={(e) => handleInputChange2(i, "phone", e.target.value)}
            />
          </LabelInputContainer>
        </div>
      );
    }
    return textFields;
  };




  const renderTextFields3 = () => {
    let textFields = [];
    for (let i = 0; i < fieldsCount3; i++) {
      textFields.push(
        <div key={i} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Name`}>Team Member {i + 1} Name</Label>
            <Input
              id={`teamMember${i + 1}Name`}
              placeholder="Name"
              type="text"
              value={teamMembers3[i]?.name || ""}
              onChange={(e) => handleInputChange3(i, "name", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Email`}>Team Member {i + 1} Email</Label>
            <Input
              id={`teamMember${i + 1}Email`}
              placeholder="Email"
              type="text"
              value={teamMembers3[i]?.email || ""}
              onChange={(e) => handleInputChange3(i, "email", e.target.value)}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor={`teamMember${i + 1}Phone`}>Team Member {i + 1} Ph.No</Label>
            <Input
              id={`teamMember${i + 1}Phone`}
              placeholder="Phone Number"
              type="text"
              value={teamMembers3[i]?.phone || ""}
              onChange={(e) => handleInputChange3(i, "phone", e.target.value)}
            />
          </LabelInputContainer>
        </div>
      );
    }
    return textFields;
  };
  const [collegeName, setCollegeName] = useState(""); // State for college name
  const [teamName, setTeamName] = useState(""); // State for college name
  const [selectedDepartment, setSelectedDepartment] = useState(""); // State for selected department


  // Function to handle change in college name input
  const handleCollegeNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setCollegeName(e.target.value); // Update collegeName state with input value
  };
 
  const handleTeamNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTeamName(e.target.value); // Update teamName state with input value
  };

  const handleSelectDepartment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedText = e.target.options[e.target.selectedIndex].text;
    setSelectedDepartment(selectedText); // Update selectedDepartment state with selected department name
  };


  return (
    <div className="max-w-3xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black mt-20">
      <h2 className="font-bold text-xl text-neutral-800 text-center dark:text-neutral-200">
        Registration Form 
      </h2>
      <p className="text-neutral-600 text-center text-sm max-w-sm mt-2 dark:text-neutral-300">
      </p>

      <form className="my-1" >
        <div className="space-y-4">
          <LabelInputContainer>
            <Label htmlFor="collegeName">Enter college name</Label>
            <Input
            id="collegeName"
            placeholder="College Name"
            type="text"
            value={collegeName} // Bind input value to collegeName state
            onChange={handleCollegeNameChange} // Call handleCollegeNameChange on input change
          />
          </LabelInputContainer>

          <div className="flex items-center justify-center relative">
          <select
            id="events"
            name="events"
            className="select select-bordered w-full max-w-xs"
            onChange={handleSelectDepartment}
            value={selectedDepartment} // Bind value to selectedDepartment state
          >
            <option disabled value="">
              Select Department
            </option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="AI DS">AI DS</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
            <option value="EEE">EEE</option>
            <option value="Others">Others</option>
          </select>
      
          </div>

          <LabelInputContainer className="align-center flex justify-center">
            <Label htmlFor="collegeName"  className="text-center">Enter Team Name</Label>
            <Input
            id="collegeName"
            placeholder="Team Name"
            type="text"
            value={teamName} // Bind input value to collegeName state
            onChange={handleTeamNameChange}
            className="w-full max-w-xs mx-auto" // Center the input field
            />
          </LabelInputContainer>

          <div className="flex items-center justify-center relative">
            <select
              id="events"
              name="events"
              className="select select-info w-full max-w-xs"
              onChange={handleSelectChange1}
              value={selectedNumberValue1}
            >
              <option disabled value="">Select Event 1</option>
              <option value="1">NEURONOVA</option>
              <option value="2">PUZZLE PALAZZO</option>
              <option value="3">KNOWLEDGE KNOCKOUT</option>
              <option value="4">LINK & WIN</option>
              <option value="5">CHANNEL SURFING</option>
              <option value="6">KNOWLEDGE KALEIDESCOPE</option>
              <option value="7">SPINMANIA TREASURE EDITION</option>
              <option value="8">LIAR'S LIAR</option>
              <option value="9">MARKUP MAYHEM ESCAPE</option>
              <option value="10">MUSICAL HUNT</option>


            </select>
          </div>

          {renderTextFields1()}

          <div className="flex items-center justify-center relative ">
            <select
              id="events"
              name="events"
              className="select select-accent w-full max-w-xs"
              onChange={handleSelectChange2}
              value={selectedNumberValue2}
            >
              <option disabled value="">Select Event 2</option>
              <option value="1">NEURONOVA</option>
              <option value="2">PUZZLE PALAZZO</option>
              <option value="3">KNOWLEDGE KNOCKOUT</option>
              <option value="4">LINK & WIN</option>
              <option value="5">CHANNEL SURFING</option>
              <option value="6">KNOWLEDGE KALEIDESCOPE</option>
              <option value="7">SPINMANIA TREASURE EDITION</option>
              <option value="8">LIAR'S LIAR</option>
              <option value="9">MARKUP MAYHEM ESCAPE</option>
              <option value="10">MUSICAL HUNT</option>
            </select>
          </div>

          {renderTextFields2()}



          <div className="flex items-center justify-center relative">
            <select
              id="events"
              name="events"
              className="select select-warning w-full max-w-xs"
              onChange={handleSelectChange3}
              value={selectedNumberValue3}
            >
              <option disabled value="">Select Event 3</option>
              <option value="1">NEURONOVA</option>
              <option value="2">PUZZLE PALAZZO</option>
              <option value="3">KNOWLEDGE KNOCKOUT</option>
              <option value="4">LINK & WIN</option>
              <option value="5">CHANNEL SURFING</option>
              <option value="6">KNOWLEDGE KALEIDESCOPE</option>
              <option value="7">SPINMANIA TREASURE EDITION</option>
              <option value="8">LIAR'S LIAR</option>
              <option value="9">MARKUP MAYHEM ESCAPE</option>
              <option value="10">MUSICAL HUNT</option>
            </select>
          </div>

          {renderTextFields3()}


          <button
  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
  type="button" // Set type as button, not submit
  onClick={() => {
    // Perform any actions here
    // For example, update the display text with some values
    console.log(collegeName);
    console.log(teamName);
    console.log(selectedDepartment);

    const names1 = teamMembers1.map(member => member.name).join(', ');
    setconcatenatedNames1(names1)
    console.log("Concatenated Names:", concatenatedNames1);
    
    // Concatenate all emails
     const emails1 = teamMembers1.map(member => member.email).join(', ');
     setconcatenatedEmails1(emails1)

    console.log("Concatenated Emails:", concatenatedEmails1);
    
    // Concatenate all phone numbers
     const phones1 = teamMembers1.map(member => member.phone).join(', ');
     setconcatenatedPhones1(phones1)

    console.log("Concatenated Phone Numbers:", concatenatedPhones1);    


     const names2 = teamMembers2.map(member => member.name).join(', ');
     setconcatenatedNames2(names2)

    console.log("Concatenated Names:", concatenatedNames2);
    
    // Concatenate all emails
     const emails2 = teamMembers2.map(member => member.email).join(', ');
     setconcatenatedEmails2(emails2)

    console.log("Concatenated Emails:", concatenatedEmails2);
    
    // Concatenate all phone numbers
     const phones2 = teamMembers2.map(member => member.phone).join(', ');
     setconcatenatedPhones2(phones2)

    console.log("Concatenated Phone Numbers:", concatenatedPhones2); 

     const names3 = teamMembers3.map(member => member.name).join(', ');
     setconcatenatedNames3(names3)

    console.log("Concatenated Names:", concatenatedNames3);
    
    // Concatenate all emails
     const emails3 = teamMembers3.map(member => member.email).join(', ');
     setconcatenatedEmails3(emails3)

    console.log("Concatenated Emails:", concatenatedEmails3);
    
    // Concatenate all phone numbers
     const phones3 = teamMembers3.map(member => member.phone).join(', ');
     setconcatenatedPhones3(phones3)

    console.log("Concatenated Phone Numbers:", concatenatedPhones3); 


    console.log(selectedDisplayText1);
    console.log("fsfesfc");
    console.log(selectedNumberValue1);
    if (concatenatedNames1 !== "") {

    addDocumentToFirestore(teamName,collegeName, selectedDepartment, concatenatedNames1, concatenatedEmails1, concatenatedPhones1, selectedDisplayText1);
     } if (concatenatedNames2 !== "") {
      addDocumentToFirestore(teamName, collegeName, selectedDepartment, concatenatedNames2, concatenatedEmails2, concatenatedPhones2, selectedDisplayText2);
    }    if (concatenatedNames3 !== "") {
      addDocumentToFirestore(teamName, collegeName, selectedDepartment, concatenatedNames3, concatenatedEmails3, concatenatedPhones3, selectedDisplayText3);
    }

    
  }}
  
>

  Register &rarr;
  <BottomGradient />
</button>


          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </div>
        {showModal && (
  <SuccessModal
    onClose={closeModal}
    teamName={teamName}
    selectedDisplayText1={selectedDisplayText1}
    selectedDisplayText2={selectedDisplayText2}
    selectedDisplayText3={selectedDisplayText3}
    concatenatedNames1={concatenatedNames1}
    concatenatedNames2={concatenatedNames2}
    concatenatedNames3={concatenatedNames3}
  />
)}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};3
