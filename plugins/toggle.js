
export function toggleClassPlugin(element, className) {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    let classes = element.className.split(' ');
    let existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    element.className = classes.join(' ');
  }
};

export function toggleVisibilityPlugin(element, value) {
  element.style.visibility = value ? 'visible' : 'hidden';
};
