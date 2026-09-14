import Button from "../components/Button";
import Section from "../components/Section";
import { contactLinks } from "../data/contactLinks";

const Tickets = () => {
  return (
    <Section variant="hero" className="bg-[#DCD8C9]">
      <div className="mx-auto flex max-w-2xl flex-col gap-6">
        <p className="label-caps mb-0 text-gold-600">Tickets</p>
        <h1 className="mb-0">Tickets aren't on sale yet.</h1>
        <p className="mb-0 text-lg text-muted">
          The Liberty screening & awards night happens live in NYC this
          February. Follow the festival on social media to be first in line when
          tickets open — before we post anywhere else.
        </p>

        <div className="flex flex-col gap-3 pt-2">
          <p className="mb-0 text-sm uppercase tracking-[0.12em] text-gold-600">
            Follow for updates
          </p>
          <Button
            link={contactLinks.linktree}
            label="Open Linktree"
            variant="gold"
          />
        </div>
      </div>
    </Section>
  );
};

export default Tickets;
