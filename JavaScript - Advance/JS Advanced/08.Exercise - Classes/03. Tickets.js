function tickets(array, string) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (const el of array) {
        let [destination, price, status] = el.split('|');
        let currentTicket = new Ticket(destination, Number(price), status);
        result.push(currentTicket);
    }

    if (string === 'destination') {
        result = result.sort((a, b) =>
            a.destination.localeCompare(b.destination)
        );

    } else if (string === 'price') {
        result = result.sort((a, b) => a.price - b.price);
        
    } else if (string === 'status') {
        result = result.sort((a, b) => a.status.localeCompare(b.status));
    }

    return result;
}
let res = tickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed',
    ],
    'destination'
);
console.table(res);
