import { Link } from "react-router-dom";

export default function Card({ className = "", to, children }) {
  if (to) {
    return (
      <Link className={"card ".concat(className).trim()} to={to}>
        {children}
      </Link>
    );
  }

  return <div className={"card ".concat(className).trim()}>{children}</div>;
}

// Card image component
Card.Image = ({ className, src, alt, children }) => (
  <figure className={className}>
    {children ? (
      children
    ) : (
      <img className="w-full aspect-video object-cover" src={src} alt={alt} />
    )}
  </figure>
);

// Card body component
Card.Body = ({ className = "", children }) => (
  <div className={"card-body ".concat(className).trim()}>{children}</div>
);

// Card title component
Card.Title = ({ className, children }) => (
  <h3 className={"card-title ".concat(className).trim()}>{children}</h3>
);

// Card text component
Card.Text = ({ className, children }) => (
  <p className={className}>{children}</p>
);

// Card box component
Card.Box = ({ className, children }) => (
  <div className={className}>{children}</div>
);
