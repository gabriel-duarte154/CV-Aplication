import PersonalForm from './forms/personal';
import Curriculum from './cv';
import EducationSection from './sections/education';
import ExpirienceSection from './sections/experience';
import { useState } from 'react';
import './style/app.css';

const data = {
  personal: {
    name: '',
    email: '',
    phone: '',
    address: '',
  },
  education: [],
  experience: [],
};

function createDocument() {
  const page = document.implementation.createHTMLDocument('new document');

  console.log(page);
}

function App() {
  console.log(document);
  const [formData, setFormData] = useState(data);
  const [preViewData, setPreViewData] = useState(data);

  function updateData(data, property) {
    const newData = { ...formData, [property]: data };
    setFormData(newData);
    setPreViewData({ ...preViewData, [property]: data });
  }

  function preView(data, property) {
    const newData = { ...preViewData, [property]: data };
    setPreViewData(newData);
  }

  function resetPreview(property) {
    setPreViewData({ ...preViewData, [property]: formData[property] });
  }

  function deleteItem(property, key) {
    let index = formData[property].findIndex((el) => el.key === key);

    if (index < 0) {
      resetPreview(property);
      return;
    }

    formData[property].splice(index, 1);
    const newData = [...formData[property]];
    updateData(newData, property);
  }

  return (
    <div className="wrapper">
      <div className="form-section">
        <PersonalForm data={formData.personal} updateFn={updateData} />

        <EducationSection
          data={formData.education}
          updateFn={updateData}
          preView={preView}
          resetPreview={resetPreview}
          deleteItem={deleteItem}
        ></EducationSection>

        <ExpirienceSection
          data={formData.experience}
          updateFn={updateData}
          preView={preView}
          resetPreview={resetPreview}
          deleteItem={deleteItem}
        />
      </div>

      <Curriculum data={preViewData} />
    </div>
  );
}

export default App;
