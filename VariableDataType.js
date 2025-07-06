// Variable tipe data

/**
 * Study Case 1
 * Tentukan Algoritma dan Pseudocode dan coding untuk menghitung luas permukaan balok
 * 
 * Study Case 2
 * Tentukan Algoritma dan Pseudocode dan coding untuk menghitung massa jenis suatu benda
 * 
 * Study Case 3
 * Tentukan Algoritma dan Pseudocode dan coding untuk menghitung volume tabung
 */

// Study Case 1: Menghitung Luas Permukaan Balok
let height = 10; // Tinggi balok
let width = 5; // Lebar balok
let length = 8; // Panjang balok
let surfaceArea = 2 * (length * width + length * height + width * height); // Rumus luas permukaan balok
console.log(`Luas Permukaan Balok = ${surfaceArea}`);

// Study Case 2: Menghitung Massa Jenis Suatu Benda
let mass = 20; // Massa benda dalam kg
let volume = 5; // Volume benda dalam m^3
let density = mass / volume; // Rumus massa jenis
console.log(`Massa Jenis Benda = ${density}`);

// Study Case 3: Menghitung Volume Tabung
let radius = 5; // Jari-jari tabung
let heightCylinder = 7; // Tinggi tabung
const PI = 3.14; // Nilai konstanta PI
let volumeCylinder = PI * radius * radius * heightCylinder; // Rumus volume tabung
console.log(`Volume Tabung = ${volumeCylinder}`);