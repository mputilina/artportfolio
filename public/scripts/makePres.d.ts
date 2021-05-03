export declare class Control {
    isResizableImg: Boolean;
    isResizableTxt: Boolean;
    newSquare: number;
    currentSlide: number;
    constructor();
    manageSlides(): void;
    doAction(value: string): void;
    upSlide(): void;
    downSlide(): void;
    deleteSlide(): void;
    _handleClick(event: Event): void;
    createNewSlide(): void;
    createImage(slideID: string): void;
    createTxt(slideID: string): void;
    pickColor(slideID: string): void;
}
