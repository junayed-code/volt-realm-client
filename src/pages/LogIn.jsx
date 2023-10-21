import { Form, Link, useNavigate } from "react-router-dom";
import { Button, Container, Section } from "../components";
import { Field, FieldPassword } from "../components/input-fields";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { logInSchema } from "../schemas";
import { useAuth } from "../hooks";

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const navigate = useNavigate();
  const { logIn, logInWithGoogle, currentUser } = useAuth();
  if (currentUser) return navigate("/");

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: logInSchema,
      onSubmit: async (values, { resetForm, setSubmitting, setFieldError }) => {
        try {
          const { email, password } = values;
          await logIn(email, password);

          // Clear the form field and navigate the home page.
          resetForm();
          navigate("/");
        } catch {
          setFieldError(
            "password",
            "Incorrect email or password! Please try again."
          );
          setSubmitting(false);
        }
      },
    });

  const handleLogInWithGoogle = () => {
    logInWithGoogle().then(user => {
      if (user) navigate("/");
    });
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] px-2 py-8">
      <Container>
        <Section.Content className="bg-base-100 w-full lg:flex flex-row-reverse">
          <div className="flex-1 self-center">
            <Section.Title className="text-center mb-5">
              Webcome Back
            </Section.Title>
            <Form
              onSubmit={handleSubmit}
              className="max-w-sm mx-auto flex flex-col gap-2"
            >
              <Field
                label="Your email"
                type="email"
                id="email"
                placeholder="Enter your email"
                value={values.email}
                error={touched.email && errors.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FieldPassword
                label="Your password"
                id="password"
                placeholder="Enter your password"
                value={values.password}
                error={touched.password && errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type="submit" className="text-lg btn-primary mt-3">
                Login
              </Button>

              <div className="divider">OR</div>

              <Button
                onClick={handleLogInWithGoogle}
                className="text-lg btn-secondary btn-outline w-full flex items-center gap-2 mb-2"
              >
                <FcGoogle className="text-xl mt-[2px]" />
                Login with Google
              </Button>

              <p className="mt-3">
                New to Volt Realm?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign Up
                </Link>
              </p>
            </Form>
          </div>
          <div className="flex-1 hidden lg:flex items-center">
            <img
              src="/images/illustration/login.jpg"
              alt="Illustration image"
            />
          </div>
        </Section.Content>
      </Container>
    </Section>
  );
}
