import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { Button, Container, Loading, Section } from "../components";
import { Field } from "../components/input-fields";
import { useFormik } from "formik";
import { updateProductSchema } from "../schemas";
import Swal from "sweetalert2";
import { useState } from "react";

const mySwal = Swal.mixin({
  customClass: {
    confirmButton: "button button-primary",
    denyButton: "button button-secondary",
    actions: "gap-3",
    title: "p-5",
  },
  buttonsStyling: false,
});

export default function UpdateProduct() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id, nameSlug, ...currentValues } = useLoaderData();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const copyValues = { ...values };
      for (const key in copyValues) {
        if (copyValues[key] === "") delete copyValues[key];
      }
      setLoading(true);
      const res = await fetch(
        `https://volt-realm-api.vercel.app/products/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(copyValues),
        }
      );

      const { error } = await res.json();
      if (error) throw error;

      setLoading(false);
      // show a modal
      const result = await mySwal.fire({
        icon: "success",
        title: "The product was successfully updated.",
        showDenyButton: true,
        confirmButtonText: "See Product",
        denyButtonText: "OK",
        reverseButtons: true,
      });

      if (result.isDenied) navigate("/");
      if (result.isConfirmed) navigate(`/products/${nameSlug}`);
    } catch (err) {
      setSubmitting(false);
      setLoading(false);
      mySwal.fire({
        title: err.message || "Something has gone wrong!",
        icon: "error",
      });
    }
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] grid place-items-center px-2 pt-8 pb-14">
      <Container className="relative">
        <Section.Content className="bg-white w-full">
          <Section.Title className="text-center mb-10">
            Update Product
          </Section.Title>
          <UpdateForm onSubmit={handleSubmit} initialValues={currentValues} />
        </Section.Content>
        {(navigation.state === "loading" || loading) && <Loading />}
      </Container>
    </Section>
  );
}

function UpdateForm({ initialValues, onSubmit }) {
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      onSubmit,
      initialValues,
      validationSchema: updateProductSchema,
    });

  return (
    <Form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto flex flex-col gap-2"
    >
      <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2">
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
      <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2">
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
      <div className="flex flex-col md:flex-row items-center gap-x-4 gap-y-2">
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
      <Button type="submit" className="text-lg btn-secondary mt-3">
        Update
      </Button>
    </Form>
  );
}
