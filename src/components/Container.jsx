export default function Container({ className = "", children }) {
  return (
    <div className={"max-w-7xl mx-auto w-[95%] ".concat(className).trim()}>
      {children}
    </div>
  );
}

Container.Main = ({ className, children }) => (
  <main className={className}>{children}</main>
);
