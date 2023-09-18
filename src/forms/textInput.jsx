function TextInput({ data, setFormData, updatePreview, property, labelText }) {
  return (
    <div className='input_wrapper'>
      <label htmlFor={`${property}-${data.key}`}>{labelText}</label>
      <input
        type="text"
        id={`${property}-${data.key}`}
        value={data[property]}
        onChange={({ target }) => {
          const newData = { ...data, [property]: target.value };
          setFormData(newData);
          updatePreview(newData);
        }}
      />
    </div>
  );
}

export default TextInput;
