type InputErrorParams = {
  errors: Array<string>;
};

const InputError = ({ errors = [] }: InputErrorParams) => {
  return (
    <>
      {errors.length > 0 && (
        <label className="label flex-col items-start">
          {errors.map((error, index) => (
            <span key={index} className="label-text text-error">
              {error}
            </span>
          ))}
        </label>
      )}
    </>
  );
};

export default InputError;
