import React, { useState } from 'react';

function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // Check if its a number and convert it
    const { value } = e.target;
    if (e.target.type === 'number') {
      parseInt(value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // Then updates the new value that changed
      [e.target.name]: value,
    });
  }
  return { values, updateValue };
}

export default useForm;
