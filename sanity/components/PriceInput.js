import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchfrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'GBP',
}).format;

function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <h2>
        {type.title} - {value && formatMoney(value / 100)}
      </h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={(e) => onChange(createPatchfrom(e.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

export default PriceInput;

PriceInput.focus = function () {
  this._inputElement.focus();
};
