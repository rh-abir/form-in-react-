import { createContext } from "react";
import { TForm } from "../../types";
import cn from "../../utils/cn";

export const FormElementContext = createContext<{ dobule: boolean } | null>(
  null
);

export const Form = ({ children, onSubmit, dobule = false }: TForm) => {
  return (
    <FormElementContext.Provider value={dobule}>
      <form
        onSubmit={onSubmit}
        className={cn(
          "border border-gray-200 shadow-sm rounded-lg w-full  p-5 mx-auto",
          {
            "max-w-md": !dobule,
            "max-w-5xl": dobule,
          }
        )}
      >
        {children}
      </form>
    </FormElementContext.Provider>
  );
};
