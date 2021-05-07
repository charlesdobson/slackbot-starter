import { post } from "./utils";
import { Logger } from "tslog";
import dotenv from "dotenv";

dotenv.config();

const log: Logger = new Logger();

const run = async (): Promise<void> => {
  const postMessage = post(process.env.SLACK_WEBHOOK)({
    Authorization: `Bearer ${process.env.SLACK_TOKEN_TYPE}`,
  });

  const message: string = "your message here...";

  try {
    log.info("Starting...");
    await postMessage({ text: message, as_user: true });
  } catch (err) {
    log.error(err);
  }
};

run();
