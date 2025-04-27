pi = 3.14

# fungsi geometri
def luas_persegi(sisi):
    return sisi*sisi
def kel_persegi(sisi):
    return 4*sisi

def luas_persegipjg(panjang, lebar):
    return panjang*lebar
def kel_persegipjg(panjang, lebar):
    return 2*(panjang+lebar)

def luas_lingkaran(jari):
    return pi*jari**2
def kel_lingkaran (jari):
    return 2*pi*jari

# konversi suhu
def cel_to_fhr(c):
    return (c*(9/5)+32)
def cel_to_klv(c):
    return (c+273.15)