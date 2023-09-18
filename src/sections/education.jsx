import { useState } from 'react';
import SideSection from './sideSection';
import EducationForm from '../forms/educationForm';

class Education {
  constructor() {
    this.school = '';
    this.degree = '';
    this.startDate = '';
    this.endDate = '';
    this.location = '';
    this.key = self.crypto.randomUUID();
  }
}

function EducationSection({
  data,
  updateFn,
  preView,
  resetPreview,
  deleteItem,
}) {
  const [formStatus, setFormStatus] = useState({ isOpen: false, data: '' });

  function openPreView() {
    const education = new Education();
    const newData = [...data, education];
    preView(newData, 'education');
    setFormStatus({ isOpen: true, data: education });
  }

  function saveData() {
    let index = data.findIndex((el) => el.key === formStatus.data.key);

    if (index >= 0) {
      data[index] = formStatus.data;
      preView([...data], 'education');
      return;
    }

    updateFn([...data, formStatus.data], 'education');
  }

  function updatePreview(newData) {
    let index = data.findIndex((el) => el.key === newData.key);

    if (index >= 0) {
      data[index] = newData;
      preView([...data], 'education');
      return;
    }

    preView([...data, newData], 'education');
  }

  return (
    <SideSection
      data={data}
      saveData={saveData}
      updatePreview={updatePreview}
      openPreView={openPreView}
      title={'Education'}
      setFormStatus={setFormStatus}
      formStatus={formStatus}
      resetPreview={resetPreview}
      FormComponent={EducationForm}
      deleteItem={deleteItem}
    />
  );
}

export default EducationSection;
