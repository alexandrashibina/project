const openItem = (item) => {
    const hiddenContent = item.find(".products__content");
    const requiredWidth = measureWidth(item);
    const textBlock = item.find(".products__container");
    textBlock.width(requiredWidth.textContainer);

    item.addClass("active");
    hiddenContent.width(requiredWidth.container);
};

const measureWidth = (item) => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".products");
    const titlesBlocks = container.find(".products__title")
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
    
    const textContainer = item.find(".products__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if(isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
    
};

const closeEveryItemInContainer = (container) => {
    const items = container.find(".products__item");
    const content = container.find(".products__content");

    items.removeClass("active");
    content.width(0);
};

$(".products__title").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".products__item");
    const itemOpened = item.hasClass("active");
    const container =  $this.closest(".products");

    if (itemOpened) {
        closeEveryItemInContainer(container)
    } else {
        closeEveryItemInContainer(container);
        openItem(item);
    }
});

$(".products__close").on("click", e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const container =  $this.closest(".products");

    closeEveryItemInContainer(container)
});