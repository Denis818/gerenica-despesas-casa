import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ExpenseCalculatorComponent',
  templateUrl: './ExpenseCalculatorComponent.component.html',
  styleUrls: ['./ExpenseCalculatorComponent.component.css']
})
export class ExpenseCalculatorComponentComponent implements OnInit {
  apartmentInstallment = 0;
  bankInstallment = 0;
  electricityBill = 0;
  condominiumFee = 0;
  formattedResults: string | null = null;

  people = [
    { name: 'Peu', value: 0 },
    { name: 'Denis', value: 0 },
    { name: 'Bruno', value: 0 },
    { name: 'Valdirene', value: 0 }
  ];
  constructor() { }

  ngOnInit() {
  }
  calculateExpenses() {
    const totalInstallments = this.apartmentInstallment + this.bankInstallment;
    const balanceAfterPeu = totalInstallments - 300;
    const individualShare = balanceAfterPeu / 3;
    const totalUtility = (this.electricityBill + this.condominiumFee) - 100;
    const individualUtilityShare = totalUtility / 4;
    const peuTotal = 300 + individualUtilityShare;
    const othersTotal = individualShare + individualUtilityShare;
    const totalExpenses = totalInstallments + totalUtility;
    const sumOfAllPayments = peuTotal + 3 * othersTotal;
    const difference = totalExpenses - sumOfAllPayments;

    this.formattedResults = `
    Detalhes das Despesas:
    - Parcela do Apartamento: R$ ${this.apartmentInstallment}
    - Parcela da Caixa: R$ ${this.bankInstallment}
    - Conta de Luz: R$ ${this.electricityBill}
    - Condomínio: R$ ${this.condominiumFee}

    Cálculos:
    - Total Parcela Apto e Caixa: R$ ${totalInstallments}
    - Total de Luz e Condomínio: R$ ${totalUtility} 
    - Abate no aluguel com os 300 do Peu: ${balanceAfterPeu};

    Parcela so Apto e Caixa para cada:
    - Peu:  R$ 300,00
    - Denis: R$ ${individualShare.toFixed(2)}
    - Bruno: R$ ${individualShare.toFixed(2)}
    - Valdirene: R$ ${individualShare.toFixed(2)}

    Luz e Condomíniopara cada:
    - Peu: R$ ${individualUtilityShare.toFixed(2)}
    - Denis: R$ ${individualUtilityShare.toFixed(2)}
    - Bruno: R$ ${individualUtilityShare.toFixed(2)}
    - Valdirene: R$ ${individualUtilityShare.toFixed(2)}
    - Obs:R$ 100,00 do estacionamento foi abatido na Luz e Condomínio.
  _________________________________________________________________________
    Valor que cada um deve pagar:
    - Peu: R$ ${peuTotal.toFixed(2)}
    - Denis: R$ ${othersTotal.toFixed(2)}
    - Bruno: R$ ${othersTotal.toFixed(2)}
    - Valdirene: R$ ${othersTotal.toFixed(2)}

    DEVE PAGAR ATE O DIA 9.
  _________________________________________________________________________
    Resumo:
    - Total das Despesas: R$ ${totalExpenses.toFixed(2)}
    - Pagamento Total: R$ ${sumOfAllPayments.toFixed(2)}
    - Diferença: R$ ${difference.toFixed(2)}
  `;
  }
}
