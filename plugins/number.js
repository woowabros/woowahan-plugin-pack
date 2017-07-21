/**
 * 숫자를 다양한 형태의 문자열로 변환하는 플러그인
 */
const EXP = /(\d)(?=(?:\d{3})+(?!\d))/g;

/**
 * 1000 단위를 콤마로 구분
 */
export function separatedByCommas(element, num) {
  $(element).text(String(num || 0).replace(EXP, '$1,'));
}
