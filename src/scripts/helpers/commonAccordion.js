export class Accordion {
  constructor(config) {
    this.accordionElement = config.accordionElement;
    this.sectionClass = config.sectionClass;
    this.activeSectionClass = config.activeSectionClass;
    this.sectionTitleClass = config.sectionTitleClass;
    this.sectionContentWrapperClass = config.sectionContentWrapperClass;
    this.sectionContentClass = config.sectionContentClass;
    this.showHideTime = config.showHideTime;
  }

  onLoad({ accordionElement, sectionContentWrapperClass, sectionContentClass, showHideTime }) {
    const sectionContentWrappers = accordionElement.querySelectorAll(sectionContentWrapperClass);
    const sectionContents = accordionElement.querySelectorAll(sectionContentClass);

    sectionContentWrappers.forEach(sectionContentWrapper => {
      sectionContentWrapper.style.maxHeight = '0px';
      sectionContentWrapper.style.overflow = 'hidden';
      sectionContentWrapper.style.transition = `max-height ${showHideTime}ms ease`;
    });

    sectionContents.forEach(sectionContent => {
      sectionContent.style.display = 'none';
    });
  }

  onClick({
    accordionElement,
    sectionClass,
    activeSectionClass,
    sectionTitleClass,
    sectionContentWrapperClass,
    sectionContentClass,
    showHideTime,
  }) {
    const titles = accordionElement.querySelectorAll(sectionTitleClass);

    titles.forEach(title => {
      title.addEventListener('click', event => {
        const closestSection = event.target.closest(sectionClass);

        if (!closestSection) {
          return;
        }

        const isActive = closestSection.classList.contains(activeSectionClass.slice(1));

        accordionElement.style.pointerEvents = 'none';

        setTimeout(() => {
          accordionElement.style.pointerEvents = 'auto';
        }, showHideTime);

        const closestSectionContentWrapper = closestSection.querySelector(
          sectionContentWrapperClass
        );
        const closestSectionContent = closestSection.querySelector(sectionContentClass);

        if (!isActive) {
          closestSection.classList.add(activeSectionClass.slice(1));
          closestSectionContent.style.display = 'block';
          closestSectionContentWrapper.style.maxHeight = `${closestSectionContent.offsetHeight}px`;

          setTimeout(() => {
            closestSectionContentWrapper.style.maxHeight = '';
          }, showHideTime);
        } else {
          closestSection.classList.remove(activeSectionClass.slice(1));
          closestSectionContentWrapper.style.maxHeight = `${closestSectionContent.offsetHeight}px`;

          setTimeout(() => {
            closestSectionContentWrapper.style.maxHeight = '0px';
          }, 0);

          setTimeout(() => {
            closestSectionContent.style.display = 'none';
          }, showHideTime);
        }
      });
    });
  }

  init() {
    const accordion = this.accordionElement;

    if (!(accordion instanceof HTMLElement)) {
      return;
    }

    this.onLoad(this);
    this.onClick(this);
  }
}
