
<!-- CRUD operations -->
<!-- to insert data in database it is like create operation-->
<!-- using insertOne() -->
 
 db.test.insertOne({name:"ABC"})

<!-- 
{
  acknowledged: true,
  insertedId: ObjectId('6863c2a7276c2bfd93cc8988')
} -->


db.test.insertOne({name: "Reeta", age:21, city:"lko"})

<!-- {
  acknowledged: true,
  insertedId: ObjectId('6863d2c1276c2bfd93cc8989')
} -->

<!-- when using insertMany() method-->

db.test.insertMany([{name: "Reeta", age:21, city:"lko"}, {name:"Riya", age:61, city:"knp"}, {name:"Sonu", age:23,city:"Banaras"}])

<!-- {
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6863d3ff276c2bfd93cc898a'),
    '1': ObjectId('6863d3ff276c2bfd93cc898b'),
    '2': ObjectId('6863d3ff276c2bfd93cc898c')
  }
} -->


<!-- for getting records we use find() method it works like select command in mySql-->

db.test.find()

<!-- [
  { _id: ObjectId('6863c2a7276c2bfd93cc8988'), name: 'ABC' },
  {
    _id: ObjectId('6863d2c1276c2bfd93cc8989'),
    name: 'Reeta',
    age: 21,
    city: 'lko'
  },
  {
    _id: ObjectId('6863d3ff276c2bfd93cc898a'),
    name: 'Reeta',
    age: 21,
    city: 'lko'
  },
  {
    _id: ObjectId('6863d3ff276c2bfd93cc898b'),
    name: 'Riya',
    age: 61,
    city: 'knp'
  },
  {
    _id: ObjectId('6863d3ff276c2bfd93cc898c'),
    name: 'Sonu',
    age: 23,
    city: 'Banaras'
  }
] -->

<!-- to find specific records -->

 db.test.find({name:"Sonu"})
<!-- [
  {
    _id: ObjectId('6863d3ff276c2bfd93cc898c'),
    name: 'Sonu',
    age: 23,
    city: 'Banaras'
  }
] -->


<!-- to show database  -->

show dbs
<!-- sample_mflix  196.99 MiB
test           72.00 KiB
admin         360.00 KiB
local          25.27 GiB -->


<!-- for delete a record -->

db.test.deleteOne({name:'Riya'})

<!-- After deleting a record -->
db.test.find()
<!-- [ acknowledged: true, deletedCount: 1 }
  { _id: ObjectId('6863c2a7276c2bfd93cc8988'), name: 'ABC' },
  {
    _id: ObjectId('6863d2c1276c2bfd93cc8989'),
    name: 'Reeta',
    age: 21,
    city: 'lko'
  },
  {
    _id: ObjectId('6863d3ff276c2bfd93cc898a'),
    name: 'Reeta',
    age: 21,
    city: 'lko'
  },
  {
    _id: ObjectId('6863d3ff276c2bfd93cc898c'),
    name: 'Sonu',
    age: 23,
    city: 'Banaras'
  }
] -->

db.books.find()
<!-- [
  {
    _id: ObjectId('6863edc6276c2bfd93cc898d'),
    name: 'ABC',
    price: 20,
    type: 'technical'
  },
  {
    _id: ObjectId('6863eec0276c2bfd93cc898e'),
    book1: 'XYZ',
    author: 'Ronald',
    price: 30
  },
  {
    _id: ObjectId('6863eec0276c2bfd93cc898f'),
    book2: 'AAA',
    author: 'Robinson',
    price: 50
  },
  {
    _id: ObjectId('6863eed2276c2bfd93cc8990'),
    book1: 'XYZ',
    author: 'Ronald',
    price: 30
  },
  {
    _id: ObjectId('6863eed2276c2bfd93cc8991'),
    book2: 'AAA',
    author: 'Robinson',
    price: 50
  }
] -->

db.customer.insertOne({name:"Sonu", favourite_book:[ObjectId('6863eed2276c2bfd93cc8991')]})
<!-- {
  acknowledged: true,
  insertedId: ObjectId('6864bf0b0d0a822584cc8988')
} -->


<!-- use of aggregate method -->
 db.customer.aggregate([{$lookup: {from:"books", localField:"favourite_book", foreignField:"id", as:"Favourite_book_name"}}])
<!-- [
  {
    _id: ObjectId('6864bf0b0d0a822584cc8988'),
    name: 'Sonu',
    favourite_book: [ ObjectId('6863eed2276c2bfd93cc8991') ],
    Favourite_book_name: []
  }     _id: ObjectId('6863eed2276c2bfd93cc8990'),
]       book1: 'XYZ', -->

<!-- validators -->
db.createCollection('products',{ validator:{
$jsonSchema:{
  bsonType:'object',
  required:['title', 'pname', 'owner', 'comments'],
  properties:{
    title:{
      bsonType: 'string'
      description: 'title must be in string format'
    },
    pname:{
      bsonType: 'string'
      description: 'product name must be in string format'
    },
    owner:{
      bsonType: 'ObjectId'
      description: 'id of customer'
    },
    comments:{
      bsonType:'string'
      description: 'omments must be in string format'
      }
    }
  }
}
})