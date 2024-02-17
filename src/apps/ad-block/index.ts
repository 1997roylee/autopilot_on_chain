import { waitForElements } from '@/utils/dom';
import './injected.css';

function findSpanInNode(
    node: Node | Element | HTMLElement,
    text: string
): ChildNode | null {
    for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (
            child.nodeType === 1 &&
            (child as Element).tagName === 'SPAN' &&
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

waitForElements('div[data-testid="cellInnerDiv"]', (nodes) => {
    nodes.forEach((node) => {
        const span = findSpanInNode(node, 'Ad');
        if (span) {
            const child = node.firstChild as Element;

            return (child.className = `${child.className} block`);
        }
    });
});
