# Building the project

Simple as it is:

1. Add envs (check .env.template): you know the drill - `http://localhost:3000` for app url and `local` for config location.
2. Run `npm run build && npm run start`

# Adding a New Question or Answer Component

Data is king, to add a new question to existing config (or create a new config), please, follow the following convention:

## 1. Extend the Question Config File

To add a new question to the existing configuration (or create a new configuration), follow this convention:

```ts
{
  id: string;           // Required for navigation between questions
  type: string;         // Question type (e.g., 'multi-select', 'input', 'select-one', etc.)
  title: string;        // The question to ask the user
  subtitle?: string;    // Optional: Any additional information or statement to follow the question
  topic: string | "info"; // Topic category for saving the data (Use 'info' for informational screens, this data will not be saved to storages)
  options?: string[];   // Optional: If the question includes options, list them here as an array of strings
  next: {               // Navigation logic based on user answer
     // Map user answer to the next question's ID
     // Here are two things to consider
     // 1 - if you don't want to branch on user anser - just provide a "default": "id-to-redirect"
     // 2 - if you need to branch, provide a topic of question that this redirection depends on, and then - options with redirection (check example)
  };
}
```

### Example configuration:

```ts
{
  id: "1",
  type: "select-one",
  title: "What is your favorite color?",
  subtitle: "Choose one option.",
  topic: "preferences",
  options: ["Red", "Blue", "Green", "Yellow"],
    "next": {
      "traits-tend-to-overthink": {
        "yes": "8",
        "no": "15"
      }
    }
}
```

## 2. Update the questionComponents Object

In the `types/Question.ts` file, extend the questionComponents object with the appropriate component name corresponding to your question type.

Example for adding a new question type, multi-select:

```ts
export const questionComponents = {
  SelectOne: "select-one",
  Input: "input",
  MultiSelect: "multi-select", // Add your new question type here
  // ... other question types
} as const;
```

## 3. Create the Question Component

Question component selection is based on `Answer` component factory. Just add a new screen type, create appropriate component and set it at the answer factory.

## 4. Check and adjust `mapQuestionTopicToName` helper to correctly display user answers at the quiz end.

# Adding a new config

Just name it `questions.json` and drop at `public/config`, previous config can be renamed with `-old` tag or whatever.
In case you need to switch from using locally provided config:

1. Adjust the way config is fetched. Currently it's used as a `localConfig` imported directly from the public folder to build static pages at `app/question/[id]`.
2. Adjust the api getter at `app/api` - it checks CONFIG_LOCATION env and downloads the config from the appropriate resource (check the function, it's really straightforward as for now)

# Changing redirection

Currently, as there is no need at the home page, at the `next.config.ts` there is a permanent redirect from `/` to `/question/1`. Feel free to change the config in case there is a need to adjust redirection behaviour.
