const vNodeType  = {
    HTML: "HTML",
    TEXT: "TEXT",
    COMPONENT: "COMPONENT",
    CLASS_COMPONENT: "CLASS_COMPONENT"
}
const childrenType = {
    EMPTY: "EMPTY",
    SINGLE: "SINGLE",
    MULTIPLE: "MULTIPLE"
}



import { patchData } from './patch'
// mount
export function mount(vNode: Target, container: Target, flagNode?: Target) {
    let {
        flag
    } = vNode || {};

    if (flag == vNodeType.HTML) {
        mountElement(vNode, container, flagNode);
    } else if (flag = vNodeType.TEXT) {
        mountText(vNode, container);
    }
}

//挂载元素
function mountElement(vNode: Target, container: Target, flagNode?: Target) {
    let dom = document.createElement(vNode.tag);
    vNode.el = dom;
    let {
        data,
        children,
        childrenFlag
    } = vNode;
    // 挂载data
    if (data) {
        for (let key in data) {
            // 节点，名字，老值，新值.
            patchData(dom, key, null, data[key])
        }
    }
    // 挂载子元素
    if (childrenFlag !== childrenType.EMPTY) {
        if (childrenFlag === childrenType.SINGLE) {
            mount(children, dom)
        } else if (childrenFlag === childrenType.MULTIPLE) {
            for (let i = 0; i < children.length; i++) {
                mount(children[i], dom);
            }
        }
    }
    if (flagNode) {
        container.insertBefore(dom, flagNode);
    } else {
        container.appendChild(dom);
    }

}

// 挂载文本
function mountText(vNode: Target, container: Target) {
    let dom = document.createTextNode(vNode.children);
    vNode.el = dom;
    container.appendChild(dom);
}
