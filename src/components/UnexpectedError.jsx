import Section from "./Section";
import Container from "./Container";

export default function UnexpectedError() {
  return (
    <Container className="text-center absolute inset-0 grid items-center content-center">
      <Section.Heading>Ooops!</Section.Heading>
      <Section.Title>Something went wrong!</Section.Title>
      <Section.Description className="-mt-4">
        An unexpected error has occurred.
      </Section.Description>
    </Container>
  );
}
