import QuestionHeader from "@/components/QuestionHeader/QuestionHeader";

export default async function QuestionLayout({
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
