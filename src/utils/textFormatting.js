export const splitSentence = (sentence, symbol) => {
    const [topic, rest] = sentence.split(symbol)
    return {topic, rest}
}