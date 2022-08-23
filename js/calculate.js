
document.getElementById('total-cost').addEventListener('click', function () {

    const managerCost = document.getElementById('manager-cost');
    const managerCostValuString = managerCost.value;
    const managerCostValue = parseInt(managerCostValuString);


    const coachCost = document.getElementById('coach-cost');
    const coachCostValueString = coachCost.value;
    const coachCostValue = parseInt(coachCostValueString);

    // // totalCost
    const perPalyerField = document.getElementById('perPalyer-field');
    const perPalyerFieldValueString = perPalyerField.value;
    const perPalyerFieldValue = parseInt(perPalyerFieldValueString)

    const totalValue = perPalyerFieldValue * 5;

    const totalExpence = document.getElementById('totalExpence');
    const expenceString = totalExpence.innerText;
    const expence = parseInt(expenceString);
    totalExpence.innerText = totalValue;
    // // totalCost

    const totalCost = managerCostValue + coachCostValue + totalValue;
    console.log(totalCost)

    const Sum = document.getElementById('sum');
    const totalSumString = Sum.innerText;
    const totalSum = parseInt(totalSumString);
    Sum.innerText = totalCost;
})


