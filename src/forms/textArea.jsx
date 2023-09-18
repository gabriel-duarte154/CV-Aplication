function TextArea({ data, setFormData, updatePreview, property, labelText }) {
  return (
    <div className='input_wrapper'>
      <label htmlFor={`${property}-${data.key}`}>{labelText}</label>
      <textarea
        id={`${property}-${data.key}`}
        cols="30"
        rows="10"
        value={data[property]}
        onChange={({ target }) => {
          const newData = { ...data, [property]: target.value };
          setFormData(newData);
          updatePreview(newData);
        }}
      ></textarea>
    </div>
  );
}

export default TextArea;
