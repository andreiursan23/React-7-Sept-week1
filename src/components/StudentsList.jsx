import Student from "./Student";
import studentsListData from "../data/StudentsListData";
import Button from"./Button";
import { useState } from 'react';

function StudentsList() {
    const [blackText, setBlackText] = useState(false);

    const toggleColor = () => {
        if ( blackText === false) {
            setBlackText(true);  
        } else {
            setBlackText(false);
        }
    };

    return (
        <> 
            <Button click={() => toggleColor('black')} buttonText="Toggle color" />
            {studentsListData.map(student => (
                <Student 
                    toggleColorClick={toggleColor}
                    firstName = {student.firstName}
                    lastName = {student.lastName}
                    course = {student.course} 
                    email = {student.email}
                    color = {blackText === true ? 'black' : student.color} />
            ))}
        </>
    );
}

export default StudentsList;