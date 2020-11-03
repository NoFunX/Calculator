let numbers = document.querySelectorAll(".buttons_number"),
    operations = document.querySelectorAll(".buttons_operation"),
    decimal = document.querySelector(".buttons_decimal"),
    clear = document.querySelectorAll(".buttons_clear"),
    output = document.querySelector("input"),
    MemoryCurrentValue = 0,
    MemoryNewValue = false,
    MemoryPendingOperation = "";

    

for(let i=0; i<numbers.length; i++) {
    numbers[i].addEventListener("click", numberPress)
};

for(let i=0; i<operations.length; i++) {
    operations[i].addEventListener("click", (event)=>{
        operation(event.srcElement.textContent)
    })
};

for(let i=0; i<clear.length; i++){
    clear[i].addEventListener("click", (event)=>{
        Clear(event.srcElement.value);
    })
}

decimal.addEventListener("click", Decimal);




function numberPress (event) {
    if(MemoryNewValue) {
        output.value = event.srcElement.value;
        MemoryNewValue = false;
    } else {if (output.value === '0') {
        output.value = event.srcElement.value;
    } else  {
        output.value += event.srcElement.value;}}

    
    
    

}

function operation (oper) {
    let localoperationmemory = output.value;

    if(MemoryNewValue && MemoryPendingOperation !=='=') {
        output.value = MemoryCurrentValue;
    } else {
        MemoryNewValue = true;

        if(MemoryPendingOperation ==="+") {
            MemoryCurrentValue += parseFloat(localoperationmemory);
        } else if (MemoryPendingOperation ==="-") {
            MemoryCurrentValue -= parseFloat(localoperationmemory);
        } else if(MemoryPendingOperation =="*") {
            MemoryCurrentValue *= parseFloat(localoperationmemory);
        } else if (MemoryPendingOperation =="/") {
            MemoryCurrentValue /= localoperationmemory;
        } else {
            MemoryCurrentValue = parseFloat(localoperationmemory);
        };

        output.value = MemoryCurrentValue;
        MemoryPendingOperation = oper;
    }


}

function Decimal (event) {
    let localDecimalMemory = output.value;

    if(MemoryNewValue) {
        localDecimalMemory = "0.";
        MemoryNewValue = false;
    } else {
        if(localDecimalMemory.indexOf(".") ===-1) {
            localDecimalMemory += ".";
        };

        output.value = localDecimalMemory;
    }
}

function Clear (value) {
    if(value ==="CE") {
        output.value = "0";
        MemoryNewValue = true;
    } else if(value ==="C") {
        output.value = "0";
        MemoryNewValue = true;
        MemoryCurrentValue = 0;
        MemoryPendingOperation = 0;
    }
};


    


