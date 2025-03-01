import QuestionHeader from "@/components/QuestionHeader/QuestionHeader";
import getQuestionById from "@/helpers/getQuestionById";

export default async function QuestionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await getQuestionById(id);

  const isWhiteTheme = question?.topic === "info";

  return (
    <>
      <QuestionHeader id={id} whiteTheme={isWhiteTheme} />
      {children}
    </>
  );
}
