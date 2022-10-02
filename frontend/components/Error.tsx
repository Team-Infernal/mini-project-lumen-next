import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

type Props = {
  errors: Array<string>;
};

const Error = (props: Props) => {
  const { errors } = props;

  return (
    <div className="px-24 py-4 w-[54rem]">
      <div className="alert alert-error justify-center items-center">
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faWarning} />
        </div>
        <div className="flex-grow flex flex-col items-start">
          {errors.map((error, index) => (
            <p key={`error-${index}`}>{error}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Error;
