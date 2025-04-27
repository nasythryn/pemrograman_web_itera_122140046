data_mhs = [
    {"nama": "Jefri", "nim": "1202501", "uts": 40, "uas": 60, "tugas": 78},
    {"nama": "Dotty", "nim": "1202502", "uts": 75, "uas": 87, "tugas": 88},
    {"nama": "Diana", "nim": "1202503", "uts": 80, "uas": 80, "tugas": 70},
    {"nama": "Dilan", "nim": "1202504", "uts": 67, "uas": 70, "tugas": 80},
    {"nama": "Carmen", "nim": "1202505", "uts": 85, "uas": 88, "tugas": 90},
]

for mhs in data_mhs:
    nilai_akhir = (0.3*mhs["uts"]) + (0.4*mhs["uas"]) + (0.3*mhs["tugas"])
    mhs["nilai_akhir"] = nilai_akhir

    if nilai_akhir >= 80:
        mhs["grade"] = "A"
    elif nilai_akhir >= 70:
        mhs["grade"] = "B"
    elif nilai_akhir >= 60:
        mhs["grade"] = "C"
    elif nilai_akhir >= 50:
        mhs["grade"] = "D"
    else:
        mhs["grade"] = "E"

print(("-" * 28), "Data Mahasiswa", ("-" * 28))
print("\n{:^10} {:^8} {:^10} {:^10} {:^10} {:^12} {:^6}".format(
    "Nama", "NIM", "UTS", "UAS", "Tugas", "Nilai Akhir", "Grade"
))
print("-" * 71)

for mhs in data_mhs:
    print("{:^10} {:^8} {:^10} {:^10} {:^10} {:^12.2f} {:^6}".format(
        mhs["nama"], mhs["nim"], mhs["uts"], mhs["uas"], mhs["tugas"], mhs["nilai_akhir"], mhs["grade"]
    ))
print("-" * 71)

tertinggi = max(data_mhs, key=lambda x: x["nilai_akhir"])
terendah = min(data_mhs, key=lambda x: x["nilai_akhir"])

print("\nMahasiswa dengan nilai tertinggi:")
print(f"{tertinggi['nama']} ({tertinggi['nim']}) - {tertinggi['nilai_akhir']:.2f} ({tertinggi['grade']})")

print("\nMahasiswa dengan nilai terendah:")
print(f"{terendah['nama']} ({terendah['nim']}) - {terendah['nilai_akhir']:.2f} ({terendah['grade']})")

