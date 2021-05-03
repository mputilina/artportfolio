import { Control } from './makePres.js';
import { PageSetUp } from './pageSet.js';
function main() {
    const createButton = document.getElementById("create");
    const closeButton = document.getElementById("close");
    if (!(createButton instanceof HTMLButtonElement))
        return;
    if (!(closeButton instanceof HTMLButtonElement))
        return;
    new PageSetUp(createButton, closeButton);
    new Control();
}
main();
//# sourceMappingURL=index.js.map