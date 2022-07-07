import links from "../data/links.json";
import {useLocation} from "@reach/router";

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
 * @param {string} page next page
 */
export function GetPageLink(page) {
    const loc = useLocation();
    if (loc === undefined) {
        console.log("using window location");
        loc = window.location;
    }
    var href = loc.href;
    // if (windowInfo.href === undefined) href = "";
    // else href = windowInfo.href?.endsWith("/") ? windowInfo.href : windowInfo.href + "/";
    var origin = loc.origin;
    // if (windowInfo.origin === undefined) origin = "";
    // else origin = windowInfo.origin;
    console.log(origin);
    if (origin === undefined || origin.includes("njdaeger.github.io")) origin = "https://njdaeger.github.io/gatsby-playground";
    // if (origin?.includes("njdaeger.github.io")) origin += "/gatsby-playground"
    console.log(origin);
    console.log(page);
    if (page.startsWith("..")) return href + page;
    else if (page.startsWith("/")) return href + page.slice(1);
    else {
        var slice = page.slice(2);
        console.log(slice);
        console.log(origin + "/" + slice ?? "")
        return origin + "/" + page.slice(2) ?? "";
    }
    
}

export function GetHomePage() {
    return GetPageLink("./").replace("/undefined", "");
}