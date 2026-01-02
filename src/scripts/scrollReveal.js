export default function initScrollReveal(targetElements, defaultProps) {
  if (!targetElements.length) return;

    const sr = ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    sr.reveal(element, Object.assign({}, defaultProps, animation));
  });
}
