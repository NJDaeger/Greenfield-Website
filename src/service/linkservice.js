import links from "../data/links.json";

export function getLink(id) {
    return links.find(link => link.id === id).link;
}