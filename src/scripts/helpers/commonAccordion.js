export class Accordion {
  constructor(config) {
    this.accordionElement = config.accordionElement;
    this.sectionClass = config.sectionClass;
    this.activeSectionClass = config.activeSectionClass;
    this.sectionTitleClass = config.sectionTitleClass;
    this.sectionContentWrapperClass = config.sectionContentWrapperClass;
    this.sectionContentClass = config.sectionContentClass;
    this.showHideTime = config.showHideTime;
    this.onLoadActiveSectionNums = config.onLoadActiveSectionNums;
  }

  onLoad({
    accordionElement,
    sectionClass,
    activeSectionClass,
    sectionContentWrapperClass,
    sectionContentClass,
    showHideTime,
    onLoadActiveSectionNums,
  }) {
    const sections = accordionElement.querySelectorAll(sectionClass);
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

    onLoadActiveSectionNums?.forEach(num => {
      if (!sections?.[num]) return;

      const contentWrapper = sections[num].querySelector(sectionContentWrapperClass);
      const content = sections[num].querySelector(sectionContentClass);

      sections[num].classList.add(activeSectionClass.slice(1));
      content.style.display = 'block';
      contentWrapper.style.maxHeight = '';
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

        const activeSections = document.querySelectorAll(activeSectionClass);
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
          activeSections.forEach(activeSection => {
            const activeSectionContentWrapper = activeSection.querySelector(
              sectionContentWrapperClass
            );
            const activeSectionContent = activeSection.querySelector(sectionContentClass);

            activeSection.classList.remove(activeSectionClass.slice(1));

            activeSectionContentWrapper.style.maxHeight = `${activeSectionContent.offsetHeight}px`;

            setTimeout(() => {
              activeSectionContentWrapper.style.maxHeight = '0px';
            }, 0);

            setTimeout(() => {
              activeSectionContent.style.display = 'none';
            }, showHideTime);
          });

          closestSection.classList.add(activeSectionClass.slice(1));
          closestSectionContent.style.display = 'block';
          closestSectionContentWrapper.style.maxHeight = `${closestSectionContent.offsetHeight}px`;

          setTimeout(() => {
            closestSectionContentWrapper.style.maxHeight = '';
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
