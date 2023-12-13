import { useFormik } from "formik";
import { Form } from "react-router-dom";
import { Field } from "./input-fields";
import Loading from "./Loading";
import Button from "./Button";

export default function ProductForm({
  onSubmit,
  validationSchema,
  submitButtonText = "Submit",
  initialValues = {
    name: "",
    brand: "",
    type: "",
    image: "",
    price: "",
    rating: "",
    description: "",
  },
}) {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  if (isSubmitting) return <Loading />;

  return (
    <Form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto flex flex-col gap-2"
    >
      <div className="flex flex-col md:flex-row items-start gap-x-4 gap-y-2">
        <Field
          label="Name"
          id="name"
          placeholder="Product name"
          className="focus:outline-0"
          value={values.name}
          error={touched.name && errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          label="Brand"
          id="brand"
          placeholder="Brand name"
          className="focus:outline-0"
          value={values.brand}
          error={touched.brand && errors.brand}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-x-4 gap-y-2">
        <Field
          label="Type"
          id="type"
          placeholder="Product type"
          className="focus:outline-0"
          value={values.type}
          error={touched.type && errors.type}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          label="Price"
          id="price"
          type="number"
          placeholder="Product price"
          className="focus:outline-0"
          value={values.price}
          error={touched.price && errors.price}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <div className="flex flex-col md:flex-row items-start gap-x-4 gap-y-2">
        <Field
          label="Image URL"
          id="image"
          placeholder="Product image URL"
          className="focus:outline-0"
          value={values.image}
          error={touched.image && errors.image}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Field
          label="Rating"
          id="rating"
          type="number"
          placeholder="Product rating"
          className="focus:outline-0"
          value={values.rating}
          error={touched.rating && errors.rating}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      <Field
        label="Description"
        id="description"
        className="focus:outline-0"
        placeholder="Product description"
        value={values.description}
        error={touched.description && errors.description}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button
        type="submit"
        className={`text-lg btn-secondary mt-3${
          isSubmitting ? " btn-disabled" : ""
        }`}
      >
        {submitButtonText}
      </Button>
    </Form>
  );
}
