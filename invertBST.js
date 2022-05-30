const invertTree = (tree) => {
    if(!tree) {
      return;
    }
    
    const left = invertTree(tree.left);
    const right = invertTree(tree.right);
    
    tree.left = right;
    tree.right = left;
    
    return tree;
  }

  const tree ={
    "root": {
        "data": 8,
        "left": {
            "data": 3,
            "left": {
                "data": 1,
                "left": null,
                "right": null
            },
            "right": {
                "data": 6,
                "left": {
                    "data": 4,
                    "left": null,
                    "right": null
                },
                "right": {
                    "data": 7,
                    "left": null,
                    "right": null
                }
            }
        },
        "right": {
            "data": 10,
            "left": null,
            "right": {
                "data": 14,
                "left": {
                    "data": 13,
                    "left": null,
                    "right": null
                },
                "right": null
            }
        }
    }
}
const res= invertTree(tree);
res