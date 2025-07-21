import PropTypes from 'prop-types';

function Student(props){
  return (
    <div className="student">
        <p><strong>Name:</strong> {props.name}</p>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Student:</strong> {props.IsStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  IsStudent: PropTypes.bool
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  IsStudent: false
};

export default Student;
