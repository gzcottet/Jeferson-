// src/components/Grafico/Grafico.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

interface GraficoProps {
    data: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
        }[];
    };
}

const Grafico: React.FC<GraficoProps> = ({ data }) => {
    return (
        <div>
            <h2>Gráfico de Despesas</h2>
            <Bar data={data} options={{ responsive: true }} />
        </div>
    );
};

export default Grafico;
