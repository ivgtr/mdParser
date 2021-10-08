const STRONG_ELM_REGXP = /\*\*(.*?)\*\*/;

const matchWithStrongRegxp = (text: string) => text.match(STRONG_ELM_REGXP);

export { matchWithStrongRegxp };
