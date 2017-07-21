/**
 * 값(URL)을 Node의 src 속성에 출력하는 플러그는
 */
export function srcPlugin(element, urlString) {
  element.setAttribute('src', urlString);
}
