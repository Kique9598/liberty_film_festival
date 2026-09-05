export function scrollToTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

export function getPathFromTo(to: string) {
  return to.split("#")[0].split("?")[0];
}

export function isSamePath(currentPath: string, to: string) {
  return currentPath === getPathFromTo(to);
}

export function handleSameRouteClick(currentPath: string, to: string) {
  if (isSamePath(currentPath, to)) {
    scrollToTop();
  }
}
