// @ts-check
class PageBuilder { 
    /**
     * @private
     * @readonly
     * @type {{
     *  name: string,
     *  path: string,
     *  element: HTMLElement | undefined
     * }}
     */
    _page;

    /**
     * Instantiate a page builder using default values
     */
    constructor() {
        this._page = {
            name: "",
            path: "",
            element: undefined
        }
    }

    /**
     * Set the page's name
     * @param {string} name
     * @returns builder
     */
    setName(name) {
        this._page.name = name;
        return this;
    }

    /**
     * Sets the path to the page
     * @param {string} path
     * @returns builder
     */
    setPath(path) {
        this._page.path = path;
        return this;
    }

    /**
     * Set the element to be rendered
     * @param {HTMLElement} el 
     * @returns 
     */
    setElement(el) {
        this._page.element = el;
        return this;
    }

    build() {
        return this._page;
    }

    get name() {
        return this._page.name
    }
    
    get path() {
        return this._page.path
    }

    get element() {
        return this._page.element
    }
}

export { PageBuilder }