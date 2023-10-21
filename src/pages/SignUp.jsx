import { Form, Link, useNavigate } from "react-router-dom";
import { Button, Container, Section } from "../components";
import { Field, FieldPassword } from "../components/input-fields";
import { useAuth } from "../hooks";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  uname: "",
  email: "",
  password: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const { currentUser, createNewUser, logInWithGoogle } = useAuth();
  if (currentUser) return navigate("/");

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, { resetForm, setSubmitting, setFieldError }) => {
        try {
          const { uname, email, password } = values;
          await createNewUser(uname, email, password);

          // Clear the form field.
          resetForm();
          navigate("/");
        } catch (err) {
          setSubmitting(false);
          if (err.code === "auth/email-already-in-use") {
            setFieldError("email", "This email is already used.");
          }
        }
      },
    });

  const handleLogInWithGoogle = () => {
    logInWithGoogle().then(() => navigate("/"));
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] px-2 py-8">
      <Container>
        <Section.Content className="bg-white w-full flex">
          <div className="flex-1">
            <Section.Title className="text-center mb-5">
              Create a Account
            </Section.Title>
            <Form
              onSubmit={handleSubmit}
              className="max-w-sm mx-auto flex flex-col gap-2"
            >
              <Field
                label="Your name"
                id="uname"
                placeholder="Enter your name"
                value={values.uname}
                error={touched.uname && errors.uname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
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
                Sign Up
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
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </Form>
          </div>
          <div className="flex-1 hidden lg:flex items-center">
            <img
              src="/images/illustration/signup.jpg"
              alt="Illustration image"
            />
          </div>
        </Section.Content>
      </Container>
    </Section>
  );
}
