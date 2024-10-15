export function Section({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return <div className="mb-10 md:mb-20">{children}</div>;
}
