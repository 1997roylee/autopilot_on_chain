import { waitForElements } from '@/utils/dom';
import './injected.css';

function findSpanInNode(
    node: Node | Element | HTMLElement,
    text: string
): ChildNode | null {
    for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (
            child.nodeType === 1 &&
            (child as any).tagName === 'SPAN' &&
            child.textContent === text
        ) {
            return child;
        } else if (child.childNodes.length > 0) {
            const result = findSpanInNode(child, text);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
}

console.log('injected ad-block script');

waitForElements('div[data-testid="cellInnerDiv"]', (nodes) => {
    console.log('nodes', nodes);
    nodes.forEach((node) => {
        const span = findSpanInNode(node, 'Ad');
        if (span) {
            return (node.className = `${node.className} tweet-block`);
        }
    });
});
