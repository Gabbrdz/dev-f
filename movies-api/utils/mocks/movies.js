const moviesMock = [
    {
        "id": "9337e95b-1c70-4390-8b9f-fc12dd5f2cdd",
        "title": "Bones",
        "year": 1994,
        "cover": "http://dummyimage.com/104x177.jpg/cc0000/ffffff",
        "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "duration": 344,
        "contentRating": "R",
        "Source": "https://goodreads.com/ipsum/primis/in/faucibus.jpg?integer=tristique&ac=est&neque=et&duis=tempus&bibendum=semper&morbi=est&non=quam&quam=pharetra&nec=magna&dui=ac&luctus=consequat&rutrum=metus&nulla=sapien&tellus=ut&in=nunc&sagittis=vestibulum&dui=ante&vel=ipsum&nisl=primis&duis=in&ac=faucibus&nibh=orci&fusce=luctus&lacus=et&purus=ultrices&aliquet=posuere&at=cubilia&feugiat=curae&non=mauris&pretium=viverra&quis=diam&lectus=vitae&suspendisse=quam&potenti=suspendisse&in=potenti&eleifend=nullam&quam=porttitor&a=lacus&odio=at&in=turpis&hac=donec&habitasse=posuere&platea=metus&dictumst=vitae&maecenas=ipsum&ut=aliquam&massa=non&quis=mauris&augue=morbi&luctus=non&tincidunt=lectus&nulla=aliquam&mollis=sit&molestie=amet&lorem=diam&quisque=in&ut=magna&erat=bibendum&curabitur=imperdiet&gravida=nullam",
        "tags": ["Drama", "(no genres listed)"]
    },
    {
        "id": "d8ee5a61-1c95-4c4e-8907-eea4bd08effb",
        "title": "Valerie",
        "year": 2012,
        "cover": "http://dummyimage.com/225x110.bmp/dddddd/000000",
        "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "duration": 13,
        "contentRating": "R",
        "Source": "http://psu.edu/et.json?viverra=metus&diam=arcu&vitae=adipiscing&quam=molestie&suspendisse=hendrerit&potenti=at&nullam=vulputate&porttitor=vitae&lacus=nisl&at=aenean&turpis=lectus&donec=pellentesque&posuere=eget&metus=nunc&vitae=donec&ipsum=quis&aliquam=orci&non=eget&mauris=orci&morbi=vehicula&non=condimentum&lectus=curabitur&aliquam=in&sit=libero&amet=ut",
        "tags": ["Comedy|Drama", "Drama|Romance", "Crime|Drama|Film-Noir", "Drama", "Drama"]
    },
    {
        "id": "6ed75a4b-d29a-4e84-b83c-f15ce416cda4",
        "title": "Magdalene Sisters, The",
        "year": 1986,
        "cover": "http://dummyimage.com/158x127.png/5fa2dd/ffffff",
        "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        "duration": 302,
        "contentRating": "R",
        "Source": "https://ocn.ne.jp/pede/malesuada/in/imperdiet.aspx?massa=condimentum&id=curabitur",
        "tags": ["Comedy|Drama|Musical"]
    },
    {
        "id": "86c0d2d2-4b57-4d99-9a16-9146ef632241",
        "title": "I Am Comic",
        "year": 2002,
        "cover": "http://dummyimage.com/207x170.png/cc0000/ffffff",
        "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
        "duration": 398,
        "contentRating": "PG-13",
        "Source": "http://toplist.cz/fermentum/donec/ut.jsp?in=dis&leo=parturient&maecenas=montes&pulvinar=nascetur&lobortis=ridiculus&est=mus&phasellus=vivamus&sit=vestibulum&amet=sagittis&erat=sapien&nulla=cum&tempus=sociis&vivamus=natoque&in=penatibus&felis=et&eu=magnis&sapien=dis&cursus=parturient&vestibulum=montes&proin=nascetur&eu=ridiculus&mi=mus&nulla=etiam&ac=vel&enim=augue&in=vestibulum&tempor=rutrum&turpis=rutrum&nec=neque&euismod=aenean&scelerisque=auctor&quam=gravida&turpis=sem&adipiscing=praesent&lorem=id&vitae=massa&mattis=id&nibh=nisl&ligula=venenatis&nec=lacinia&sem=aenean&duis=sit&aliquam=amet&convallis=justo&nunc=morbi&proin=ut&at=odio&turpis=cras&a=mi&pede=pede&posuere=malesuada&nonummy=in&integer=imperdiet&non=et&velit=commodo&donec=vulputate&diam=justo&neque=in&vestibulum=blandit&eget=ultrices&vulputate=enim&ut=lorem&ultrices=ipsum&vel=dolor&augue=sit&vestibulum=amet&ante=consectetuer&ipsum=adipiscing&primis=elit&in=proin&faucibus=interdum&orci=mauris&luctus=non&et=ligula&ultrices=pellentesque&posuere=ultrices&cubilia=phasellus&curae=id",
        "tags": ["Drama"]
    },
    {
        "id": "d321dbce-6635-42c2-b7e8-faf4b2ecb852",
        "title": "Song of the Exile (Ke tu qiu hen)",
        "year": 2009,
        "cover": "http://dummyimage.com/200x243.png/dddddd/000000",
        "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
        "duration": 319,
        "contentRating": "PG-13",
        "Source": "https://tumblr.com/dapibus/augue/vel/accumsan.jpg?in=pede&leo=justo&maecenas=eu&pulvinar=massa&lobortis=donec&est=dapibus&phasellus=duis&sit=at&amet=velit&erat=eu&nulla=est&tempus=congue&vivamus=elementum&in=in&felis=hac&eu=habitasse&sapien=platea&cursus=dictumst&vestibulum=morbi&proin=vestibulum&eu=velit&mi=id&nulla=pretium&ac=iaculis&enim=diam&in=erat&tempor=fermentum&turpis=justo&nec=nec&euismod=condimentum&scelerisque=neque&quam=sapien&turpis=placerat&adipiscing=ante&lorem=nulla&vitae=justo&mattis=aliquam&nibh=quis&ligula=turpis&nec=eget&sem=elit&duis=sodales&aliquam=scelerisque&convallis=mauris&nunc=sit&proin=amet&at=eros&turpis=suspendisse&a=accumsan&pede=tortor&posuere=quis&nonummy=turpis&integer=sed&non=ante&velit=vivamus&donec=tortor&diam=duis&neque=mattis",
        "tags": ["Drama", "Drama", "Drama"]
    },
    {
        "id": "f9217e4f-eb59-4a98-beae-a796a3be2f88",
        "title": "RocketMan (a.k.a. Rocket Man)",
        "year": 2012,
        "cover": "http://dummyimage.com/173x131.bmp/5fa2dd/ffffff",
        "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
        "duration": 111,
        "contentRating": "PG",
        "Source": "http://paginegialle.it/massa/id/nisl/venenatis.aspx?in=in&hac=hac&habitasse=habitasse&platea=platea&dictumst=dictumst&aliquam=maecenas&augue=ut&quam=massa&sollicitudin=quis&vitae=augue&consectetuer=luctus&eget=tincidunt&rutrum=nulla&at=mollis&lorem=molestie&integer=lorem&tincidunt=quisque&ante=ut&vel=erat&ipsum=curabitur&praesent=gravida&blandit=nisi&lacinia=at&erat=nibh&vestibulum=in&sed=hac&magna=habitasse&at=platea&nunc=dictumst&commodo=aliquam&placerat=augue&praesent=quam&blandit=sollicitudin&nam=vitae&nulla=consectetuer&integer=eget&pede=rutrum&justo=at&lacinia=lorem&eget=integer",
        "tags": ["Documentary|War", "Drama", "Drama|Horror", "Comedy"]
    },
    {
        "id": "0018baa1-6694-419d-bcdf-2ba814422123",
        "title": "L'instant et la patience ",
        "year": 2000,
        "cover": "http://dummyimage.com/218x246.png/ff4444/ffffff",
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "duration": 59,
        "contentRating": "NC-17",
        "Source": "https://nyu.edu/ac/leo/pellentesque.js?pellentesque=lacus&ultrices=at&phasellus=velit&id=vivamus&sapien=vel&in=nulla&sapien=eget&iaculis=eros&congue=elementum&vivamus=pellentesque&metus=quisque&arcu=porta&adipiscing=volutpat&molestie=erat&hendrerit=quisque&at=erat&vulputate=eros&vitae=viverra&nisl=eget&aenean=congue&lectus=eget&pellentesque=semper&eget=rutrum&nunc=nulla&donec=nunc&quis=purus&orci=phasellus&eget=in&orci=felis&vehicula=donec&condimentum=semper&curabitur=sapien&in=a&libero=libero&ut=nam&massa=dui&volutpat=proin&convallis=leo&morbi=odio&odio=porttitor&odio=id&elementum=consequat&eu=in&interdum=consequat&eu=ut&tincidunt=nulla&in=sed&leo=accumsan&maecenas=felis&pulvinar=ut&lobortis=at&est=dolor&phasellus=quis&sit=odio&amet=consequat",
        "tags": ["Adventure|Comedy", "Drama"]
    },
    {
        "id": "fa60e19f-8a20-4bdf-a3d7-1dd51f3edbe9",
        "title": "The Next Voice You Hear....",
        "year": 2005,
        "cover": "http://dummyimage.com/111x158.jpg/ff4444/ffffff",
        "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "duration": 281,
        "contentRating": "PG",
        "Source": "https://bbc.co.uk/eget/massa/tempor/convallis/nulla.png?orci=odio&vehicula=in&condimentum=hac&curabitur=habitasse&in=platea&libero=dictumst&ut=maecenas&massa=ut&volutpat=massa&convallis=quis&morbi=augue&odio=luctus&odio=tincidunt&elementum=nulla&eu=mollis&interdum=molestie&eu=lorem&tincidunt=quisque&in=ut&leo=erat&maecenas=curabitur&pulvinar=gravida&lobortis=nisi&est=at&phasellus=nibh&sit=in&amet=hac&erat=habitasse&nulla=platea&tempus=dictumst&vivamus=aliquam&in=augue&felis=quam&eu=sollicitudin&sapien=vitae&cursus=consectetuer&vestibulum=eget&proin=rutrum&eu=at&mi=lorem&nulla=integer&ac=tincidunt&enim=ante&in=vel&tempor=ipsum&turpis=praesent&nec=blandit&euismod=lacinia&scelerisque=erat&quam=vestibulum",
        "tags": ["Crime", "Comedy|Drama|Romance", "Comedy|Crime|Drama", "Documentary"]
    },
    {
        "id": "19599db4-746f-4665-81fa-afc9ba55cc76",
        "title": "Ghost Story",
        "year": 1986,
        "cover": "http://dummyimage.com/115x218.bmp/dddddd/000000",
        "description": "Fusce consequat. Nulla nisl. Nunc nisl.",
        "duration": 277,
        "contentRating": "PG",
        "Source": "http://loc.gov/convallis/eget/eleifend/luctus.xml?ac=dui&nulla=maecenas&sed=tristique&vel=est&enim=et&sit=tempus&amet=semper&nunc=est&viverra=quam&dapibus=pharetra&nulla=magna&suscipit=ac&ligula=consequat&in=metus&lacus=sapien",
        "tags": ["Drama|Romance", "Drama|Romance", "Fantasy|Horror|Thriller", "Comedy|Drama"]
    },
    {
        "id": "a0ed54d7-2972-4db8-89f7-63a28ad8a4c8",
        "title": "Horseman on the Roof, The (Hussard sur le toit, Le)",
        "year": 1992,
        "cover": "http://dummyimage.com/183x180.jpg/cc0000/ffffff",
        "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
        "duration": 50,
        "contentRating": "PG-13",
        "Source": "https://github.io/rutrum/nulla.html?et=rutrum&magnis=nulla",
        "tags": ["Drama", "Action|Drama|War"]
    }
]


module.exports = { moviesMock }