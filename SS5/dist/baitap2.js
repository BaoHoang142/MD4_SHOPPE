"use strict";
const book = [
    {
        id: 1,
        name: "Tay du ki",
        type: "film"
    },
    {
        id: 2,
        name: "Tay du kem",
        type: "film"
    },
    {
        id: 3,
        name: "quoc 3",
        type: "film"
    },
];
class FictionBook {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
    }
    setInfo() {
        const bookSave = {
            id: this.id,
            name: this.name,
            type: this.type
        };
        book.push(bookSave);
    }
    getInfo(id) {
        const inforBook = book.find((item) => item.id === id);
        return inforBook;
    }
    delete(id) {
        // b1: lấy id của sách mình chọn trong mảng
        const bookDelete = book.findIndex((item) => id == item.id);
        // b2: dùng findIndex để lấy ra vị trí
        book.splice(bookDelete, 1);
        // b3: delete (splice,...)
        return book;
    }
}
let book2 = new FictionBook(4, "hay", "giao duc");
book2.setInfo();
console.log(book2.delete(2));
