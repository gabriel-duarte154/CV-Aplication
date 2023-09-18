import TextArea from './textArea';
import TextInput from './textInput';

function ExperienceForm({
  closeForm,
  data,
  saveData,
  updatePreview,
  setFormData,
  resetPreview,
  deleteItem,
}) {
  return (
    <div>
      <form>
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'company'}
          labelText={'Company:'}
        />
        <TextInput
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'positionTitle'}
          labelText={'Position Title:'}
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
          property={'location'}
          labelText={'Location:'}
        />
        <TextArea
          data={data}
          setFormData={setFormData}
          updatePreview={updatePreview}
          property={'description'}
          labelText={'Description:'}
        />
      </form>
      <div className="button_container">
        <button
          onClick={() => {
            deleteItem('experience', data.key);
            closeForm();
          }}
        >
          Delete
        </button>
        <div>
          <button
            onClick={() => {
              closeForm();
              resetPreview('experience', data.key);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              saveData();
              closeForm();
            }}
            className="saveBtn"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
export default ExperienceForm;
