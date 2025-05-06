from abc import ABC, abstractmethod

# Abstract class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._item_id = item_id
        self._title = title
        self._available = True

    @abstractmethod
    def display_info(self):
        pass

    @property
    def is_available(self):
        return "Tersedia" if self._available else "Tidak Tersedia"



class EduBook(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"[Buku Belajar] ID: {self._item_id}, Judul: {self._title}, Penulis: {self.__author}, {self.is_available}")


class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue_number):
        super().__init__(item_id, title)
        self.__issue_number = issue_number

    def display_info(self):
        print(f"[Majalah] ID: {self._item_id}, Judul: {self._title}, Issue: {self.__issue_number}, {self.is_available}")

class Novel(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"[Novel] ID: {self._item_id}, Judul: {self._title}, Penulis: {self.__author}, {self.is_available}")


class Comic(LibraryItem):
    def __init__(self, item_id, title, author):
        super().__init__(item_id, title)
        self.__author = author

    def display_info(self):
        print(f"[Komik] ID: {self._item_id}, Judul: {self._title}, Penulis: {self.__author}, {self.is_available}")

class Library:
    def __init__(self):
        self.__items = []

    def add_item(self, item):
        if isinstance(item, LibraryItem):
            self.__items.append(item)
            print(f"'{item._title}' ditambahkan ke library.")
        else:
            print("Only LibraryItem instances can be added.")

    def display_all_items(self):
        if not self.__items:
            print("Tidak ada buku apapun di library.")
        else:
            for item in self.__items:
                item.display_info()

    def search_by_title(self, title):
        found = False
        for item in self.__items:
            if item._title.lower() == title.lower():
                item.display_info()
                found = True
        if not found:
            print(f"Tidak ada buku dengan judul '{title}'.")

    def search_by_id(self, item_id):
        for item in self.__items:
            if item._item_id == item_id:
                item.display_info()
                return
        print(f"Tidak ada buku dengan ID '{item_id}'.")


def main():
    library = Library()

    while True:
        print("\n--- LIBRARY MENU ---")
        print("1. Tambah Buku")
        print("2. Cari berdasarkan Judul")
        print("3. Cari berdasarkan ID")
        print("4. Tampilkan Semua Item")
        print("0. Keluar")

        choice = input("Pilih menu: ")

        if choice == "1":
            print("Pilih kategori buku yang akan ditambah:")
            print("1. Buku Belajar\n2. Majalah\n3. Novel\n4. Komik")

            kategori = input("Kategori: ")
            item = None

            if kategori in ["1", "2", "3", "4"]:
                item_id = input("ID: ")
                title = input("Judul: ")

                if kategori == "1":
                    author = input("Nama Penulis: ")
                    item = EduBook(item_id, title, author)
                elif kategori == "2":
                    issue = input("Nomor Edisi Majalah: ")
                    item = Magazine(item_id, title, issue)
                elif kategori == "3":
                    author = input("Nama Penulis: ")
                    item = Novel(item_id, title, author)
                elif kategori == "4":
                    author = input("Nama Penulis: ")
                    item = Comic(item_id, title, author)

                library.add_item(item)
            else:
                print("Kategori tidak valid.")

        elif choice == "2":
            title = input("Masukkan judul yang ingin dicari: ")
            library.search_by_title(title)

        elif choice == "3":
            item_id = input("Masukkan ID yang ingin dicari: ")
            library.search_by_id(item_id)

        elif choice == "4":
            library.display_all_items()

        elif choice == "0":
            print("Keluar dari program.")
            break

        else:
            print("Pilihan tidak valid. Silakan coba lagi.")

if __name__ == "__main__":
    main()
