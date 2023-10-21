import { Link } from "react-router-dom";
import { Section } from "../components";
import _404 from "../assets/404.png";

export default function ErrorPage() {
  return (
    <Section className="grid place-items-center min-h-screen p-6 bg-amber-50">
      <Section.Content className="grid md:grid-cols-2 gap-4 max-w-[940px]">
        <div className="text-center md:order-1">
          <h1 className="text-[150px] font-extrabold">404</h1>
          <h2 className="text-2xl font-bold">
            Oh no, the page you were searching for cannot be found.
          </h2>
          <p className="font-semibold text-xl mt-4">
            If you want, you can go back to the{" "}
            <Link to="/" className="text-primary">
              homepage.
            </Link>
          </p>
        </div>
        <div className="flex items-center">
          <img src={_404} alt="This Page is Not Found" />
        </div>
      </Section.Content>
    </Section>
  );
}
