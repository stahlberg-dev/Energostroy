import { lockBody, unlockBody } from './lockFunctions.js';

export class Popup {
  constructor(config) {
    this.animationTime = config.animationTime ?? 0;
  }

  open(currentPopup, ...callBacks) {
    if (!currentPopup) {
      return;
    }

    const activePopups = document.querySelectorAll('.popup-active');
    const fixedElements = document.querySelectorAll('.js-fixed-element');

    lockBody(fixedElements, this.animationTime);

    activePopups.forEach(activePopup => {
      activePopup.classList.remove('popup-active');
    });

    currentPopup.classList.add('popup-active');

    callBacks.forEach(callBack => {
      if (typeof callBack === 'function') {
        callBack();
      }
    });
  }

  close(currentPopup, ...callBacks) {
    const isPointerDisabled = document.body.classList.contains('disable-pointer');

    if (!currentPopup || isPointerDisabled) {
      return;
    }

    const isCurrentPopupOpened = currentPopup.classList.contains('popup-active');

    if (!isCurrentPopupOpened) {
      return;
    }

    currentPopup.classList.remove('popup-active');

    const fixedElements = document.querySelectorAll('.js-fixed-element');
    unlockBody(fixedElements, this.animationTime);

    callBacks.forEach(callBack => {
      if (typeof callBack === 'function') {
        callBack();
      }
    });
  }
}
