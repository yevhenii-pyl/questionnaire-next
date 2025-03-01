import { NextResponse } from "next/server";

import localConfig from "@/public/config/questions.json";
import { Question } from "@/types/Question";

const { CONFIG_LOCATION } = process.env;

const getLocalConfig = (): Question[] => localConfig as unknown as Question[];

async function GET() {
  let config;

  if (CONFIG_LOCATION === "local") config = getLocalConfig();

  return NextResponse.json(config);
}

export { GET };
