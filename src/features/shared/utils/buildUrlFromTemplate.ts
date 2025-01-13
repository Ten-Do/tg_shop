export const buildUrlFromTemplate = (
  template?: string,
  params: { [key: string]: unknown } = {},
): string | never => {
  if (!template) {
    return '#';
  }
  const url = template.replace(/\/:\w+/g, (match) => {
    const key = match.slice(2);

    if (params[key] !== undefined) {
      return '/' + encodeURIComponent(String(params[key]));
    }
    return '#';
  });

  return url;
};
