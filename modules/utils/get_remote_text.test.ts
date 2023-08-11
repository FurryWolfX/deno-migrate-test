import { getRemoteText } from "./get_remote_text.ts";

const content = await getRemoteText("https://www.baidu.com", {});
console.log(content);
