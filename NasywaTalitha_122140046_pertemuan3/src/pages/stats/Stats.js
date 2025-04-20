import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import useBookStats from '../../hooks/useBookStats';

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
  // mengambil data jumlah buku dari useBookStats
  const { owned, reading, wishlist } = useBookStats();
  
  // pengaturan data untuk dibuat dalam chart
  const data = {
    labels: ['Dimiliki', 'Sedang Dibaca', 'Ingin Dibeli'],
    datasets: [{
      label: 'Jumlah Buku', // keterangan tiap bagan dalam chart
      data: [owned, reading, wishlist],
      backgroundColor: ['#2e5749', '#bf512c', '#da9b2b'],
    }]
  }

  return (
    // tampilan chart
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h1>Statistik Buku</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '400px', height: '400px' }}>
        <Doughnut data={data} />
      </div>
    </div>
  </div>
);
};

export default Stats;