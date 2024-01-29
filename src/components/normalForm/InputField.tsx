import { useFormContext } from "react-hook-form";

const InputField = () => {
  const { register, watch } = useFormContext();

  console.log(watch("text"));
  return <input type="text" id="text" {...register("text")} />;
};

export default InputField;
