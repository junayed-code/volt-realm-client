import { useNavigate, useParams } from "react-router-dom";
import { updateProductSchema } from "../schemas";
import { mySwal } from "../utils";
import { useQuery } from "@tanstack/react-query";
import { getProductByNameSlug, updateProduct } from "../services/api";
import {
  Button,
  Container,
  Loading,
  Section,
  ProductForm,
} from "../components";

export default function UpdateProduct() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: [name],
    queryFn: getProductByNameSlug.bind(null, name),
  });

  if (isLoading) return <Loading />;

  const { id, nameSlug, ...currentValues } = data || {};
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const copyValues = { ...values };
      for (const key in copyValues) {
        if (copyValues[key] === "") delete copyValues[key];
      }

      await updateProduct(id, copyValues);
      setSubmitting(false);

      // show a modal
      const result = await mySwal().fire({
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
      mySwal().fire({
        title: err.message || "Something has gone wrong!",
        icon: "error",
      });
    }
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] grid place-items-center px-2 pt-8 pb-14">
      <Container className="relative">
        <Section.Content className="bg-base-100 w-full">
          <Section.Title className="text-center mb-10">
            Update Product
          </Section.Title>
          <ProductForm
            onSubmit={handleSubmit}
            initialValues={currentValues}
            validationSchema={updateProductSchema}
            submitButtonText="Update"
          />
        </Section.Content>
      </Container>
    </Section>
  );
}
