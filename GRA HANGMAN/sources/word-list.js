const wordList = [
    {
        password: "gitara",
        hint: "Instrument muzyczny z strunami."
    },
    {
        password: "tlen",
        hint: "Bezbarwny, bezwonny gaz niezbędny do życia."
    },
    {
        password: "góra",
        hint: "Duże naturalne wyniesienie powierzchni Ziemi."
    },
    {
        password: "malarstwo",
        hint: "Sztuka używająca kolorów na powierzchni do tworzenia obrazów lub wyrazu."
    },
    {
        password: "astronomia",
        hint: "Naukowe badanie obiektów i zjawisk niebieskich."
    },
    {
        password: "piłka nożna",
        hint: "Popularny sport grany z okrągłą piłką."
    },
    {
        password: "czekolada",
        hint: "Słodki przysmak wykonany z ziaren kakaowych."
    },
    {
        password: "motyl",
        hint: "Insekt o kolorowych skrzydłach i smukłym ciele."
    },
    {
        password: "historia",
        hint: "Studium wydarzeń przeszłych i cywilizacji ludzkiej."
    },
    {
        password: "pizza",
        hint: "Smakowite danie składające się z okrągłej podstawy i dodatków."
    },
    {
        password: "jazz",
        hint: "Gatunek muzyki charakteryzujący się improwizacją i synkopą."
    },
    {
        password: "aparat fotograficzny",
        hint: "Urządzenie służące do rejestrowania obrazów lub filmów."
    },
    {
        password: "diament",
        hint: "Kamień szlachetny znany ze swojego blasku i twardości."
    },
    {
        password: "przygoda",
        hint: "Ekscytujące lub śmiałe doświadczenie."
    },
    {
        password: "nauka",
        hint: "Systematyczne badanie struktury i zachowania świata fizycznego i naturalnego."
    },
    {
        password: "rower",
        hint: "Pojeżdżalnia napędzana siłą ludzkich mięśni, posiadająca dwie koła."
    },
    {
        password: "zachód słońca",
        hint: "Codzienne znikanie słońca poniżej horyzontu."
    },
    {
        password: "kawa",
        hint: "Popularny napój zawierający kofeinę, przygotowany z palonych ziaren kawy."
    },
    {
        password: "taniec",
        hint: "Rytmiczny ruch ciała często wykonywany do muzyki."
    },
    {
        password: "galaktyka",
        hint: "Obszerny system gwiazd, gazu i pyłu utrzymywany razem przez grawitację."
    },
    {
        password: "orkiestra",
        hint: "Duży zespół muzyków grających różne instrumenty."
    },
    {
        password: "wulkan",
        hint: "Góra lub pagórek z otworem, przez który wyrzucają się lawa, fragmenty skał, gorąca para i gaz."
    },
    {
        password: "powieść",
        hint: "Długa forma fikcji, zwykle złożona z złożonej fabuły i postaci."
    },
    {
        password: "rzeźba",
        hint: "Forma sztuki trójwymiarowej tworzona przez kształtowanie lub łączenie materiałów."
    },
    {
        password: "symfonia",
        hint: "Długa kompozycja muzyczna dla pełnej orkiestry, zwykle składająca się z wielu części."
    },
    {
        password: "architektura",
        hint: "Sztuka i nauka projektowania i budowy budynków."
    },
    {
        password: "balet",
        hint: "Forma tańca klasycznego charakteryzująca się precyzyjnymi i wdzięcznymi ruchami."
    },
    {
        password: "astronauta",
        hint: "Osoba przeszkolona do podróżowania i pracy w kosmosie."
    },
    {
        password: "wodospad",
        hint: "Kaskada wody spadająca z wysokości."
    },
    {
        password: "technologia",
        hint: "Zastosowanie wiedzy naukowej w celach praktycznych."
    },
    {
        password: "tęcza",
        hint: "Zjawisko meteorologiczne powstałe w wyniku odbicia, załamania i dyspersji światła."
    },
    {
        password: "wszechświat",
        hint: "Cała istniejąca materia, przestrzeń i czas jako całość."
    },
    {
        password: "fortepian",
        hint: "Instrument muzyczny grany poprzez naciśnięcie klawiszy, powodujących uderzenie strun."
    },
    {
        password: "urlop",
        hint: "Okres czasu poświęcony przyjemności, odpoczynkowi lub relaksowi."
    },
    {
        password: "dżungla",
        hint: "Gęsty las charakteryzująjący się wysoką ilością opadów deszczu i różnorodnością biologiczną."
        },
        {
        password: "teatr",
        hint: "Budynek lub obszar na zewnątrz, na którym wystawiane są sztuki, filmy lub inne przedstawienia."
        },
        {
        password: "telefon",
        hint: "Urządzenie używane do przesyłania dźwięku na duże odległości."
        },
        {
        password: "język",
        hint: "System komunikacji składający się z słów, gestów i składni."
        },
        {
        password: "pustynia",
        hint: "Bezżyzna lub sucha ziemia o niewielkich opadach."
        },
        {
        password: "słonecznik",
        hint: "Wysoka roślina z dużym żółtym kwiatem."
        },
        {
        password: "fantazja",
        hint: "Gatunek literatury fantastycznej z elementami magii i nadprzyrodzoności."
        },
        {
        password: "teleskop",
        hint: "Urządzenie optyczne używane do obserwacji odległych obiektów w kosmosie."
        },
        {
        password: "lekkie bryzy",
        hint: "Łagodny wiatr."
        },
        {
        password: "oaza",
        hint: "Żyzne miejsce na pustyni, gdzie znajduje się woda."
        },
        {
        password: "fotografia",
        hint: "Sztuka, proces lub praktyka tworzenia obrazów poprzez rejestrowanie światła lub innych fal elektromagnetycznych."
        },
        {
        password: "safari",
        hint: "Wyprawa lub podróż, zwykle w celu obserwacji dzikiej przyrody w naturalnym środowisku."
        },
        {
        password: "planeta",
        hint: "Ciało niebieskie krążące wokół gwiazdy i nie produkujące własnego światła."
        },
        {
        password: "rzeka",
        hint: "Duży naturalny strumień wody płynący w kierunku morza, jeziora lub innego podobnego strumienia."
        },
        {
        password: "tropikalny",
        hint: "Związany lub położony w regionie między Zwrotnikiem Raka a Zwrotnikiem Koziorożca."
        },
        {
        password: "tajemniczy",
        hint: "Trudny lub niemożliwy do zrozumienia, wytłumaczenia lub zidentyfikowania."
        },
        {
        password: "enigma",
        hint: "Coś tajemniczego, zagadkowego lub trudnego do zrozumienia."
        },
        {
        password: "paradoks",
        hint: "Oświadczenie lub sytuacja, która zaprzecza sobie lub przeczy intuicji."
        },
        {
        password: "puzzle",
        hint: "Gra, zabawka lub problem mający na celu sprawdzenie pomysłowości lub wiedzy."
        },
        {
        password: "szept",
        hint: "Mówienie bardzo delikatnie lub cicho, często w tajemniczy sposób."
        },
        {
        password: "cień",
        hint: "Ciemne miejsce lub kształt powstały przez zasłanianie światła."
        },
        {
        password: "sekret",
        hint: "Coś ukrytego lub nieznane innym."
        },
        {
        password: "ciekawość",
        hint: "Silne pragnienie wiedzy lub nauki czegoś nowego."
        },
        {
        password: "nieprzewidywalny",
        hint: "Nie możliwy do przewidzenia lub znanych z góry; niepewny."
        },
        {
        password: "zaciemniać",
        hint: "Zmącić lub zdezorientować kogoś; uczynić coś niejasnym lub trudnym do zrozumienia."
        },
        {
        password: "odsłaniać",
        hint: "Ujawnić lub ujawnić coś wcześniej tajnego lub nieznane."
        },
        {
        password: "iluzja",
        hint: "Fałszywe postrzeganie lub przekonanie; złudne wrażenie lub wydźwięk."
        },
        {
        password: "światło księżyca",
        hint: "Światło pochodzące z księżyca."
        },
        {
        password: "żywy",
        hint: "Pełen energii, jasności i życia."
        },
        {
        password: "nostalgia",
        hint: "Sentymentalna tęsknota lub uczucie melancholii za przeszłością."
        },
        {
        password: "błyskotliwy",
        hint: "Wyjątkowo bystry, utalentowany lub imponujący."
        },
        ];
