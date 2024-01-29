import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./components/reusableForm";
import Container from "./components/ui/Container";

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TTest>();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const TestScheme = z.object({
    name: z.string(),
    email: z.string().email(),
  });

  type TTest = z.infer<typeof TestScheme>;

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
        dobule={true}
      >
        <FormSection>
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
          <Input
            type="email"
            register={register("email")}
            errors={errors}
            label="Email"
          />
          <Input
            type="checkbox"
            register={register("radio")}
            errors={errors}
            label="checkbox"
          />
          <Input
            type="radio"
            register={register("radio")}
            errors={errors}
            label="radio"
          />

          <Input
            type="radio"
            register={register("email")}
            errors={errors}
            label="radio"
          />
        </FormSection>
        <FormSubmit></FormSubmit>
      </Form>
    </Container>
  );
};

export default App;
