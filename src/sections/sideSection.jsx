import { ReactComponent as ArrowIcon } from '../assets/arrow.svg';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { useState } from 'react';

function ToggleButton({ isOpen, toggleSection, title }) {
  return (
    <button className="toggleBtn" onClick={toggleSection}>
      {title}
      <ArrowIcon className={isOpen ? 'arrowOpen' : ''}></ArrowIcon>
    </button>
  );
}

function Colletion({ data, title, openForm, editItem }) {
  return (
    <div className="items_container">
      {data.map((item) => (
        <Item data={item} key={item.key} editItem={editItem} />
      ))}
      <button className="addBtn" onClick={openForm}>
        <PlusIcon className='plus_icon'></PlusIcon>
        {title}
      </button>
    </div>
  );
}

function Item({ data, editItem }) {
  return (
    <button
      className="item"
      onClick={() => {
        editItem(data);
      }}
    >
      {data.school || data.company}
    </button>
  );
}

function SideSection({
  data,
  saveData,
  updatePreview,
  openPreView,
  title,
  setFormStatus,
  formStatus,
  resetPreview,
  FormComponent,
  deleteItem,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSection() {
    setIsOpen(!isOpen);
  }

  function closeForm() {
    const newData = { isOpen: false, data: [] };
    setFormStatus(newData);
  }

  function setFormData(newData) {
    setFormStatus({ ...formStatus, data: newData });
  }

  function editItem(itemData) {
    setFormStatus({ isOpen: true, data: itemData });
  }

  return (
    <div className="section-wrapper">
      <ToggleButton
        toggleSection={toggleSection}
        title={title}
        isOpen={isOpen}
      />

      <div className={isOpen ? 'items_container' : 'hidden'}>
        {formStatus.isOpen ? (
          <FormComponent
            closeForm={closeForm}
            data={formStatus.data}
            saveData={saveData}
            updatePreview={updatePreview}
            setFormData={setFormData}
            resetPreview={resetPreview}
            deleteItem={deleteItem}
          />
        ) : (
          <Colletion
            data={data}
            title={title}
            openForm={openPreView}
            editItem={editItem}
          />
        )}
      </div>
    </div>
  );
}

export default SideSection;
