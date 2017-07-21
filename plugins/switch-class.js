/**
 * 데이타가 참일 경우 onClassName, 거짓일 경우 offClassName 으로 class 값을 설정한다
 * 
 * NODE 설정 예:
 * <button class="btn" data-role="bind" 
 *    data-name="isLarge" 
 *    data-on-class-name="btn-lg" 
 *    data-off-class-name="btn-sm"
 *  >Save Data</button>
 */
export function switchClassPlugin(element, on) {
  let { onClassName, offClassName } = element.dataset;

  if (on) {
    element.classList.remove(offClassName);
    element.classList.add(onClassName);
  } else {
    element.classList.remove(onClassName);
    element.classList.add(offClassName);
  }
};
