export async function waitForElements(
    selector: string,
    callback: (nodes: (Element | HTMLElement)[]) => void
) {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach((mutation) => {
            const nodes = Array.from(mutation.addedNodes);
            const matches = nodes.filter((node) => {
                if (node.nodeType == Node.ELEMENT_NODE)
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-explicit-any
                    return (
                        !!(node as any).matches &&
                        (node as any).matches(selector)
                    );
            });
            if (matches.length > 0) {
                // observer.disconnect();
                callback(matches as HTMLElement[]);
            }
        });
    });
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
}
