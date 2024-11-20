import { useState } from 'react';

interface CheckboxValue {
  label: string;
  checked: boolean;
  required: boolean;
}

export const useCheckboxGroup = (initialValues: CheckboxValue[]) => {
  const [checkboxes, setCheckboxes] = useState<CheckboxValue[]>(initialValues);

  const toggleAll = (checked: boolean) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: checked,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const toggleCheckbox = (index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].checked = !updatedCheckboxes[index].checked;
    setCheckboxes(updatedCheckboxes);
  };

  const allRequiredChecked = checkboxes
    .filter((checkbox) => checkbox.required)
    .every((checkbox) => checkbox.checked);

  const allChecked = checkboxes.every((checkbox) => checkbox.checked);

  return {
    checkboxes,
    toggleAll,
    toggleCheckbox,
    allChecked,
    allRequiredChecked,
  };
};
