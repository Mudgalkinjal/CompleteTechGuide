/**
 * 21. Merge Two Sorted Lists, Blind 150
 *
 * Merges two sorted linked lists into one sorted linked list.
 * Uses a dummy head to simplify the merging process.
 *
 * Time Complexity: O(n + m) - where n and m are the lengths of list1 and list2 respectively.
 * Space Complexity: O(1) - constant extra space is used.
 *
 * @param {ListNode} list1 - The first sorted linked list.
 * @param {ListNode} list2 - The second sorted linked list.
 * @return {ListNode} - The head of the merged sorted linked list.
 */
var mergeTwoLists = function(list1, list2) {
    // Create a dummy node to serve as the start of the merged list.
    let head = { val: -1, next: null };
    let temp = head;
    
    // Merge nodes from both lists until one is exhausted.
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            temp.next = list1;
            list1 = list1.next;
        } else {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    
    // Attach any remaining nodes from either list.
    temp.next = list1 || list2;
    return head.next;
};