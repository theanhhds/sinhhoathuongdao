const list = [
    {
        id: "0",
        title: "Mật thư quốc ngữ điện tín",
        subtitle: "Phải kiểm tra xem bạn có biết cái này không đã",
        type: "text",   //img or text
        key: "Dễ mà, just do it",
        content: "nawm 1942 cos 400 banj trangs sinh tham duwj traij hopj banj hoa luw",
        solution: "năm 1942 có 400 bạn tráng sinh tham dự trại họp bạn hoa lư",
        note: "ghi đáp án có dấu, có khoảng trắng và không viết hoa",
        help: "Bạn hãy đọc đoạn văn theo quốc ngữ điện tín sẽ ra câu trả lời",
    },

    {
        id: "1",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "",
        type: "text",   //img or text
        key: "Em nào thấy mình lùn thì đi chỗ khác chơi",
        content: "BelOw the Yard iS a Cute dOg which is rUnning To the tree",
        solution: "boyscout",
        note: "đáp án chỉ là một từ duy nhất",
        help: "Bạn hãy lấy các chữ in hoa và ghép lại để ra đáp án",
    },

    {
        id: "2",
        title: "Mật thư morse",
        subtitle: "Để xem bạn có thuộc morse không nha",
        type: "text",   //img or text
        key: "Dễ mà, just do it",
        content: "-... .- -. .---/ -.. -.. ..- --- .-- -. --. ..-./ - .-. .- -. --. .../ ... .. -. ....",
        solution: "bạn đường tráng sinh",
        note: "ghi đáp án có dấu, có khoảng trắng và không viết hoa",
        help: "Bạn đối chiếu các kí tự với mã Morse là ra. Sau mỗi dấu '/' là một từ"
    },

    {
        id: "3",
        title: "Mật thư dạng kí tự",
        subtitle: "",
        type: "text",
        key: "Được ngọc",
        content: "nuf yrev si eerobmaj",
        solution: "jamboree is very fun",
        note: "ghi đáp án có khoảng trắng và không viết hoa",
        help: "Bạn hãy đọc bản tin ngược lại từ cuối lên, từ phải sang trái"
    },
    
    {
        id: "4",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "",
        type: "text",   //img or text
        key: "Chặt đầu chặt đuôi, đem mình về nấu",
        content: "ats tre huyr len nem anh ofc, etc xin ink",
        solution: "truyền tin",
        note: "ghi đáp án có dấu, có khoảng trắng và không viết hoa",
        help: "Bạn hãy lấy từng từ, bỏ (hay 'chặt') chữ đầu và chữ đuôi, rồi ghép nó lại"
    },

    {
        id: "5",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "",
        type: "text",   //img or text
        key: "Rắn ăn đuôi",
        content: "a s i h a t d o n j g o d s a b n b n",
        solution: "án binh bất động",
        note: "ghi đáp án có dấu, có khoảng trắng và không viết hoa",
        help: "Gọi chữ đầu tiên là chữ thứ 1, chữ cuối cùng là chữ thứ n. Bạn hãy đọc theo thứ tự 1 > n > 2 > n-1 > 3 > n-3 ... tiếp tục cho tới hết"
    },

    {
        id: "6",
        title: "Mật thư có kí tự sắp xếp đặc biệt",
        subtitle: "Cái này thú vị à nha",
        type: "table",   //img or text or table
        key: "Mưa rơi theo hướng Tây Bắc - Đông Nam",
        content: [
            ['m','y','n','o','m'],
            ['e','o','l','g','i'],
            ['i','c','t','a','a'],
            ['k','e','t','v','m'],
            ['z','k','n','h','i'],
        ],
        note: "ghi đáp án không dấu, có khoảng trắng và không viết hoa. Thấy kí tự nào lạ thì bỏ đi",
        solution: "moi ngay lam mot viec thien",
        help: "Đọc nội dung theo đường chéo từ hướng trái-trên xuống hướng phải-dưới. Đọc từ đường chéo đầu tiên bên phải"
    },

    {
        id: "7",
        title: "Mật thư dạng chuồng bò",
        subtitle: "Nghiên cứu google nếu bạn không biết nhé",
        type: "img",   //img or text
        key: "Nhốt bò vào chuồng",
        content: "lv08.jpg",
        solution: "gang suc",
        note: "Ghi đáp án không dấu, có khoảng trắng, không viết hoa",
        help: "Tạo một cái chuồng bò (https://nghiabinhthanhthe.forumvi.com/t128-topic), rồi dịch các kí tự ra"
    },

    {
        id: "8",
        title: "Mật thư chữ thay chữ",
        subtitle: "Xem lại bài quốc ca trước nha...",
        type: "text",   //img or text
        key: "Vừa học bảng chữ cái vừa hát tiến quân ca, em nào trùng thì cho qua",
        content: "Nam đường in, dồn máu đoàn, in xa đoàn quốc",
        solution: "dot lua trai",
        note: "Ghi đáp án không dấu, có khoảng trắng, không viết hoa",
        help: "Ghi ra các từ xuất hiện trong bài quốc ca theo thứ tự, tiếp theo điền bảng chữ cái lần lượt vào các từ đó. Đối chiếu với bản tin rồi dịch"
    },

    {
        id: "9",
        title: "Mật thư có kí tự sắp xếp đặc biệt",
        subtitle: "",
        type: "table",   //img or text or table
        key: "Đi dọc hành lang rồi đón thang máy xuống tầng trệt.",
        content: [
            ['s','o','i','c','o'],
            ['o','n','g','n','n'],
            ['e','m','i','g','k'],
            ['h','z','n','h','h'],
        ],
        solution: "soi con khong nghe minh",
        note: "ghi đáp án không dấu, có khoảng trắng và không viết hoa. Thấy kí tự nào lạ thì bỏ đi",
        help: "(1;1) -> (1;2) -> (1;3) -> (1;4) -> (1;5) -> (2;1) -> (2;2) -> (2;3) -> (2;4) -> (3;1) -> ..."
    },

    {
        id: "10",
        title: "Mật thư có kí tự sắp xếp đặc biệt",
        subtitle: "Cái này coi bộ khó à nghen. Jkd",
        type: "text", 
        key: "Chí nam nhi tung hoành ngang dọc",
        content: "dlr oao itn trg rud uoo ona ngn gtz",
        solution: "doi truong la truong trong doan",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Ghi từng từ trong bản tin thành từng hàng. Lần lượt đọc theo chiều dọc từng hàng"
    },

    {
        id: "11",
        title: "Mật thư dạng đặc biệt",
        subtitle: "Cái này dễ lắm nếu bạn có cục gạch",
        type: "text", 
        key: "Điện thoại đời cũ",
        content: "3,88,66,4 / 555,33,88 / 555,33,66",
        solution: "dung leu len",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Lấy điện thoại chỉ có phím số ra bấm theo thứ tự sẽ ra bản tin"
    },

    {
        id: "12",
        title: "Mật thư chữ thay kí tự",
        subtitle: "We use English here people",
        type: "text", 
        key: "Travel to their capitals",
        content: "Copenhagen, Jakarta/ Bangkok, Budapest, Cairo, Muscat/ Vientiane, Muscat, Jakarta/ Kathmandu, Canberra, Sana'a",
        solution: "di theo loi nay",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Dò google tên tiếng anh của các nước có thủ đô như trên. Ghép các chữ cái đầu tiên của các nước đó lại"
    },

    {
        id: "13",
        title: "Mật thư dạng bản nhạc",
        subtitle: "",
        type: "img", 
        key: "Tại sao phải thổi còi trong khi có thể nghe nhạc",
        content: "lv13.jpg",
        solution: "thieu sinh quan mafeking",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Dịch morse. Nốt trên dòng kẻ là te, nốt giữa dòng kẻ là tich"
    },

    {
        id: "14",
        title: "Mật thư chữ thay chữ",
        subtitle: "",
        type: "text", 
        key: "Làm gì làm cũng phải đưa VIETNAM lên đầu danh sách",
        content: "RBS EKJM RPVC",
        solution: "thu cong trai",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Viết bảng chữ cái, nhưng xếp các kí tự 'V I E T N A M' lên đầu tiên. Điền bảng chữ cái ABC rồi dịch"
    },

    {
        id: "15",
        title: "Mật thư chữ thay chữ",
        subtitle: "Đây là 1 trong những câu chứa tất cả chữ cái tiếng anh",
        type: "text", 
        key: "Đảo lộn trật tự theo điệu nhảy của cáo. (The quick brown fox jumps over the lazy dog)",
        content: "TFK KLFC YLT",
        solution: "anh hung xua",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Viết bảng chữ cái, nhưng sắp xếp theo thứ tự xuất hiện trong 'điệu nhảy của cáo'. Điền bản chữ cái ABC rồi dịch "
    },

    {
        id: "16",
        title: "Mật thư chữ thay chữ",
        subtitle: "",
        type: "text", 
        key: "Phải luôn kính nhớ đến người đi trước",
        content: "SFO MVZFO",
        solution: "ren luyen",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Dịch từng chữ bằng cách ghi ra những chữ xuất hiện trước nó trong bảng chữ cái"
    },

    {
        id: "17",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "Bạn có học giỏi tiếng Việt không? Tốt!",
        type: "text", 
        key: "Tóm đầu mấy gã hay làm ẩu",
        content: "Anh dạo bược trong đường chiều ịn nắng. Từng cơn gió mõng manh làm cho ãnh cảm thấy đau nhói tím",
        solution: "bi mat",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Nhìn xem từ nào sai chính tả, thì lấy chữ đầu tiên của nó"
    },

    {
        id: "18",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "",
        type: "text", 
        key: "Tam giác cân",
        content: "Ackgomn pcaryov mmencov tmetsau",
        solution: "gay mot met sau",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Ghi các từng thành từng hàng bằng nhau. Đọc theo hình tam giác"
    },

    {
        id: "19",
        title: "Mật thư dạng hình ảnh",
        subtitle: "",
        type: "img", 
        key: "Nhất trụ kình thiên",
        content: "lv21.jpg",
        solution: "phuc hoat",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Vẽ thêm một nét thẳng đứng vào mỗi kí tự"
    },

    {
        id: "20",
        title: "Mật thư chữ thay chữ",
        subtitle: "",
        type: "text", 
        key: "Nhỏ đi từng ngày",
        content: "TCQK YGV",
        solution: "sang tao",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Giảm 1 kí tự vào chữ thứ 1, giảm 2 vào chữ thứ 2, và tiếp tục"
    },
    {
        id: "21",
        title: "Mật thư dạng Semaphore",
        subtitle: "",
        type: "text", 
        key: "Đồng hồ soi gương",
        content: "4h45, 11h5, 1h15, 4h37 / 7h23, 10h30, 4h37 / 7h23, 7h30, 1h50, 3h07, 1h23",
        solution: "muon nen nguoi",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Vẽ giờ lên đồng hồ kim, soi ngược nó lại, rồi dịch theo semaphore"
    },

    {
        id: "22",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "",
        type: "text", 
        key: "Đừng có dùng đến 'Aspirine'",
        content: "Site sui / lapi upa saci",
        solution: "tu luc",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Xoá hết những chữ a s p i r n e trong bản tin là ra"
    },

    {
        id: "23",
        title: "Mật thư ẩn trong đoạn văn",
        subtitle: "",
        type: "text", 
        key: "Kiểm tra xem cái gì đứng giữa đôi ta vậy",
        content: "JL HJ LN JL GI HJ",
        solution: "kim khi",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Xem chữ gì đứng ở giữa mỗi cặp chữ, rồi ghép lại"
    },
    {
        id: "24",
        title: "Mật thư mã hoá",
        subtitle: "",
        type: "text", 
        key: "Ngôn ngữ này chỉ có máy tính mới hiểu. Hoặc mình cũng hiểu",
        content: "01101110 01101000 01101001 / 01110000 01101000 01100001 01101110",
        solution: "nhi phan",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Dịch từng cụm số ở hệ nhị phân ra số thập phân, rồi dựa theo mã ascii dịch ra kí tự"
    },
    {
        id: "25",
        title: "Mật thư dạng Semaphore",
        subtitle: "",
        type: "text", 
        key: "Nhốt mấy anh múa gập thành từng cặp. Tay nào dính nhau thì bỏ đi",
        content: "DVOQCBSHDV AFMFCE",
        solution: "guong mau",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Nhóm từng 2 chữ thành 1 cặp. Vẽ đè lên nhau theo semaphore. Nét nào trùng nhau thì bỏ đi. Rồi dịch từ semaphore ra kí tự"
    },
    {
        id: "26",
        title: "Mật thư dạng đặc biệt",
        subtitle: "Cái này bạn phải tưởng tượng tốt mới được",
        type: "text", 
        key: "Số thành chữ",
        content: "13, 4, 1 / 6, 4 / 10, 0, 1",
        solution: "bai ca doi",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "13 = B, 4 = A,... tưởng tượng đi :)"
    },
    {
        id: "27",
        title: "Mật thư dạng Morse",
        subtitle: "Chắc chắn là bạn thuộc Morse và biết làm toán nha",
        type: "text", 
        key: "Dùng còi làm toán",
        content: "Nx2, I+T, F–E / S+E, Tx3, L-I",
        solution: "cuu hoa",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Nx2 = -. x 2 = -.-. + C, tiếp tục dịch hết bản tin"
    },
    {
        id: "28",
        title: "Mật thư ẩn trong các con số",
        subtitle: "Mendeleev chắc vui lắm",
        type: "text", 
        key: "Ai giỏi hoá học chắc biết đó",
        content: "1, 8, 15 / 56, 7",
        solution: "hop ban",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Đối chiều từng số theo số hiệu nguyên tử trong bảng tuần hoàn hoá học"
    },
    {
        id: "29",
        title: "Mật thư dạng hình ảnh",
        subtitle: "Mình hay gạch bỏ bằng dấu X, bạn cũng giống mình chứ?",
        type: "img", 
        key: "Mật thư sai rồi, làm gì đây ta?",
        content: "lv31.jpg",
        solution: "tham hiem thien nhien",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Đọc theo các hàng chéo chính và phụ của các ma trận"
    },
    {
        id: "30",
        title: "Mật thư Vgenère",
        subtitle: "Search Google nếu bí quá nha",
        type: "text", 
        key: "SCOUT. Mà em có biết Vigenère là ai không?",
        content: "TCRYG HQKYED",
        solution: "baden powell",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Dịch theo cách dịch của mật mã Vigenère (google đi hen)"
    },
    {
        id: "31",
        title: "Mật thư Playfair",
        subtitle: "Search Google nếu bí quá nha",
        type: "text", 
        key: "VUNGTAU. Hỏi bác Google xem Playfair là mã gì",
        content: "BI BW GT GT CF AF NR FB FN BW GR VB",
        solution: "chuong ngai vat phai vuot qua",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Dịch theo cách dịch của mật mã Playfair (google đi hen)"
    },
    {
        id: "32",
        title: "Mật thư dạng đặc biệt",
        subtitle: "Đem cái Nokia cũ xì ra đê",
        type: "text", 
        key: "Vẽ chữ trên cục gạch",
        content: "17-46-39, 72-29-46, 71-19-93, 17-46-39 / 82-23-36-65, 17-46-39, 17-79-93, 31-17-79",
        solution: "hanh phuc",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "Vẽ các nét theo thứ tự trên điện thoại phím bấm số"
    },
    {
        id: "33",
        title: "Mật thư dạng đặc biệt",
        subtitle: "Bạn có biết bốn phía trên mặt phẳng gồm những gì không?",
        type: "table", 
        key: "XPXTXPPPLTLLPXPLPXXTX",
        content: [
            ['t','k','m','t','n','g'],
            ['h','a','a','r','o','s'],
            ['t','t','t','n','c','a'],
            ['h','a','t','a','h','k'],
        ],
        solution: "that tha tan tam trong sach",
        note: "Ghi đáp án không dấu, có khoảng trắng và không viết hoa",
        help: "X= xuống, T= trái, P= phải, L= lên"
    },
];

export {list};
