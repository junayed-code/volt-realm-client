import { Button, Section } from "../../components";

export default function Banner() {
  return (
    <Section className="hero min-h-[calc(100vh-80px)]">
      <Section.Content className="hero-content flex-col lg:flex-row w-[96%] py-10 lg:py-1">
        <div className="flex-1 lg:-mt-20 text-center lg:text-left">
          <Section.Heading>Your Source for Innovative Gadgets</Section.Heading>
          <Section.Description className="mb-5">
            From Smartphones to Smart Homes, Shop the Latest and Greatest in
            Electronics, Gadgets, and More.
          </Section.Description>
          <Button className="text-lg btn-primary w-36">Get Start</Button>
        </div>
        <div className="flex-1 self-end">
          <img
            src="/images/illustration/online-shopping-9.png"
            alt="Illustation Image"
          />
        </div>
      </Section.Content>
    </Section>
  );
}
