//Linked List
class ListNode {
    constructor(value ,next){
        this.value = value === undefined ? 0 :value;
        this.next = next===undefined ? null : next
    }
}


const mergTwolistA = (list1,list2) =>{
    const prehead = new ListNode()
    let cur = prehead

    while(list1 && list2){
        if (list1.value <= list2.value){
            cur.next = list1
            list1 = list1.next
        }else{
            cur.next = list2;
            list2 = list2.next;
        }
        cur = cur.next;
    }
    cur.next = list1 !== null? list1 : list2

    return prehead.next;
}

const mergTwolistB = (list1, list2) =>{

    if (list1 === null){return list2};
    if (list2 === null){return list1};

    if (list1.value <= list2.value){
        list1.next = mergTwolistB(list1.next,list2);
        return list1;
    }else{
        list2.next = mergTwolistB(list2.next,list2);
        return list2;
    }
}





