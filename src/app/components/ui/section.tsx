import { FadeIn } from "@/app/components/FadeIn";

export function Section({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <FadeIn>
      <div className="mb-10 md:mb-20">{children}</div>
    </FadeIn>
  );
}
