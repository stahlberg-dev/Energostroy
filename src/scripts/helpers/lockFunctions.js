export function lockBody(fixedElements, disablePointerDelay = 0) {
  const isBodyLocked = document.body.classList.contains('locked');

  if (!isBodyLocked) {
    const lockPaddingValue = `${window.innerWidth - document.documentElement.clientWidth}px`;

    document.body.style.paddingRight = lockPaddingValue;

    fixedElements.forEach(item => {
      const isFullWidth = item.offsetWidth === document.documentElement.clientWidth;

      if (isFullWidth) {
        item.style.paddingRight = lockPaddingValue;
      } else {
        const rightValue = `${window.innerWidth - item.getBoundingClientRect().right}px`;
        item.style.right = rightValue;
      }
    });
  }

  document.body.classList.add('locked', 'disable-pointer');

  setTimeout(() => {
    document.body.classList.remove('disable-pointer');
  }, disablePointerDelay);
}

export function unlockBody(fixedElements, unlockDelay = 0) {
  document.body.classList.add('disable-pointer');

  setTimeout(() => {
    document.body.classList.remove('locked', 'disable-pointer');
    document.body.style.paddingRight = '';

    fixedElements.forEach(item => {
      const isFullWidth = item.offsetWidth === document.documentElement.clientWidth;

      if (isFullWidth) {
        item.style.paddingRight = '';
      } else {
        item.style.right = '';
      }
    });
  }, unlockDelay);
}
