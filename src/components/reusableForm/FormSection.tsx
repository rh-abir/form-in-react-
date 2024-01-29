import { useContext } from "react";
import { FormElementContext } from ".";
import cn from "../../utils/cn";

export const FormSection = ({ children }) => {
  const { dobule } = useContext(FormElementContext);

  return (
    <div
      className={cn(" grid grid-cols-1 gap-5 justify-items-center", {
        "md:grid-cols-2": dobule,
      })}
    >
      {children}
    </div>
  );
};
