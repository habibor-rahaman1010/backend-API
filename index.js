const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

//this is middleware here..
app.use(cors());

const users = [
    { id: 0, name: 'Habibor Rahaman', email: 'habibor144369@gmail.com', phone: '01767237837' },
    { id: 1, name: 'Wahidur Rahaman', email: 'wahidur234@gmail.com', phone: '01981238725' },
    { id: 2, name: 'Rifat', email: 'rifat43@gmail.com', phone: '01982389123' },
    { id: 3, name: 'Arafat', email: 'arafat945@gmail.com', phone: '01378328132' },
    { id: 4, name: 'Allen Suvro', email: 'allensovo569@gmail.com', phone: '01798325892' },
    { id: 5, name: 'Mafiner', email: 'mafiner234@gmail.com', phone: '01721892349' },
    { id: 6, name: 'Robert', email: 'robeto123@gmail.com', phone: '01792372389' },
    { id: 7, name: 'Justin Beiber', email: 'justin144369@gmail.com', phone: '01783623894' },
    { id: 8, name: 'Jack', email: 'jack144369@gmail.com', phone: '01792384672' },
    { id: 9, name: 'Zayen Malik', email: 'zayen44369@gmail.com', phone: '0178972348' },
]

const students = [
    { id: 'YTFYF54F', image: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=', name: 'Habibor Rahaman', email: 'habibor144369@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'SR56SD6Y', image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', name: 'Rifat', email: 'rifat23@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'OTU6FG6F', image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', name: 'Arafat', email: 'arfat902@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'HYGU67FL', image: 'https://media.istockphoto.com/photos/confident-successful-arabian-businessman-tutor-freelancer-ceo-working-picture-id1328350044?b=1&k=20&m=1328350044&s=170667a&w=0&h=uDSzPmWR8jGsDL1ikfKHrjIrJIEvnEkLTUbB4HCg2lw=', name: 'Siyam', email: 'siyam9874@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'QW75TY5D', image: 'https://media.istockphoto.com/photos/candid-japanese-man-in-the-office-picture-id1336501076?b=1&k=20&m=1336501076&s=170667a&w=0&h=wpD0ZWma6RM8WLDvO8OtM2wbV2bE-1_aCXdlLJKJ60g=', name: 'Tarek', email: 'tarek6327@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'HYGU97FL', image: 'https://media.istockphoto.com/photos/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-picture-id1204374053?k=20&m=1204374053&s=612x612&w=0&h=HUMzgr3Fd97ujQZFJf7JjlD9yv_K5pZNMdLxppj9EkM=', name: 'Iftekhar', email: 'iftekhar673@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'JH8UI78C', image: 'https://media.istockphoto.com/photos/smart-male-it-programer-working-on-desktop-computer-in-data-center-picture-id1194430786?k=20&m=1194430786&s=612x612&w=0&h=mzNElyzFkZCfmM45Q2wi82bHsa2nhe0k6O0iV264NrY=', name: 'Wahid', email: 'wahid7283@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'YIHYF54F', image: 'https://media.istockphoto.com/photos/programmer-working-with-program-code-picture-id1075599562?b=1&k=20&m=1075599562&s=170667a&w=0&h=cZqbPs4YOWzY6oqR-L5OUXNnC_g-1xl8kxcClNjuk5k=', name: 'Allen', email: 'allen8923@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'SR96SD6Y', image: 'https://media.istockphoto.com/photos/focused-developer-coding-on-computer-monitors-working-late-in-office-picture-id1147195672?b=1&k=20&m=1147195672&s=170667a&w=0&h=AD5WL02_WKtfafagHSscON9s7Hyi2FaWbiJ1EaQpLjc=', name: 'Rio', email: 'rio7823@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'OTM6FG6F', image: 'https://media.istockphoto.com/photos/young-african-american-programmer-working-on-desktop-pc-in-the-office-picture-id1137939519?b=1&k=20&m=1137939519&s=170667a&w=0&h=PH4uFay7U4OcUguFy4OEXrCYAJBM5GWd5EwvjIEIuLk=', name: 'Maffen', email: 'mafen5423@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'HYGU07FL', image: 'https://media.istockphoto.com/photos/top-above-high-angle-view-portrait-of-his-he-nice-attractive-focused-picture-id1279133399?b=1&k=20&m=1279133399&s=170667a&w=0&h=NQlgTmoZq5oFrqWKN6-AfbdP0E_mpMEo5kfgtzITdOc=', name: 'Jesos', email: 'jesos9898@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'QW78TY5D', image: 'https://media.istockphoto.com/photos/keeping-his-focus-as-he-cracks-the-code-picture-id935963962?b=1&k=20&m=935963962&s=170667a&w=0&h=EetGItSMdnc6wFLi0rN7bYylki55-xSq9y20ILj7TOs=', name: 'Tokio', email: 'tokio323@gmail.com', phone: '01769812382', career: 'CSE' },
    { id: 'HYMU67FL', image: 'https://media.istockphoto.com/photos/programmer-woman-coding-on-computer-picture-id1322050853?k=20&m=1322050853&s=612x612&w=0&h=s0TjuZlzDHaSb5oioCA3EYirROfxiS90VKN1rjJHRRw=', name: 'Mendise', email: 'mendise3244@gmail.com', phone: '01769812382', career: 'EEE' },
    { id: 'JH9UI78C', image: 'https://media.istockphoto.com/photos/close-up-of-a-smart-young-woman-coding-picture-id1332378618?k=20&m=1332378618&s=612x612&w=0&h=b0m6J_tApdFAjm7WU4KFequ34Jpdr0v70gnz-AHIByA=', name: 'Bafet', email: 'bafet4234@gmail.com', phone: '01769812382', career: 'CSE' }
]

//all student api
app.get('/some/students', (req, res) => {
    let i = 0;
    const some = [];
    //data suffle here
    const shuffle = (array) => {
        for (let n = array.length; n; n--) {
            let j = Math.floor(Math.random() * n);
            [array[n - 1], array[j]] = [array[j], array[n - 1]];
        }
    }

    while (i < 5) {
        const result = students[i]
        some.push(result);
        i++;
    }
    shuffle(some);
    res.send(some)
});

//all users api and shuffle...another way
app.get('/students', (req, res) => {
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return shuffle;
    }
    shuffle(students)
    res.send(students);
});


//all users api and shuffle...
app.get('/users', (req, res) => {
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return shuffle;
    }
    shuffle(users)
    res.send(users)
});

//this is my search api.. user filter
app.get('/users/name', (req, res) => {
    const search = req.query.search;
    if (search) {
        const serchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        if (serchResult.length > 0) {
            res.send(serchResult)
        }
        else {
            res.send(users);
        }
    }
    else {
        res.send(users);
    }
});

//this is my search api.. user find
app.get('/users/name', (req, res) => {
    const search = req.query.search;
    if (search) {
        const serchResult = users.find(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        if (serchResult) {
            res.send(serchResult)
        }
        else {
            res.send(users);
        }
    }
    else {
        res.send(users);
    }
})


//this is my search api.. user filter
app.get('/users/student_name', (req, res) => {
    const search = req.query.search;
    if (search) {
        const serchResult = students.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        if (serchResult.length > 0) {
            res.send(serchResult)
        }
        else {
            res.send(students);
        }
    }
    else {
        res.send(students);
    }
});

//this is my search api use id.. user find
app.get('/users/student_id', (req, res) => {
    const search = req.query.search;
    if (search) {
        const serchResult = students.find(user => user.id.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        if (serchResult) {
            res.send(serchResult)
        }
        else {
            res.send(students);
        }
    }
    else {
        res.send(students);
    }
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})