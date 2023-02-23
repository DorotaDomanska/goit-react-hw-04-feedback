export const Section = (props) => {
  const { title, children } = props;

  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
