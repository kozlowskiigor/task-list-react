import "./style.css";

export const Section = ({ title, body, extraHeaderContent }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__title">{title}</h2>
      {extraHeaderContent}
    </header>
    {body}
  </section>
);