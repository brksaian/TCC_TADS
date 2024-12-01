import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { PrecoProduto } from '../../../../shared/interface';

@Component({
  selector: 'app-price-chart',
  templateUrl: './historico-preco.component.html',
  standalone: true,
  imports: [BaseChartDirective],
})
export class HistoricoPrecoComponent implements OnChanges {
  @Input() precos: PrecoProduto[] = [];

  lineChartData = {
    labels: ['05/2024', '06/2024', '07/2024', '08/2024', 'Agora'],
    datasets: [
      {
        label: 'Preço em R$',
        data: [6.0, 6.5, 7.2, 9.0, 6.2],
        fill: true,
        borderColor: 'blue',
        backgroundColor: 'rgba(173, 216, 230, 0.5)',
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top', // Certifique-se de usar valores válidos
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Mês/Ano',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Preço (R$)',
        },
        min: 5,
        max: 10,
      },
    },
  };

  public lineChartPlugins = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['precos'] && this.precos) {
      this.updateChartData();
    }
  }

  updateChartData() {
    this.lineChartData.datasets[0].data = this.precos.map(
      (preco) => preco.preco
    );
    this.lineChartData.labels = this.precos.map((preco) =>
      this.formatDate(preco.data)
    );
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
}
