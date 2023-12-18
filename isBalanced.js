var isBalanced = function(root) {

    const isTreeBalanced = (root) =>{

        if (root === null){
            return [0,true];
        }
        const [rh, isRChildBalanced] = isTreeBalanced(root.right);
        const [lh, isLChildBalanced] = isTreeBalanced(root.left);

        maxH =  1 + Math.max(rh,lh);

        if (Math.abs(rh-lh) > 1 || !isRChildBalanced || !isLChildBalanced){
            return [maxH,false];
        }
        return [maxH, true];
    }

    const [height, isB] = isTreeBalanced(root)

    return isB

};