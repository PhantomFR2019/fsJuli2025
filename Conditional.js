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

// Study Case 4
/**
 * Ada 3 jenis access : Public, Protected, dan Private.
 * Jika access kosong, maka tampilkan "Input access"
 * 
 * Access public, jika level dibawah 5 makan tampilkan "Public di bawah level 5"
 * Access public, jika level diatas 5, maka tampilkan "Public di atas level 5"
 * Access public, jika level sama dengan 5, maka tampilkan "Public five"
 * 
 * Access private, jika level dibawah 5 makan tampilkan "Private di bawah level 5"
 * Access private, jika level diatas 5, maka tampilkan "Private di atas level 5"
 * Access private, jika level sama dengan 5, maka tampilkan "Private five"
 *
 * Access protected, jika level dibawah 5 makan tampilkan "Protected di bawah level 5"
 * Access protected, jika level diatas 5, maka tampilkan "Protected di atas level 5"
 * Access protected, jika level sama dengan 5, maka tampilkan "Protected five
 * 
 * Jika access salah, tampilkan "Access is not defined"
 */

let access = "public"; // Ganti dengan access yang diinginkan
let levelAccess = 5; // Ganti dengan level yang diinginkan
switch (access) {
    case "public":
        if (levelAccess < 5) {
            console.log("Public di bawah level 5");
        } else if (levelAccess > 5) {
            console.log("Public di atas level 5");
        } else {
            console.log("Public five");
        }
        break;
    case "private":
        if (levelAccess < 5) {
            console.log("Private di bawah level 5");
        } else if (levelAccess > 5) {
            console.log("Private di atas level 5");
        } else {
            console.log("Private five");
        }
        break;
    case "protected":
        if (levelAccess < 5) {
            console.log("Protected di bawah level 5");
        } else if (levelAccess > 5) {
            console.log("Protected di atas level 5");
        } else {
            console.log("Protected five");
        }
        break;
    default:
        console.log("Access is not defined");
        break;
}

// Study Case 5
/**
 * Sebuah lembaga layanan IT services yg bergerak di bidang perbaikan laptop dan gadget memberikan layanan khusus berdasarkan dari status pembeli.
 * 
 * pembeli merupakan penduduk WNA, dan memiliki ketentuan sebagai berikut:
 * - Lama tinggal di Indonesia 3 tahun kurang, tidak dapat diskon
 * - Lama tinggal di Indonesia 3 hingga 5 tahun, maka mendapat diskon dengan syarat:
 *   - Usia dibawah 21 tahun , diskon 10%
 *   - Usia diatas 21 tahun, diskon 5%
 * 
 * - Lama tinggal di Indonesia 5 tahun lebih, maka mendapat diskon dengan syarat:
 *   - Usia dibawah 21 tahun , diskon 5%
 *   - Usia diatas 21 tahun, diskon 2.5%
 * 
 * Pembeli penduduk WNI, dan memiliki ketentuan sebagai berikut:
 *   - WNI tinggal di daerah Barat Indonesia, diskon 10%
 *   - WNI tinggal di daerah Tengah Indonesia, diskon 15%
 *   - WNI tinggal di daerah Timur Indonesia, diskon 17.5%
 * 
 * contoh perhitungan:
 * Warga merupakan WNA, lama tinggal 3 thn di Indonesia dan usia 27 tahun. Total pembelian : 100000
 * Maka mendapat diskon 5% dari total pembelian, yaitu 5000, sehingga total yang harus dibayar adalah 95000
 * 
 */

let customerstatus = "WNA";
let lamaTinggal = 3;
let usia = 27;

if (customerstatus === "WNA") {
    if (lamaTinggal < 3) {
        console.log("Tidak dapat diskon");
    } else if (lamaTinggal >= 3 && lamaTinggal <= 5) {
        if (usia < 21) {
            console.log("Diskon 10%");
        } else {
            console.log("Diskon 5%");
        }
    } else {
        if (usia < 21) {
            console.log("Diskon 5%");
        } else {
            console.log("Diskon 2.5%");
        }
    }
} else if (customerstatus === "WNI") {
    switch (daerah) {
        case "Barat":
            console.log("Diskon 10%");
            break;
        case "Tengah":
            console.log("Diskon 15%");
            break;
        case "Timur":
            console.log("Diskon 17.5%");
            break;
        default:
            console.log("Daerah tidak valid");
            break;
    }
}