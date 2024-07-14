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
          <div className="card-value">
          <h1>$ 368,490.99</h1>  
          </div>
          
        </div>

        <div class="card">
          <div class="card-inner">
            <h2>Clientes</h2>
            <span class="material-icons-outlined"><UsersFour/></span>
          </div>
          <div className="card-value">
          <h1>278</h1>
          </div>
          
        </div>

        <div class="card">
          <div class="card-inner">
            <h2>Productos Vendidos</h2>
            <span class="material-icons-outlined"><Package/></span>
          </div>
          <div className="card-value">
          <h1>879</h1>  
          </div>
          
        </div>

        <div class="card">
          <div class="card-inner">
            <h2>Pedidos Realizados</h2>
            <span class="material-icons-outlined"><CalendarCheck/></span>
          </div>
          <div className="card-value">
          <h1>480</h1>
          </div>
          
        </div>


      </div>
    </div>
  );
};
