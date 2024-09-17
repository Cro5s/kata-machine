type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;

        // Increase the size of the Queue
        this.length++;

        // If there is no tail create a new object with the value, head, and tail
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }

        // If there is no head create a new object with the value, head, and tail
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        // If there is no head return undefined
        if (!this.head) {
            return undefined;
        }

        // If there is no Queue then set the tail to undefined
        if (this.length === 0) {
            this.tail = undefined;
        }

        // Decrease the size of the Queue
        this.length--;

        // Keep track of the current head and then update the head to point to the next node
        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        // Return the value of the node
        return this.head?.value;
    }
}
