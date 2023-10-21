import { useState } from "react";
import { Form } from "react-router-dom";
import { Button, Container, Loading, Section } from "../components";
import { Field } from "../components/input-fields";
import { useFormik } from "formik";
import { addProductSchema } from "../schemas";
import Swal from "sweetalert2";

const mySwal = Swal.mixin({
  customClass: {
    confirmButton: "button button-primary",
    title: "p-5",
  },
  buttonsStyling: false,
});

const initialValues = {
  name: "",
  brand: "",
  type: "",
  image: "",
  price: "",
  rating: "",
  description: "",
};

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: addProductSchema,
      onSubmit: async (values, { resetForm, setSubmitting }) => {
        try {
          setLoading(true);
          const res = await fetch(
            "https://volt-realm-api.vercel.app/products",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            }
          );
          const { error } = await res.json();
          if (error) throw error;

          setLoading(false);
          await mySwal.fire({
            icon: "success",
            title: "Successfully added a new product.",
          });

          resetForm();
        } catch (err) {
          setSubmitting(false);
          setLoading(false);
          mySwal.fire({
            title: err.message || "Something has gone wrong!",
            icon: "error",
          });
        }
      },
    });

  return (
    <Section className="min-h-[calc(100vh-80px)] px-2 py-8">
      <Container className="relative">
        <Section.Content className="bg-white w-full">
          <Section.Title className="text-center mb-8">
            Add a New Product
          </Section.Title>
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
            <Button type="submit" className="text-lg btn-primary mt-3">
              Add Product
            </Button>
          </Form>
        </Section.Content>
        {loading && <Loading />}
      </Container>
    </Section>
  );
}
