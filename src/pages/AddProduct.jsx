import { addProductSchema } from "../schemas";
import { mySwal } from "../utils";
import { addProduct } from "../services/api";
import {
  Button,
  Container,
  Loading,
  Section,
  ProductForm,
} from "../components";

export default function AddProduct() {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await addProduct(values);

      mySwal()
        .fire({
          icon: "success",
          title: "Successfully added a new product.",
        })
        .then(() => resetForm());
    } catch (err) {
      mySwal().fire({
        title: err.message || "Something has gone wrong!",
        icon: "error",
      });
    }
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] px-2 py-8">
      <Container className="relative">
        <Section.Content className="bg-base-100 w-full">
          <Section.Title className="text-center mb-8">
            Add a New Product
          </Section.Title>
          <ProductForm
            onSubmit={handleSubmit}
            validationSchema={addProductSchema}
            submitButtonText="Add Product"
          />
        </Section.Content>
      </Container>
    </Section>
  );
}
