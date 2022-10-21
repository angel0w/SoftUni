window.addEventListener("load", solve);

function solve() {
    document.querySelector("button[type='submit']").addEventListener('click', createTask)
    let typeProduct = document.getElementById('type-product');
    let description = document.getElementById('description');
    let clientName = document.getElementById('client-name');
    let clientPhone = document.getElementById('client-phone');
    let receiveOrders = document.getElementById('received-orders');
    let completedOrders = document.getElementById('completed-orders');

    let clearBtn = completedOrders.querySelector("button");
    clearBtn.addEventListener('click', clearOrders);

    function createTask(e) {
        e.preventDefault();

        if(!description.value || !clientName.value || !clientPhone.value) {
            return;
        }

        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
        let buttonStart = document.createElement('button')
        let buttonFinish = document.createElement('button');

        buttonStart.addEventListener('click', startRepairBtn);
        buttonFinish.addEventListener('click', finishRepairBtn);

        h2.textContent = `Product type for repair: ${typeProduct.value}`;
        h3.textContent = `Client information: ${clientName.value}, ${clientPhone.value}`;
        h4.textContent = `Description of the problem: ${description.value}`
        div.classList.add('container')
        buttonStart.classList.add('start-btn');
        buttonFinish.classList.add('finish-btn');
        buttonStart.textContent = 'Start repair';
        buttonFinish.textContent = 'Finish repair';
        buttonFinish.setAttribute('disabled',true);

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(h4);
        div.appendChild(buttonStart);
        div.appendChild(buttonFinish);
        receiveOrders.appendChild(div);



        description.value = '';
        clientName.value = '';
        clientPhone.value = '';
    }


    function startRepairBtn(e) {
        e.target.setAttribute('disabled', true);
        let finishBtn = e.target.parentElement.getElementsByClassName('finish-btn')[0];
        finishBtn.disabled = false;

    }

    function finishRepairBtn(e) {
        let finishOrder = e.target.parentElement;
        completedOrders.appendChild(finishOrder)
        Array.from(e.target.parentElement.querySelectorAll('button')).forEach(btn => btn.remove())
    }

    function clearOrders(e) {
        let divCont = Array.from(e.target.parentElement.querySelectorAll('.container'));
        divCont.forEach(div => div.remove());
    }
}