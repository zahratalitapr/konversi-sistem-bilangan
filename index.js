// Binary Convert
function convertToBinary(){
    const numberInput = parseInt(document.getElementById("input-number").value);
    const binaryResult = numberInput.toString(2);
    document.getElementById("result").innerHTML = binaryResult;
}

// Octal Convert
function convertToOctal(){
    const numberInput = parseInt(document.getElementById("input-number").value);
    const octalResult = numberInput.toString(8);
    document.getElementById("result").innerHTML = octalResult;
}

// Hexa Convert
function convertToHexa(){
    const numberInput = parseInt(document.getElementById("input-number").value);
    const hexaResult = numberInput.toString(16);
    document.getElementById("result").innerHTML = hexaResult;
}