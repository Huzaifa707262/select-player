document.getElementById('perPalyer').addEventListener('click', function () {
    // totalExpences('perPalyer-field')
    const perPalyerField = document.getElementById('perPalyer-field');
    const perPalyerFieldValueString = perPalyerField.value;
    const perPalyerFieldValue = parseInt(perPalyerFieldValueString)

    const totalValue = perPalyerFieldValue * 5;

    const totalExpence = document.getElementById('totalExpence');
    const expenceString = totalExpence.innerText;
    const expence = parseInt(expenceString);
    totalExpence.innerText = totalValue
}
)