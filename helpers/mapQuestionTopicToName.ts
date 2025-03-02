export type Topic =
  | "gender"
  | "relationship"
  | "single-parent"
  | "parent"
  | "single-problem"
  | "traits-tend-to-overthink"
  | "traits-emotional-control"
  | "traits-most-important"
  | "relationship-problem"
  | "partner-introvert-or-extrovert"
  | "partner-gender"
  | "partner-priority"
  | "think-about-relationship-goals"
  | "relationship-about-us";

const topicToName: { [key in Topic]: string } = {
  gender: "Your gender",
  relationship: "Relationship status",
  "single-parent": "You are a single parent",
  parent: "You are a parent",
  "single-problem": "What do you feel about your relationsip",
  "traits-tend-to-overthink": "You are an overthinker",
  "traits-emotional-control": "Emotional control is tricky for you",
  "traits-most-important": "Most important for you is",
  "relationship-problem": "What do you feel about your relationsip",
  "partner-introvert-or-extrovert":
    "Your partner is mostly introvert or extravert",
  "partner-gender": "Your partner gender",
  "partner-priority":
    "Your partner and you are making sex a priority in our relationship",
  "think-about-relationship-goals": "Relationship goals",
  "relationship-about-us": "You heard about us from",
};

const mapQuestionTopicToName = (topic: Topic): string => {
  return topicToName[topic];
};

export default mapQuestionTopicToName;
