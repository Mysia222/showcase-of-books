export class Book {
    constructor(
        public author: string[], 
        public id: number, 
        public title: string, 
        public image: string, 
        public price: number,
        public category: string,
        public publicationDate: string,
        public description: string,
    )
         { 
    }
 } 
 //json-server --watch db.json