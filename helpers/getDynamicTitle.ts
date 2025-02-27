const generateValueBasedOnPlaceholder = (
  placeholder: string,
  answers: { [key: string]: string }
) => {
  switch (placeholder) {
    case "single-parent":
      return answers["single-parent"] === "yes" ? "who has children" : " ";
    default:
      return answers[placeholder];
  }
};

const getDynamicTitle = (title: string) => {
  const regex = /\{([^}]+)\}/g;

  const answers = JSON.parse(sessionStorage.getItem("answers") || "{}");

  const placeholders = Array.from(title.matchAll(regex)).map(
    (match) => match[1]
  );

  const dynamicValues = placeholders.reduce((acc, placeholder) => {
    const value = generateValueBasedOnPlaceholder(placeholder, answers);

    acc[placeholder] = value || `{${placeholder}}`;
    return acc;
  }, {} as Record<string, string>);

  return title.replace(regex, (_, placeholder) => dynamicValues[placeholder]);
};

export default getDynamicTitle;
