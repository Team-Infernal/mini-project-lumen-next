import cn from "classnames";
import React from "react";

import InputError from "components/InputError";

type TextareaProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  bordered?: boolean;
  disabled?: boolean;
  onChange?: React.Dispatch<any>;
  defaultValue?: string;
  errors?: Array<string>;
};

const Textarea = React.forwardRef(
  (props: TextareaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
    const {
      className = "",
      label = "",
      placeholder = "",
      rows = 5,
      bordered = false,
      disabled = false,
      onChange,
      defaultValue,
    } = props;
    const hasLabel = !!label;

    return (
      <>
        {hasLabel && (
          <label className="label">
            <span className="label-text">{label}</span>
          </label>
        )}
        <textarea
          placeholder={placeholder}
          className={cn(
            `textarea text-neutral-content bg-base-300 ${className}`,
            {
              "textarea-bordered": bordered,
            }
          )}
          disabled={disabled}
          ref={ref}
          onChange={onChange}
          rows={rows}
          defaultValue={defaultValue}
        />
      </>
    );
  }
);

export default Textarea;
