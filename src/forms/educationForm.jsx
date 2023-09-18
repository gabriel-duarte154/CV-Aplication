import TextInput from './textInput';

function EducationForm({
  closeForm,
  data,
  saveData,
  updatePreview,
  setFormData,
  resetPreview,
  deleteItem
}) {
  return (
    <div>
      <form>
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'school'}
          labelText={'School:'}
        />
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'startDate'}
          labelText={'Start Date:'}
        />
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'endDate'}
          labelText={'End Date:'}
        />
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'degree'}
          labelText={'Degree:'}
        />
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'location'}
          labelText={'Location:'}
        />
      </form>
      <div className="button_container">
        <button
          onClick={() => {
            deleteItem('education', data.key);
            closeForm();
          }}
        >
          Delete
        </button>
        <div>
          <button
            onClick={() => {
              closeForm();
              resetPreview('education', data.key);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              saveData();
              closeForm();
            }}
            className='saveBtn'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EducationForm;
