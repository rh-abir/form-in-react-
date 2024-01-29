import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../utils/cn";
import Button from "../ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import { SignUpSchema, TNormalForm } from "./validation";

const NormalForm = () => {
  const methods = useForm<TNormalForm>({
    resolver: zodResolver(SignUpSchema),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  console.log(watch("name"));
  const duble = true;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn(
          "border border-gray-200 shadow-sm rounded-lg w-full  p-5 mx-auto",
          {
            "max-w-md": !duble,
            "max-w-5xl": duble,
          }
        )}
      >
        <div
          className={cn(" grid grid-cols-1 gap-5 justify-items-center", {
            "md:grid-cols-2": duble,
          })}
        >
          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email
            </label>
            <InputField />
          </div>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="w-full max-w-md">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="w-full"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full max-w-md">
            <label className="block" htmlFor="Password">
              Password
            </label>
            <input
              className="w-full"
              type="password"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
        </div>

        <div
          className={cn(" grid grid-cols-1  gap-5 justify-items-center my-6", {
            "md:grid-cols-2": duble,
          })}
        >
          <div className=" w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
            <Button className="w-full md:w-fit" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default NormalForm;
