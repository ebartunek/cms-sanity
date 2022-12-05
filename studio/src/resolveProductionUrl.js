export default function resolveProductionUrl(document) {
    return `http://localhost:3000.com/${document.slug.current}`
  }