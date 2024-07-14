import React from "react";
import './dashboard.css';
import {CurrencyCircleDollar,UsersFour,Package,CalendarCheck} from 'phosphor-react';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div class="main-cards">
        <div class="card">
          <div class="card-inner">
            <h2>Ventas del Mes</h2>
            <span class="material-icons-outlined"><CurrencyCircleDollar/></span>
          </div>
          <h1>$68,490.99</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h2>Clientes</h2>
            <span class="material-icons-outlined"><UsersFour/></span>
          </div>
          <h1>278</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h2>Productos Vendidos</h2>
            <span class="material-icons-outlined"><Package/></span>
          </div>
          <h1>2,879</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h2>Pedidos Realizados</h2>
            <span class="material-icons-outlined"><CalendarCheck/></span>
          </div>
          <h1>480</h1>
        </div>


      </div>
    </div>
  );
};
