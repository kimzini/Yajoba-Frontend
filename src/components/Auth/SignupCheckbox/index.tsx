interface AllCheckboxProps {
  allChecked: boolean;
  toggleAll: (checked: boolean) => void;
}

export const AllCheckbox = ({allChecked, toggleAll}: AllCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={allChecked}
        onChange={(e) => toggleAll(e.target.checked)}
        className="h-4 w-4"
      />
      <label className="text-medium18 font-medium text-neutral-10">
        전체 동의
      </label>
    </div>
  );
};

interface CheckboxProps {
  labelText: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({labelText, checked, onChange}: CheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3 w-3"
      />
      <label className="text-xsmall14 font-light text-neutral-10">
        {labelText}
      </label>
    </div>
  );
};