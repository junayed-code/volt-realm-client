export default function Section({ className, children }) {
  return <section className={className}>{children}</section>;
}

// Section heading component
Section.Heading = ({ className = "", children }) => (
  <h1
    className={"text-4xl sm:text-6xl font-bold mb-5 ".concat(className).trim()}
  >
    {children}
  </h1>
);

// Section title component
Section.Title = ({ className = "", children }) => (
  <h2
    className={"text-2xl sm:text-3xl font-bold mb-5 ".concat(className).trim()}
  >
    {children}
  </h2>
);

// Section description component
Section.Description = ({ className = "", children }) => (
  <p className={"text-base-content/75 sm:text-lg ".concat(className).trim()}>
    {children}
  </p>
);

// Section content component
Section.Content = ({ className, children }) => (
  <div className={className}>{children}</div>
);
