import './FormPage.css';
import Form from '../Form/Form';

function FormPage() {
  return (
    <div className="App">
      <span className="mainHeading">Let's Train Your Chatbot</span><br/>
      <span className="subHeading">The More Questions You'll Add, The Better it Will Get...</span>
      <Form/>
    </div>
  );
}

export default FormPage;
