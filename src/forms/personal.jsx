function PersonalForm({ data, updateFn }) {
  function handleNewData(newData) {
    updateFn(newData, 'personal');
  }

  return (
    <div className='section-wrapper'>
      <h2 className="section_title">Personal Details</h2>
      <form>
        <div className="input_wrapper">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            maxLength={30}
            id="name"
            onChange={({ target }) => {
              const newData = {
                ...data,
                name: target.value,
              };
              handleNewData(newData);
            }}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={({ target }) => {
              const newData = {
                ...data,
                email: target.value,
              };
              handleNewData(newData);
            }}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            onChange={({ target }) => {
              const newData = {
                ...data,
                phone: target.value,
              };
              handleNewData(newData);
            }}
          />
        </div>
        <div className="input_wrapper">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            onChange={({ target }) => {
              const newData = {
                ...data,
                address: target.value,
              };
              handleNewData(newData);
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default PersonalForm;
