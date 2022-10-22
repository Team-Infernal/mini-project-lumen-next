import cn from "classnames";
import React from "react";

import InputError from "components/InputError";

type InputProps = {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  bordered?: boolean;
  disabled?: boolean;
  onChange?: React.Dispatch<any>;
  defaultValue?: string;
  errors?: Array<string>;
};

const Input = React.forwardRef(
  (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
      className = "",
      type = "text",
      label = "",
      placeholder = "",
      bordered = false,
      disabled = false,
      onChange,
      defaultValue,
      errors,
    } = props;
    const hasLabel = !!label;
    const hasErrors = !!errors?.length;

    return (
      <>
        {hasLabel && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={cn(`input text-neutral-content bg-base-300 ${className}`, {
            "input-bordered": bordered,
          })}
          disabled={disabled}
          ref={ref}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        {hasErrors && <InputError errors={errors} />}
      </>
    );
  }
);

export default Input;
