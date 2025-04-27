print("-- Calculator BMI (Body Mass Index) --")

berat = float(input("\nBerat Badan (kg): "))
tinggi = float(input("Tinggi Badan (m): "))
kategori = ""

BMI = berat / (tinggi*tinggi)

if BMI < 18.5:
    kategori = "Kurang"
elif BMI >= 18.5 and BMI < 25:
    kategori = "Normal"
elif BMI >= 25 and BMI < 30:
    kategori = "Berlebih"
elif BMI >= 30:
    kategori = "Obesitas"

print(f"\nBMI kamu {BMI:.2f}, \nBerat badan kamu termasuk kategori {kategori}")