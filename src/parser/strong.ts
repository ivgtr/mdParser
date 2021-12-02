const STRONG_ELM_REGXP = /\*\*(.*?)\*\*/;

export const matchWithStrongRegxp = (text: string) => text.match(STRONG_ELM_REGXP);
