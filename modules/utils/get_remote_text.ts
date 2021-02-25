interface Options {
  headers?: Record<string, string>;
}

async function doFetch(url: string, options: Options): Promise<string | void> {
  const opt: Options = {};
  if (options.headers) {
    opt.headers = options.headers;
  }
  try {
    const res = await fetch(url, opt);
    const text = await res.text();
    if (text) {
      return text;
    } else {
      console.warn("ERROR: content is empty, retry...");
      await doFetch(url, options);
    }
  } catch (e) {
    console.error(e);
    console.warn("ERROR: retry...");
    await doFetch(url, options);
  }
}

export async function getRemoteText(
  url: string,
  options: Options,
) {
  return await doFetch(url, options);
}
