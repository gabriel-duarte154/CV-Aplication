import { useState } from 'react';
import SideSection from './sideSection';
import ExperienceForm from '../forms/experienceForm';

class Expirience {
  constructor() {
    this.company = '';
    this.positionTitle = '';
    this.startDate = '';
    this.endDate = '';
    this.location = '';
    this.description = '';
    this.key = self.crypto.randomUUID();
  }
}

function ExpirienceSection({
  data,
  updateFn,
  preView,
  resetPreview,
  deleteItem,
}) {
  const [formStatus, setFormStatus] = useState({ isOpen: false, data: '' });

  function openPreView() {
    const expirience = new Expirience();
    const newData = [...data, expirience];
    preView(newData, 'experience');
    setFormStatus({ isOpen: true, data: expirience });
  }

  function saveData() {
    let index = data.findIndex((el) => el.key === formStatus.data.key);

    if (index >= 0) {
      data[index] = formStatus.data;
      preView([...data], 'experience');
      return;
    }

    updateFn([...data, formStatus.data], 'experience');
  }

  function updatePreview(newData) {
    let index = data.findIndex((el) => el.key === newData.key);

    if (index >= 0) {
      data[index] = newData;
      preView([...data], 'experience');
      return;
    }

    preView([...data, newData], 'experience');
  }

  return (
    <SideSection
      data={data}
      saveData={saveData}
      updatePreview={updatePreview}
      openPreView={openPreView}
      title={'Experience'}
      setFormStatus={setFormStatus}
      formStatus={formStatus}
      resetPreview={resetPreview}
      FormComponent={ExperienceForm}
      deleteItem={deleteItem}
    />
  );
}

export default ExpirienceSection;
