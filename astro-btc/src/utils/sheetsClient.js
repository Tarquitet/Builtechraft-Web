// src/utils/sheetsClient.js

// URL de tu API en Google Apps Script
const API_URL =
  'https://script.google.com/macros/s/AKfycbw8lIVo7W1O_M-GHpNWPD79K966m59ytDDlEuDoE3Ee6bAVyjb--ODrjjXcOeeLr6EB/exec';

// 1. Configuración Web (IPs, links, etc.)
export async function getClientConfigTSV() {
  try {
    const response = await fetch(`${API_URL}?action=config`);
    return await response.json(); // Retorna el objeto directamente
  } catch (error) {
    console.error('Error cargando configuración:', error);
    return {};
  }
}

// 2. Roadmap
export async function getRoadmapData() {
  try {
    const response = await fetch(`${API_URL}?action=roadmap`);
    return await response.json(); // Retorna el array de filas directamente
  } catch (error) {
    console.error('Error cargando Roadmap:', error);
    return [];
  }
}

// 3. Staff
export async function getStaffData() {
  try {
    const response = await fetch(`${API_URL}?action=staff`);
    return await response.json(); // Retorna el array de miembros
  } catch (error) {
    console.error('Error cargando Staff:', error);
    return [];
  }
}

// 4. Mods y Datapacks
export async function getModsAndDatapacks() {
  try {
    const response = await fetch(`${API_URL}?action=mods`);
    const json = await response.json();

    // El backend ya los separó, los devolvemos tal cual
    return {
      mods: json.filter((item) => !item.Type.toLowerCase().includes('datapack')),
      datapacks: json.filter((item) => item.Type.toLowerCase().includes('datapack')),
    };
  } catch (error) {
    console.error('Error cargando Mods:', error);
    return { mods: [], datapacks: [] };
  }
}
