import links from "../data/links.json";

export function getLink(id) {
    return links.find(link => link.id === id).link;
}

/*

page formats:

../page will go back a page
/page references a document from the current directory
./page references a document from the root

 */
/**
 * 
 * @param {object} windowInfo window location
 * @param {string} page next page
 */
export function getPageLink(windowInfo, page) {
    var href = windowInfo.href.endsWith("/") ? windowInfo.href : windowInfo.href + "/";
    var origin = windowInfo.origin;
    if (page.startsWith("..")) return href + page;
    else if (page.startsWith("/")) return href + page.slice(1);
    else return origin + "/" + page.slice(2);
}