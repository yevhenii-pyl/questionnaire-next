import QuestionHeader from "@/components/QuestionHeader/QuestionHeader";

export default function QuestionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QuestionHeader />
      {children}
    </>
  );
}
