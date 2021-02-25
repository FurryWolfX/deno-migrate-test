import { getRemoteText } from "./get_remote_text.ts";

const content = await getRemoteText("https://www.google.com", {});
console.log(content);
