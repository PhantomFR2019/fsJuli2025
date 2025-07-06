// Practice -- If Else
/**
 * 
 * Buatlah koding utk logika berikut:
 * 
 * Jika umur sudah atau lebih 17 tahun, maka cetak "Bisa buat KTP"
 * Jika tidak, maka cetak "Belum bisa buat KTP"
 * 
 */

let umur = 15; // Ganti dengan umur yang diinginkan
if (umur >= 17) {
    console.log("Bisa buat KTP");
} else {
    console.log("Belum bisa buat KTP");
}

// Practice -- Switch Case
/**
 * 
 * Buatlah koding utk memilih minuman.
 * minuman yang tersedia adalah kopi, teh, dan susu.
 * Jika minuman yang dipilih adalah kopi, maka cetak "Adanya hanya teh"
 * Jika minuman yang dipilih adalah teh, maka cetak "Teh sudah disiapkan"
 */

let minuman = "kopi";
switch (minuman) {
    case "kopi":
        console.log("Adanya hanya teh")
        break;
    case "teh":
        console.log("Teh sudah disiapkan");
        break;
}

// Practice -- Nested Conditional
/**
 * Buatlah sebuah program tiket masuk sebuah wahana dengan ketentuan:
 * - Jika umur customer kurang dari 17 tahun,
 *   - Jika tinggi badan kurang dari 150 cm, maka print "not allowed"
 *   - Jika tinggi badan 150 cm atau lebih, maka print "allowed"
 */

let umurCustomer = 12;
let tinggiBadan = 135;
switch (true) {
    case (umurCustomer) < 17:
        if (tinggiBadan < 150) {
            console.log("not allowed");
        } else {
            console.log("allowed");
        }
    
        break;
    default:
        console.log("allowed");
}

// Study Case 1
/**
 * cek apakah bilangan genap atau ganjil
 * tentukan algoritma, psuedocode, dan codingnya
 */

let bilangan = 9; // Ganti dengan bilangan yang diinginkan
if (bilangan % 2 === 0) {
    console.log(`${bilangan} adalah bilangan genap`);
}
else {
    console.log(`${bilangan} adalah bilangan ganjil`);
}

// Study Case 2
/**
 * Sebuah vending machine menjual berbagai jenis minuman.
 * 1. Sweet Tea
 * 2. Plain Tea
 * 3. Coffee
 * 4. Ice Chocolate
 * 5. Lemonade
 * 
 * If customer memilih Sweet Tea, maka print "Sweet Tea is chosen, Thanks!"
 */


switch ("Lemonade") {
    case "Sweet Tea":
        console.log("Sweet Tea is chosen, Thanks!");
        break;
    case "Plain Tea":
        console.log("Plain Tea is chosen, Thanks!");
        break;
    case "Coffee":
        console.log("Coffee is chosen, Thanks!");
        break;
    case "Ice Chocolate":
        console.log("Ice Chocolate is chosen, Thanks!");
        break;
    case "Lemonade":
        console.log("Lemonade is chosen, Thanks!");
        break;
    default:
        console.log("Minuman tidak tersedia");
        break;
}


// Study Case 3
/**
 * Klasifikasi level untuk karakter dalam sebuah game terdiri dari detail berikut:
 * 
 * Interval Level:
 * Lebih dari 100 = expert
 * Antara 70 dan 100 = Pro
 * Antara 50 dan 70 = Normal
 * Antara 30 dan 50 = Basic
 * Kurang dari 30 = Beginner
 */

let level = 75; // Ganti dengan level yang diinginkan
if (level > 100) {
    console.log("Expert");
}
else if (level >= 70 && level <= 100) {
    console.log("Pro");
}
else if (level >= 50 && level < 70) {
    console.log("Normal");
}
else if (level >= 30 && level < 50) {
    console.log("Basic");
}
else {
    console.log("Beginner");
}