import Student from './Student.jsx';

function App() {
  return (
    <>
      <Student name="Spangbob" age={31} IsStudent={false} />
      <Student name="Abod" age={16} IsStudent={true} />
      <Student name="Amory" age={46} IsStudent={false} />
      <Student name="Khalid" age={38} IsStudent={false} />
      <Student />
    </>
  );
}

export default App;
