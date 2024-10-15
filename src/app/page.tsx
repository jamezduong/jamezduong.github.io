import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { Socials } from "./components/socials";
import { Section } from "./components/ui/section";
import { WorkExperience } from "./components/work-experience";

export default function Main() {
  return (
    <div>
      <div className="container mx-auto max-w-2xl px-4">
        <Section>
          <Header />
        </Section>
        <Section>
          <WorkExperience />
        </Section>
        <Section>
          <Projects />
        </Section>
        <Section>
          <Socials />
        </Section>
      </div>
      <Footer />
    </div>
  );
}
