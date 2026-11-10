import {Cliente} from "../../src/models/Cliente.js"

const Andre = new Cliente(1, 'André Solicito', '068.753.540-98', '41.068.896-4', new Date(1980,5,23));
console.log('Cliente 1', Andre.getNome(), Andre.getCPF());

const Janete = new Cliente(2, 'Janete de Oliveira', '501.764.310-98', '20.360.374-6', new Date(1970,1,12));
console.log('Cliente 2', Janete.getNome(), Janete.getCPF());

const Jose = new Cliente(3, 'José de Almeida', '862.373.890-08','42.172.423-7', new Date(1965,7,13));
console.log('Cliente 3', Jose.getNome(), Jose.getCPF());