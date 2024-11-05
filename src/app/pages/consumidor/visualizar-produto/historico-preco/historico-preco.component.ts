import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
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

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Preço',
        fill: true,
        tension: 0.4,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(54, 162, 235, 0.8)',
      }
    ],
    labels: [],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {},
      y: {
        ticks: {
          callback: function(value) {
            return `R$ ${value}`;
          }
        }
      }
    }
  };

  public lineChartPlugins = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['precos'] && this.precos) {
      this.updateChartData();
    }
  }

  updateChartData() {
    this.lineChartData.datasets[0].data = this.precos.map(preco => preco.preco);
    this.lineChartData.labels = this.precos.map(preco => this.formatDate(preco.data));
  }

  private formatDate(date: Date): string {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }
}
