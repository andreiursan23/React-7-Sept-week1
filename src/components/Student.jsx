import Button from "./Button";

function Student(props) {
    const fullName = `${props.firstName} ${props.lastName}`;

    return (
        <>
            <div className="student">
                <Button click={props.toggleColorClick} buttonText="Toggle color" />
                <h2 style={{color: props.color}}>{fullName}</h2>
                <h3><strong>Course:</strong> {props.course}</h3>
                <p><strong>Email:</strong> {props.email}</p>
            </div>
        </>
    );
}

export default Student;