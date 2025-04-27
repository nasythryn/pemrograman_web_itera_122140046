import math_operations as calc
from math_operations import cel_to_klv

# geometri
print("-"*20, "Perhitungan Geometri", "-"*20)
# persegi
print("1. PERSEGI")
sisi = float(input("Sisi persegi (cm): "))
print(f"Luas Persegi = {calc.luas_persegi(sisi):.2f} cm^2")
print(f"Keliling Persegi = {calc.kel_persegi(sisi):.2f} cm")

# persegi panjang
print("\n2. PERSEGI PANJANG")
panjang = float(input("Panjang (cm): "))
lebar = float(input("Lebar (cm): "))
print(f"Luas Persegi Panjang = {calc.luas_persegipjg(panjang, lebar):.2f} cm^2")
print(f"Keliling Persegi Panjang = {calc.kel_persegipjg(panjang, lebar):.2f} cm")

# lingkaran 
print("\n3. LINGKARAN")
jari = float(input("Jari-jari lingkaran (cm): "))
print(f"Luas Lingkaran = {calc.luas_lingkaran(jari):.2f} cm^2")
print(f"Keliling Lingkaran = {calc.kel_lingkaran(jari):.2f} cm\n")

# suhu
print("-"*20, "Konversi Suhu", "-"*20)
# celcius to fahrenheit
print("1. CELCIUS TO FAHRENHEIT")
celcius = float(input("Celcius: "))
print(f"Fahrenheit = {calc.cel_to_fhr(celcius):.2f} F")

# celcius to kelvin
print("\n2. CELCIUS TO KELVIN")
celcius = float(input("Celcius: "))
print(f"Kelvin = {calc.cel_to_klv(celcius):.2f} K")