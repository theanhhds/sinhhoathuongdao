const gamesList = [
    {
      "_id": "5f3409e47c03a928a81c3189",
      "ten": "Cao - Thấp - Dài - Ngắn",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò (hành động tay của mình) hô: Cao – Thấp – Dài – Ngắn. Người chơi làm theo lời quản trò, quản trò phải dần dần làm nhanh để người chơi dễ bị sai.\n** Chú ý: quản trò phải cho người chơi làm nháp 1 lần rồi mới bắt đầu",
      "check": 1,
      "doi_hinh": "2",
      "confirm_user": "Thế Anh",
      "the_loai": 1,
      "child": [
        "1",
        "1",
        0
      ]
    },
    {
      "_id": "5f340a937c03a928a81c318a",
      "ten": "Đố nghề",
      "ki_nang": [
        0,
        1,
        1,
        0,
        0
      ],
      "so_luong": "3",
      "mo_ta": "Quản trò chia người chơi ra thành nhiều nhóm và mỗi nhóm cử 1 nhóm trưởng. Quản trò sẽ diễn tả hành động và nhóm trưởng có 2 phút để bàn với nhóm sau đó trả lời xem là nghề gì. Quản trò phải diễn tả 1 hành động ít nhất 3 lần, nhóm nào trả lời trước thì được thêm 1 điểm.",
      "check": 1,
      "doi_hinh": "3",
      "confirm_user": "Thế Anh",
      "the_loai": 1,
      "child": [
        "0",
        "1",
        "1"
      ]
    },
    {
      "_id": "5f340b7e7c03a928a81c318c",
      "ten": "Ngón tay nhúc nhích",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "1",
      "mo_ta": "Quản trò đưa 1 ngón tay lên và hát đếm: “Một ngón tay nhúc nhích nè (2 lần). Một ngón tay nhúc nhích nhúc nhích cũng đủ làm ta vui rồi” – Đưa hai ngón tay thì hát đếm thế 1 ngón thành 2 ngón\nMột ngón tay ta hát 2 lần nhúc nhích, 2 ngón tay ta hát 4 lần nhúc nhích … cho đến hết bàn tay – nếu người chơi đếm thiếu thì sẽ bị phạt",
      "check": 1,
      "doi_hinh": "2",
      "confirm_user": "Thế Anh",
      "the_loai": 1,
      "child": [
        "0",
        "1",
        "1"
      ],
      "confirm_user_a": "Thế Hiển",
      "confirm_user_h": "Thế Anh"
    },
    {
      "_id": "5f340c637c03a928a81c318e",
      "ten": "Mưa rơi",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "3",
      "mo_ta": "Quản trò giơ tay lên cao thì nói “Mưa rơi mưa rơi” – quản trò đưa tay càng cao thì người chơi vỗ tay càng lớn – quản trò đưa tay thấp xuống thì người chơi vỗ tay càng nhỏ. Quản trò phải nhanh nhẹn đưa tay lên xuống liên tục – trò chơi không có phạt",
      "check": 1,
      "doi_hinh": "2",
      "confirm_user": "Thế Anh",
      "confirm_user_h": "Thế Anh",
      "the_loai": 1,
      "child": [
        "1",
        "1",
        "0"
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f340cbe7c03a928a81c318f",
      "ten": "Nơm cá/ Xe lửa",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "3",
      "mo_ta": "Các bạn tham gia trò chơi đứng thành vòng tròn, tuỳ theo số lượng người chơi mà đặt số lượng nơm cá tương ứng (cứ 10 người thì đặt 1 nơm cá – nếu như 40 người chơi thì đặt 4 nơm cá). Nơm cá do 2 người nắm tay dang ra và giơ cao, cái nơm được xếp theo vòng tròn. Khi quản trò bắt giọng 1 bài hát những bạn còn lại làm cá chạy theo vòng tròn ngược chiều kim đồng hồ đến các nơm cá sẽ phải chui qua. Tuỳ theo quy định của quản trò thì khi dứt 1 bài hát hoặc khi có hiệu lệnh của quản trò, nơm cá sẽ chụp xuống, ai bị vướng trong nơm cá tức là cá đã bị bắt, bạn đó sẽ bị phạt\nVòng trò sẽ di chuyển theo nhịp nhanh, chậm của bài hát. Khi nơm cá đã chụp xuống, “cá” không được bứt khóa để chạy thoát.",
      "check": 1,
      "doi_hinh": "2",
      "confirm_user": "Thế Anh",
      "the_loai": "1",
      "child": [
        "1",
        "1",
        "1"
      ]
    },
    {
      "_id": "5f340d0b7c03a928a81c3190",
      "ten": "Truyền tin",
      "ki_nang": [
        1,
        0,
        1,
        0,
        1
      ],
      "so_luong": "3",
      "mo_ta": "Tất cả các đội xếp hàng dọc, người quản trò (người điều khiển) cho người đứng đầu hàng đọc nội dung của bản thông tin (tất cả cùng chung 1 bản). Thứ tự từ đội thứ nhất truyền tin cho người thứ hai bằng cách (nói nhỏ vào tai) – cứ thế người trước truyền tin cho người sau – người cuối cùng nhận tin và chạy lên nói cho người điều khiển. Đội nào có nội dung bản tin giống bản tin gốc nhất là đội đó thắng",
      "check": 1,
      "doi_hinh": "3",
      "confirm_user": "Thế Anh",
      "confirm_user_h": "Thế Anh",
      "confirm_user_a": "Thế Anh",
      "the_loai": "1",
      "child": [
        1,
        "1",
        "1"
      ]
    },
    {
      "_id": "5f343d3050963e2a50fad8c4",
      "ten": "Đếm sao",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò hát bài hát: “Một ông sao sáng, 2 ông sáng sao tôi đố anh chị nào 1 hơi đếm hết từ 1 ông sao sáng đến 10 ông sáng sao”. \nNgười chơi được chỉ định sẽ đếm: 1 ông sao sáng, 2 ông sáng sao, 3 ông sao sáng, 4 ông sáng sao, …, 10 ông sáng sao – nếu như người chơi đếm không dứt 1 hơi thì sẽ bị phạt.",
      "check": 1,
      "doi_hinh": "2",
      "confirm_user": "Thế Anh",
      "the_loai": 1,
      "child": [
        "1",
        "1",
        "0"
      ],
      "confirm_user_h": "Thế Anh",
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f34957882a3b70017c87189",
      "ten": "Đi chợ",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò hô: \"Đi chợ, đi chợ\"\nVòng tròn đáp: \"Mua gì, mua gì?\"\nQuản trò sẽ hô tên 1 đồ vật. Ví dụ: Mua sách. Sau đó, quản trò chỉ vào 1 người chơi trong vòng tròn.\nNgười được chỉ sẽ hô: \"Đi chợ, đi chợ\". Vòng tròn đáp:\"Mua gì, mua gì?\"\nNgười chơi sẽ phải lặp lại đồ vật người quản trò nói, cộng thêm 1 món của mình. Ví dụ: Mua sách, mua bút.\nTiếp tục, người kế tiếp đứng bên phải người chơi phải lặp lại những đồ vật đã nêu theo đúng thứ tự, cộng thêm món của mình. Ví dụ: Mua sách, mua bút, mua TV.\nTrò chơi tiếp diễn cho đến khi có người nhớ sai món đồ hoặc sai thứ tự.",
      "check": 1,
      "doi_hinh": "2",
      "confirm_user": "Thế Hiển",
      "confirm_user_h": "Thế Anh",
      "confirm_user_a": "Thế Anh",
      "the_loai": 1,
      "child": [
        0,
        "1",
        "1"
      ]
    },
    {
      "_id": "5f3811ef9451010017697f78",
      "ten": "Tín hiệu câm",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Mỗi người chơi tìm cho mình 1 vị trí thuận tiện. Người quản trò sẽ đánh 1 bản tin sử dụng tín hiệu câm. Ai giải xong trước nhất thì được 3 điểm, xong nhì được hai, xong thứ ba được 1, và còn lại không có điểm",
      "check": 1,
      "doi_hinh": "1",
      "dong_gop": "PolarDD",
      "the_loai": "2",
      "confirm_user_a": "Thế Anh",
      "child": [
        "0",
        "1",
        "1"
      ]
    },
    {
      "_id": "5f46d179ba73d51c04898a6e",
      "ten": "Tôi bảo",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "3",
      "mo_ta": "- Quản trò hô: “Tôi bảo tôi bảo”\nNgười chơi hỏi: “Bảo gì bảo gì”\n- Quản trò nói: “Tôi bảo các bạn vỗ tay 2 cái”\nNgười chơi: vỗ tay 2 lần\nKhi quản trò hô “tôi bảo” thì người chơi phải làm theo. Nếu như quản trò không nói “tôi bảo” mà người chơi làm thì sẽ bị phạt",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f46f96f91f01a0017a91421",
      "ten": "Cướp cờ (cơ bản)",
      "ki_nang": [
        1,
        0,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "+ Quản trò chia tập thể chơi thành hai đội, có số lượng bằng nhau mỗi đội có từ 5-6 bạn, đứng hàng ngang ở vạp xuất phát của đội mình. Đếm theo số thứ tự 1,2,3,4,5… các bạn phải nhớ số của mình.\n+ Khi quản trò gọi tới số nào thì số đó của hai đội nhanh chóng chạy đến vòng và cướp cờ.\n+ Khi quản trò gọi số nào về thì số đó phải về\n+ Một lúc quản trò có thể gọi hai ba bốn số",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh",
      "video": "GcP1VgEQaMk"
    },
    {
      "_id": "5f4710dea28b4f0017488584",
      "ten": "Nhớ chuỗi Morse (Biến thể trò Đi chợ)",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Người đầu tiên bắt đầu trò chơi sẽ thổi (hoặc đọc) một chữ cái theo dạng Morse: Ví dụ: Tích Te (A).\nNgười kế tiếp phải thổi (đọc) lại chữ đó cũng bằng Morse và thêm 1 chữ mới. Ví dụ: Tích te, te te tích (G).\nNgười tiếp theo phải thổi (đọc) lại tất cả những chữ đã có và thêm 1 chữ mới của mình.\nTrò chơi tiếp diễn đến khi có người trong vòng tròn thổi (đọc) sai 1 chữ.\n\nGợi ý: Để nhớ chuỗi này rất khó trừ khi lúc nghe, mình phải nhanh chóng quy đổi các chữ đó về chữ cái bình thường để dễ nhớ hơn. Ví dụ: A, G, T...",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai T_T",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Hiển"
    },
    {
      "_id": "5f471254a28b4f0017488585",
      "ten": "Bắt cua nói thầm",
      "ki_nang": [
        0,
        1,
        1,
        0,
        0
      ],
      "so_luong": "1",
      "mo_ta": "Chia thành 2 đội chơi, đứng về 2 phía cách xa nhau.\nQuản trò đứng giữa làm trọng tài.\nĐội 1 sẽ cử người lên thì thầm vào tai quản trò tên của 1 người ở đội bên kia.\nĐội 2 phải cử 1 người lên gặp quản trò. Nếu người đó là người đã được đội 1 chọn, người đó sẽ bị loại khỏi cuộc chơi. Đội 2 phải cử 1 người khác lên thay. Nếu người đi lên không phải là người được chọn thì an toàn, và được nói tên 1 người chơi của đội 1.\nĐội chiến thắng là đội loại hết được các thành viên của đội còn lại",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Hiển",
      "pics": null,
      "video": ""
    },
    {
      "_id": "5f4cbd01d8060b0017c2b408",
      "ten": "Em bé tập đi (Truyền tin)",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò cho đoàn xếp thành 1 hàng ngang.\nKẻ vạch đích cách hàng ngang 15-20m.\nQuản trò thổi truyền 1 bản tin ngắn (có thể là 1 từ). Trong vòng 5s, em nào cảm thấy tự tin là mình đã dịch được bản tin, bước lên trước 1 bước. Quản trò sẽ gọi ngẫu nhiên 1 người trong số vừa bước lên để hỏi bản tin. Nếu trả lời sai, người đó phải quay lại vạch xuất phát.\nTrò chơi kết thúc khi có người đầu tiên bước qua vạch đích.\n\n* Trò này có thể dùng cho tất cả các môn truyền tin (tín hiệu câm, morse, semaphore...) và có thể dùng cho nút dây (trong 10s, nếu làm đúng nút yêu cầu thì được bước lên 1 bước).",
      "check": 1,
      "doi_hinh": "4",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Hiển"
    },
    {
      "_id": "5f4cbe35d8060b0017c2b409",
      "ten": "Cướp cờ morse",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Đối kháng 2 đội. Tùy theo số lượng người chơi, quản trò có thể phân cho mỗi em mang 2-3 thẻ chữ cái bất kỳ (thẻ này nên được đeo trước người, ai cũng có thể nhìn thấy).\nTrò chơi diễn ra như trò cướp cờ thông thường, tuy nhiên quản trò sẽ không gọi số mà thổi Morse. Ai đang mang chữ cái Morse đó sẽ phải chạy lên cướp cờ.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Hiển"
    },
    {
      "_id": "5f4cc082d8060b0017c2b40a",
      "ten": "Tình anh em",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Trước khi chơi, kể cho cả đoàn nghe câu chuyện về 2 anh em.\nCó 2 anh em rất yêu thương nhau. Khi cha mẹ qua đời đã để lại cho 2 anh em 2 mảnh ruộng bằng nhau.\nNgười em thì tự nhủ, mình sống 1 mình, không cần nhiều gạo như thế. Anh trai mình còn phải nuôi vợ con, sẽ cần nhiều gạo hơn. Nghĩ thế, ban đêm, cậu em lặng lẽ vác những bao gạo sang để vào kho của người anh.\nPhần người anh, anh lại nghĩ, em mình cũng cần dành dụm để có tiền lo lấy vợ sau này, nên mỗi đêm anh vẫn thường vác bao gạo sang kho của người em.\nVì thế nên dù chuyển gạo đi rất nhiều, nhưng 2 anh em rất ngạc nhiên khi thấy kho của mình không bị vơi đi.\n1 đêm sáng trăng, 2 anh em đang vác bao gạo thì chạm mặt nhau giữa đường. Cả 2 hiểu ra vấn đề, và ôm chầm lấy nhau.\n\nTrò chơi:\n- Vật dụng: 7-10 cái nón bê rê cho mỗi đội. 2-3 gậy 1m6 mỗi đội.\n- Kẻ 2 vòng tròn cách nhau 10m. Cho hết nón vào 2 vòng tròn.\n- Khi có hiệu lệnh bắt đầu, lần lượt 2-3 người của mỗi đội sẽ dùng gậy để móc nón lên và đem để vào vòng tròn của đội bên kia. Sau đó về giao gậy cho người tiếp theo trong đội lên tiếp tục cuộc chơi.\n- Hết thời gian (5'), quản trò sẽ cho cả đoàn ngừng lại và bắt đầu đếm nón. Đội nào còn ít nón hơn là đội chiến thắng (vì đã yêu thương nhiều hơn).",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Hiển"
    },
    {
      "_id": "5f4e4b45e7cdde0017347303",
      "ten": "Người - mèo - chuột",
      "ki_nang": [
        1,
        1,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "- Chia thành 2 nhóm đứng đối đầu sau vạch mức cách nha 6m-10m\n- Mỗi nhóm cử 1 bạn để thách đấu, 2 bạn đứng đối lưng nhau ở giữa 2 hàng \n- Sau khi nghe hiệu lệnh 2 bạn quay mặt vào nhau chơi oẳn tù xì dưới hình thức làm động tác mô phỏng của 3 nhân vật người - mèo - chuột ( hoặc 3 nhân vật bất kì) với quy ước chuột sợ mèo, mèo sợ người, người sợ chuột\n- Bạn nào chọn nhân vật mạnh hơn sẽ đuổi và chạm vào bạn có nhân vật yếu hơn trước khi bạn chọn nhân vật yếu hơn chạy kịp về đích\n- Nếu sau khi quay lại mà bạn nào không kịp làm động tác sẽ tính là nhân vật yếu hơn và bị đuổi bắt  ",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Voi nhẫn nại",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e4debe7cdde0017347304",
      "ten": "Người - mèo - chuột (Nâng cao)",
      "ki_nang": [
        1,
        1,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "- Chia thành 2 team đứng đối đầu cách nhau 6m-10m và phát cho mỗi team 1 bảng và viết ( hoặc vật dụng thay thế tương tự)\n- Sẽ có 3 nhân vật người- mèo- chuột, quy ước mèo sợ người, chuột sợ mèo, người sợ chuột\n- Mỗi team sẽ thảo luận để chọn 1 nhân vật mỗi lượt và cử 1 đại diện ra giữa 2 hàng để đấu, 2 đại diện đứng đối mặt nhau\n- Nghe hiệu lệnh đại diện 2 đội đưa bảng có nhân vật mình ra\n- Đội nào có nhân vật mạnh hơn sẽ đuổi và chạm vào người đội có nhân vật yếu hơn trước khi đội có nhân vật yếu hơn chạy về vạch đích đội mình",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Voi nhẫn nại",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e50f4e7cdde0017347305",
      "ten": "Ma trận",
      "ki_nang": [
        0,
        1,
        1,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "- Vẽ một ma trận chữ nhật có chiều rộng có số ô bằng số đội, chiều dài có số ô bất kì khoảng 10 ô\n mỗi hàng ngang của hình chử nhật chỉ có 1 ô là an toàn còn lại là boom (ô hình phạt)\n- Nhiệm vụ của các đội là lần cử từng thành viên lên để tìm lần lượt những ô an toàn giải mã ma trận, nếu đi vàng ô boom thì phải thực hiện hình phạt và quay về cuối hàng ( không dùng giấy bút hay vật dụng để ghi lại)\n- Lần lượt mỗi đội cử 1 người chơi, r đến đội kế tiếp\n- Đội nào có bạn đi được đến hàng cuối cùng trước là người chiến thắng",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Voi nhẫn nại",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e54cce7cdde0017347306",
      "ten": "Truyền xu",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "- Ngồi thành vòng tròn\n- Quản trò chọn 1 bạn vào giữa vòng tròn\n- Các bạn trong vòng tròn sẽ đặt tay trái xòe ngửa ra trên đùi mình còn tay phải di chuyển liên tục qua lại từ tay mình tới tay bạn bên phải mình và ngược lại để di chuyển đồng xu xung quay vòng tròn, nhiệm vụ là không cho bạn ở giữa vòng tròn thấy\n- Bạn ở giữa nhắm mắt cho tới khi nghe hiệu lệnh của quản trò sẽ mở mắt ra và quan sát xem động xu đang ở đâu, bạn ở giữa vòng tròn chỉ được ngồi giữa hình tròn và xoay người để tìm đồng xu chứ không được di chuyển\n- Sau khi xác định được đồng xu ở đâu hoặc nghi ngờ thì bạn ở giữa hô dừng, sau khi bạn ở giữa hô dừng thì các bạn trong vòng tròn dừng di chuyển tay không được chuyển động và nắm tay trái lại\nnếu bạn ở giữa đoán đúng thì bạn bị đoán sẽ nhận hình phạt từ vòng tròn và tiếp tục vô giữa vòng tròn, còn bạn ở giữa không đoán được sẽ nhận hình phạt từ vòng tròn và quản trò sẽ cử 1 bạn khác thay thế",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Voi nhẫn nại",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e6207e7cdde0017347307",
      "ten": "Nghệ sĩ và những bức tượng",
      "ki_nang": [
        0,
        1,
        1,
        0,
        1
      ],
      "so_luong": "1",
      "mo_ta": "Chọn một thành viên là \"Người Nghệ Sĩ\".\nCác thành viên còn lại có nhiệm vụ tạo nên một bức tranh bằng dáng người của họ.\nDùng điện thoại chụp lại bức tranh ấy, Người Nghệ Sĩ sẽ có nhiệm vụ ghi nhớ toàn thể bức tranh trong vòng 10 giây.\nSau đó các thành viên dựng lại bức tranh ấy mà không nhìn vào tấm hình.\nNgười Nghệ Sĩ chỉ ra ai đang làm khác so với hành động của mình trong bức tranh nguyên bản, gõ nhẹ vào trán và người đó sẽ bị loại khỏi vòng chơi.\nLặp lại vòng chơi với một bức tranh khác và loại dần từng người.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e64f4e7cdde0017347308",
      "ten": "Làm nút dây bịt mắt",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chia theo nhóm 5-7 người, ngồi thành vòng tròn nhỏ. Tất cả lấy khăn quàng bịt mắt mình lại.\nCác đội sẽ được truyền một sợi dây, trên đó có các nút (tuỳ theo trình độ tân sinh/ hạng nhì). Mỗi thành viên lần lượt \"cảm nhận\" nút dây trên sợi dây đó.\nSau khi truyền xong 1 vòng, các đội bỏ bịt mắt và có một phút để làm lại các nút dây như sợi dây mẫu theo thứ tự xuất hiện. Đội nào làm đúng nhiều nhất giành chiến thắng",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Khổng tước",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e6da6e7cdde0017347309",
      "ten": "Ha Ha Ha",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Sắp xếp người chơi thành vòng tròn. \nNgười thứ nhất nói \"ha\", người thứ hai nói  \"ha ha\", người thứ ba nói \"ha ha ha\" và tiếp tục xung quanh vòng tròn. \nTừ ha phải được nói mà không cười. Ai cười khi đang nói ha sẽ bị loại. \nNgười ở lại lâu nhất sẽ chiến thắng.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Chào Mào",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f4e77a4e7cdde001734730a",
      "ten": "Khí, Nước, Đất",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "3",
      "mo_ta": "Chuẩn bị: 1 trái cầu lông\nChọn 1 người chơi vào giữa vòng tròn.\nNgười chơi ném trái cầu vào 1 người trong vòng tròn và hô lên 1 trong 3 từ (Khí, Đất, Nước)\nNếu là Đất, người bị ném trúng sẽ phải nêu lên tên của 1 loài động vật sống trên đất liền. Tương tự với các từ khác.\nNgười bị ném trúng có 10 giây để suy nghĩ về tên của các loài động vật. Cả vòng tròn cùng đếm ngược từ 10-0.\n\nLưu ý: \nKhông được lặp lại tên đã được nêu trước đó.\nNếu người bị ném trúng không nêu được tên trong vòng 10s, người đó sẽ bị loại. \nAi trụ tới cuối game sẽ thắng\n",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Khổng Tước",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Thế Anh"
    },
    {
      "_id": "5f506c7058a5db0017cb5273",
      "ten": "Đùng Á - phiên bản bắn người bên cạnh",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Mọi người xếp thành vòng tròn và học khẩu hiệu: chỉ tay + hô \"Đùng\" để bắn, và thụt xuống + hô \"Á\" để né.\nBắt đầu trò chơi: người quản trò hô \"Đùng\" và chỉ tay vào một người bất kỳ trong vòng tròn. Người đó phải hô \"Á\" và thụt xuống, và 2 người cạnh bên người bị quản trò bắn phải giương tay hô \"Đùng\" bắn nhau. Ai bắn nhanh hơn sẽ chiến thắng; người còn lại nếu bắn chậm hơn, bắn hụt, hoặc không bắn sẽ bị \"chết\" và ngồi xuống đất đến hết trò chơi.\n\nTrong trường hợp người đầu tiên bị quản trò chọn bắn không hô \"Á\" và thụt xuống, người đó sẽ là người bị \"chết\" và 2 người cạnh bên không phải bắn nhau. Những người hô \"Á\" và \"Đùng\" khi không phải lượt của mình cũng bị \"chết\"\n\nTrò chơi lặp lại đến khi còn 1-2 người còn sống cuối cùng là người chiến thắng.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "AWAKENEDcamel",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f509d279bbb8c0017254b86",
      "ten": "Công Thành",
      "ki_nang": [
        1,
        1,
        0,
        0,
        1
      ],
      "so_luong": "1",
      "mo_ta": "Đạo cụ: bóng bay, bịt mắt.\nChia đội: 1 đội gồm 3 người trở lên. (3-5 người là tốt nhất.)\nTrò chơi: \n- 1 đội sẽ có 1 Chủ Thành, bạn này sẽ thổi 1 quả bóng bay (không buộc/cột miệng bóng) và cầm bằng 1 tay; những bạn còn lại trong đội làm Tường Thành. Tường Thành nắm tay thành vòng tròn, Chủ Thành đứng giữa vòng tròn. \n- Khi có hiệu lệnh bắt đầu, các \"tòa thành\" sẽ di chuyển để tấn công \"tòa thành\" khác với mục tiêu bóp, hất, giành, làm xì trái bóng của Chủ Thành đội khác. Nếu bị xì bóng, hay Tường Thành buông tay nhau thì coi như thua.\n- Có thể nâng độ khó của trò chơi bằng cách bịt mắt những bạn Tường Thành.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "HHY̤̮Đ",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f511adfe56c7900178e8b5c",
      "ten": "Gọi Tên",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "1",
      "mo_ta": "Trò chơi: Trong trò chơi này, người chơi sẽ phải thuộc tên tất cả mọi người trong vòng tròn. \nNgười chơi Văn A trong vòng tròn sẽ bắt đầu lượt chơi bằng việc vỗ tay 2 lần và hô \"Văn A gọi Nguyễn B\", lúc này người chơi Nguyễn B phải lập tức tiếp tục vỗ tay 2 lần và hô \"Nguyễn B gọi Kim C\", sau đó người chơi Kim C cũng nhanh chóng tiếp tục vỗ tay và hô \"Kim C gọi...\"\nNgười chơi nào hô chậm, hoặc không nhớ tên bạn mình, hoặc hô tên người đã được hô trước đó thì sẽ tính là thua cuộc, phải ra khỏi vòng tròn.\nLượt chơi kết thúc khi chỉ còn 2 người chơi.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        0,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f511defe56c7900178e8b5d",
      "ten": "Diễn viên câm",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cách chơi: Quản trò sẽ chọn một cá nhân trong số những ngưòi chơi, bí mật giao cho người đó diễn tả 1 vai trò (1 câu thành ngữ, 1 cái tên, 1 loài vật, 1 nghề nghiệp, v.v)\nNgười được chọn sẽ dùng ngôn ngữ cơ thể diễn tả điều mình muốn nói với những người chơi khác.\nLượt chơi kết thúc khi có người đoán đúng, và 1 người chơi khác sẽ được chọn để tiếp tục trò chơi.",
      "check": 1,
      "doi_hinh": "1",
      "dong_gop": "HHY̤̮Đ",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5122a2e56c7900178e8b5e",
      "ten": "Caro Oẳn Tù Xì",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "1",
      "mo_ta": "Chuẩn bị: \n- Vẽ 1 ô Caro lớn trên bảng/ trên đất/ trên giấy.\n- Bút/phấn để vẽ quân cờ X,O hoặc vật dụng thay thế quân cờ X,O.\nĐội hình: \n- 2 đội chơi xếp thành 2 hàng dọc. Phía trước 2 đội, cách khoảng 5m là ô Caro.\nCách chơi:\n- 2 người đầu tiên của 2 đội sẽ Oẳn Tù Xì (Kéo Búa Bao) với nhau. Ai thắng sẽ mau chóng chạy lên ô Caro và đi 1 nước đi trên bàn cờ. Trong lúc đó, 2 người thứ 2 của 2 đội sẽ tiếp tục Oẳn Tù Xì để giành lượt đi. Tương tự với người thứ 3, 4, 5, v.v.\n-Trò chơi kết thúc khi 1 đội hoàn thành 1 hàng dọc/ngang/chéo.\n- Có thể tăng độ khó của trò chơi bằng cách giao luật như sau: trong lượt đi của mình, người chơi có thể lựa chọn đi 1 nước đi của mình hoặc xóa 1 nước đi của đối thủ.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "HHY̤̮Đ",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu",
      "pics": null,
      "video": ""
    },
    {
      "_id": "5f512435e56c7900178e8b5f",
      "ten": "Gọi Tên (phiên bản 2)",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "1",
      "mo_ta": "Cách chơi: \n- Người chơi Văn A trong vòng tròn sẽ bắt đầu lượt chơi bằng cách hô tên của mình lên. Khi đó người chơi Nguyễn B bên cạnh sẽ tiếp \"Văn A, Nguyễn B.\" Tiếp theo, người chơi Kim C bên cạnh sẽ tiếp \"Văn A, Nguyễn B, Kim C.\"\n- Tương tự cho đến người cuối cùng của vòng tròn.\n- Nếu người chơi nào hô chậm, hô sai tên hoặc sai thứ tự thì xem thư thua, phải bước ra khỏi vòng tròn.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f52045594297c001770de85",
      "ten": "Tạp âm",
      "ki_nang": [
        0,
        1,
        0,
        0,
        1
      ],
      "so_luong": "1",
      "mo_ta": "•ĐỘI HÌNH: \n/Chia nhóm, mỗi nhóm có 1 đội trưởng. Thành viên các nhóm phải xếp theo các đa giác (nhằm tăng độ nhiễu cho âm thanh).\n•ĐÁP ÁN: \n/Quản trò bí mật đưa chủ đề của đáp án cho các đội trưởng. Các thành viên còn lại trong lúc nhắm mắt được đưa đáp án nhiễu, mỗi đội chỉ có 1 người nhận đáp án đúng, không ai biết rằng mình nắm giữ đáp án đúng hay nhiễu\n(Ví dụ:\n* Chủ đề: Thú có vú\n- Đội A: Ly, Kem, Cốc, Heo - đáp án\n- Đội B: Ca, Má, Bò - đáp án, Tim).\n•BẮT ĐẦU:\n/Quản trò hô to, cả vòng tròn đồng thanh nêu đáp án của mình. Nhiệm vụ đội trưởng phải chắt lọc thông tin dựa theo chủ đề. Hô bao nhiêu lượt tuỳ thích, đội trưởng nào nghe được đúng đáp án trước sẽ thắng.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Tám",
      "the_loai": "1",
      "child": [
        0,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f539470d75b300017d2c396",
      "ten": "Chiếc đũa thần ",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cây đũa thần có phép, điều khiển được những người xung quanh, một người được chỉ định để làm người điều khiển, người điều khiển nghiên đũa bên trái, mọi người chạy vòng bên trái, người điều khiển nghiên đũa bên phải, mọi người chạy vòng bên phải. Bất ngờ người điều khiển tung đũa lên trời, mọi người chạy trốn, người điều khiển bắt được ai thì người đó vào làm điều khiển",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "vk",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f539531d75b300017d2c397",
      "ten": "Sấp ngửa",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vẽ hai vạch cách nhau 20 m làm hai biên giới, vẽ một vạch giữa sân cách đều 2 vạch kia. Tất cả bầy chia làm 2 phe đều nhau, phe sấp phe ngửa đứng sát lưng vào nhau dọc theo vạch giữa. \nQuản trò tung đồng bạc cắt lên, khi nó rơi xuống đất nếu là sấp kêu sấp ngửa kêu ngửa. \nNếu quản trò kêu sấp thì phe sếp phải cố hết sức chạy về phía vạch của mình, phe còn lại chạy theo vỗ vào lưng phe kia \n            Sói nào bị sói phe kia  vỗ vào lưng sẽ cõng sói đó về phía sân ngược lại. \n",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f539590d75b300017d2c398",
      "ten": "Giữ đá ",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Mỗi sói đặt cục đá nhỏ trên mu bàn tay. Khi có lệnh, các sói sẽ dùng các bộ phận có thể để làm rơi cục đá của đối phương nhưng phải giữ được cục đá của mình ",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f53961cd75b300017d2c399",
      "ten": "Làm chậm một động tác",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "QT đứng giữa vòng tròn. Tất cả cùng bắt một số bài hát sinh hoạt (nên chọn những bài nhanh, mạnh). QT bắt đầu trước, ví dụ là VỖ TAY (2 cái), lúc đó vòng tròn vẫn đứng yên. QT chuyển sang DẬM CHÂN (2 cái), lúc đó vòng tròn mới bắt đầu thực hiện động tác VỖ TAY. QT tiếp tục chống hai tay lên hông (2 cái), đồng thời vòng tròn sẽ bắt đầu thực hiện động tác thứ hai của QT đó là DẬM CHÂN... trò chơi cứ thế tiếp diễn theo bài hát, vòng tròn lặp lại các động tác của QT thực hiện, nhưng mà chậm đi một động tác. \nLuật chơi: \nAi làm sai, làm khác, làm chậm sẽ bị phạt \nCách tạo kịch tính: Để tăng thêm tính vui nhộn, QT có thể thực hiện những động tác liên tục, và vận động mạnh như hít đất,... nhưng chú ý, phải thay đổi động tác liên tục (mỗi động tác chỉ thực hiện trong vòng 2 nhịp) và không bị trùng lặp. \nChú ý: Tăng dần mức độ vận động\n",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f539676d75b300017d2c39a",
      "ten": "Đếm tiền",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "1. Người chơi nhận giá tiền, con gái 1k, trai 500. \n2. Quản trò hô “đếm tiền, đếm tiền”, người chơi hô “bao nhiêu, bao nhiêu”. Quản trò đưa ra số tiền, người chơi ghép nhóm theo số lượng đủ để cộng thành số tiền, cầm tay thành vòng tròn.\n3. Số người bị lẻ sẽ bị phạt.\n",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5396fcd75b300017d2c39b",
      "ten": "Cá lớn - cá bé",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "1. Tất cả đứng thành vòng tròn \n2. QT hướng dẫn: khi nói Cá lớn thì dang tay ra, khi nói Cá bé thì khép tay lại. 3. Người điều hành nói cá lớn, cá bé nhưng không làm theo quy luật, người nào làm sai thì sẽ bị phạt\n",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        0,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5397bdd75b300017d2c39c",
      "ten": "Canh Giờ",
      "ki_nang": [
        0,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Cho đoàn ngồi thành vòng tròn, dùng khăn quàng bịt mắt tất cả các em.\nKhi Trưởng kêu bắt đầu, các em bắt đầu canh thời gian.\nEm nào nghĩ rằng 1 phút đã trôi qua, thì đứng lên.\nEm nào canh giờ chính xác nhất là người chiến thắng.\n(Lưu ý không cho các em sử dụng đồng hồ hoặc các vật dụng điện tử)",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "2",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Karhu",
      "pics": null,
      "video": ""
    },
    {
      "_id": "5f539821d75b300017d2c39d",
      "ten": "Nhanh mắt",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cho cả bầy ra ngoài. Trưởng sẽ đặt 1 đồ vật nhỏ (chiếc nhẫn, cây kim kẹp...) ở 1 vị trí trong phòng. Đảm bảo rằng đồ vật đó có thể nhìn thấy được, không bị che đậy, nhưng cũng cần nằm ở 1 nơi kín đáo, ít bị chú ý.\nSau đó, Trưởng gọi các em vào và nói cho các em nghe đồ vật cần tìm.\nCác em bắt đầu đi tìm khắp nơi trong phòng. Khi em nào nhìn thấy đồ vật, thì ngồi xuống.\nTrưởng sẽ để ý khoảng thời gian từ em tìm được sớm nhất và tìm được trễ nhất.\n\n",
      "check": 1,
      "doi_hinh": "1",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        0,
        0
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f55efcb665bd000177aadf9",
      "ten": "Người mù định hướng",
      "ki_nang": [
        0,
        0,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Các đội đứng theo hàng dọc, cách nhau 1 sải tay.\nTrước khi chơi, quản trò chỉ cho các em hướng bắc và yêu cầu tất cả cùng quay về hướng bắc.\nSau đó, yêu cầu tất cả dùng khăn quàng bịt mắt.\nQuản trò hô tên 1 hướng tất cả đều đồng loạt quay về hướng đó.\nĐiểm thú vị là sau 5,10 lần quay, có thể cho các em tháo khăn ra, và tình cảnh mỗi người quay 1 hướng sẽ rất hài hước.\nNâng cấp 1: Có thể thêm vào 4 hướng phụ: ĐB, TB, ĐN, TN.\nNâng cấp 2: Quản trò sẽ xoay ngẫu nhiên từng em theo các hướng khác nhau (trong 4-8 hướng đã giới thiệu) và sau đó tiếp tục trò chơi.",
      "check": 1,
      "doi_hinh": "1",
      "dong_gop": "Nai tê tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f55f130665bd000177aadfa",
      "ten": "Gút đôi",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chia đoàn thành từng nhóm 2 em, khoác tay lên vai nhau, mỗi nhóm có 1 sợi dây dù.\nYêu cầu: mỗi người chỉ được dùng 1 tay cầm 1 đầu dây, phối hợp với bạn kia để làm nút dây theo yêu cầu của quản trò.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f55f263665bd000177aadfb",
      "ten": "Mò nút",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vật dụng: 1 chiếc túi (không nhìn thấy bên trong), 1 sợi dây dù lớn.\nQuản trò làm 1 nút dây bí mật đặt vào bên trong túi.\nMỗi đội cử 1 người lên, cho tay vào trong túi để mò nút dây và đoán xem đó là nút gì.\nNgười đó chạy xuống nói cho đội mình biết và cả đội cùng làm nút dây và đem lên trình diện.\nĐội nào mà tất cả thành viên cùng làm xong trước là đội ghi điểm.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f55f3ab665bd000177aadfc",
      "ten": "Công thành chiến",
      "ki_nang": [
        1,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Làm 1 đoạn đường ngoằn ngoèo bằng cách rải giày, dép hoặc các hòn đá cách đều nhau dọc đường.\nKhi có hiệu lệnh bắt đầu, người đầu tiên của 2 đội sẽ nhảy lên các hòn đá (hoặc giày) để đi đến đầu bên kia. Khi gặp nhau, cả 2 sẽ oẳn tù xì (kéo - búa - bao), người thắng sẽ tiếp tục bước, còn người thua phải bước ra khỏi con đường. Đội thua sẽ cử 1 người khác xuất phát từ đầu để chạy về phía bên kia. Trò chơi chấm dứt khi có 1 đội đến được đầu bên kia của con đường.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f55f457665bd000177aadfd",
      "ten": "Công thành chiến (version truyền tin)",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Làm 1 đoạn đường ngoằn ngoèo bằng cách rải giày, dép hoặc các hòn đá cách đều nhau dọc đường.\nKhi có hiệu lệnh bắt đầu, người đầu tiên của 2 đội sẽ nhảy lên các hòn đá (hoặc giày) để đi đến đầu bên kia. Khi gặp nhau, quản trò sẽ dùng Morse hoặc Semaphore truyền 1 bản tin (có thể là 1 từ hoặc 1 chữ), người nói đúng bản tin sẽ tiếp tục bước, còn người thua phải bước ra khỏi con đường. Đội thua sẽ cử 1 người khác xuất phát từ đầu để chạy về phía bên kia. Trò chơi chấm dứt khi có 1 đội đến được đầu bên kia của con đường.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f55f4a6665bd000177aadfe",
      "ten": "Công thành chiến (version Nút dây)",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Làm 1 đoạn đường ngoằn ngoèo bằng cách rải giày, dép hoặc các hòn đá cách đều nhau dọc đường.\nKhi có hiệu lệnh bắt đầu, người đầu tiên của 2 đội sẽ nhảy lên các hòn đá (hoặc giày) để đi đến đầu bên kia. Khi gặp nhau, quản trò sẽ yêu cầu 1 nút dây, người làm xong trước sẽ tiếp tục bước, còn người thua phải bước ra khỏi con đường. Đội thua sẽ cử 1 người khác xuất phát từ đầu để chạy về phía bên kia. Trò chơi chấm dứt khi có 1 đội đến được đầu bên kia của con đường.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f576687e1f1280017e4bedd",
      "ten": "Trò chơi kim",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Đặt trên một mặt phẳng 20 món đồ vật. Mở khăn ra để các em nhìn kỷ trong một phút (tay để sau lưng, giữ yên lặng), rồi phủ khay lại. Các em phải ghi danh sách những vật đã quan sát trong thời gian từ 3 đến 5 phút.\nNâng cấp: Vẽ một lưới gồm nhiều ô (4x5 nếu có 20 món), đặt từng món đồ vật vô từng ô. Các em phải ghi nhớ chính xác vị trí món đồ nào ở ô nào.",
      "check": 1,
      "doi_hinh": "1",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f589bfaf640e20017f2ee59",
      "ten": "Nhớ màu",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cho đoàn đứng thành vòng tròn.\nGiữa vòng tròn vẽ 1 vòng tròn nhỏ, chia làm 4 phần bằng nhau, mỗi phần tô 1 màu phấn khác nhau.\nKhi bắt đầu, người đầu tiên phải nhảy vào 1 màu trong vòng tròn.\nNgười tiếp theo sẽ nhảy lại màu của người đầu tiên, và nhảy vào 1 màu mới của mình.\nNgười kế tiếp phải nhảy lại những màu cũ theo đúng thứ tự, cộng thêm 1 màu mới.\nLượt chơi kết thúc khi có người nhảy sai.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58a49ff640e20017f2ee5a",
      "ten": "Cướp răng",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cho đoàn ngồi sát nhau thành vòng tròn. Gọi số từng người từ 1 cho đến hết.\nQuản trò sẽ gọi 1 số bất kỳ. 2 người ngồi sát bên người đó sẽ tìm cách bịt miệng người đó trước khi em ấy kịp gọi 1 số khác. Quá 5 giây chưa gọi được số khác thì bị loại, phải lui ra ngoài vòng tròn.\n1 số luật chơi:\n- Không gọi 2 số sát bên mình.\n- Không gọi lại người vừa gọi mình\n- Gọi nhầm số đã chết thì cũng bị loại theo.\nLưu ý: Nếu còn ít hơn 5 người thì có thể miễn cho 2 luật đầu tiên.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58a5cef640e20017f2ee5b",
      "ten": "Bắn tàu",
      "ki_nang": [
        0,
        1,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chia vòng tròn thành từng nhóm 3 người, ráp tay lại thành 1 chiến hạm có 2 nòng đại bác.\nMỗi tàu sẽ chọn 1 tên cho đội mình. Quản trò có thể quy định chủ đề: VD: con vật, tên nước...\nBắt đầu, quản trò sẽ gọi tên 1 tàu. Tàu được gọi, người bên trái kêu Lắc, người bên phải kêu Cắc, người ở giữa kêu Bùm Tàu ... (tên tàu). Tàu bị bắn sẽ tiếp tục hô theo thứ tự này để bắn tàu khác.\nTàu nào hô sai thứ tự, hoặc lúng túng quá lâu, hoặc gọi trúng tàu đã chìm thì cũng sẽ bị loại khỏi cuộc chơi.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58a689f640e20017f2ee5c",
      "ten": "Tôi cần (version truyền tin)",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Các đội ngồi thành nhóm, hướng mặt về phía quản trò.\nQuản trò dùng morse hoặc semaphore truyền 1 bản tin (1 đồ vật có ở trong sân). Đội nhận được bản tin nhanh chóng đi lấy đồ vật yêu cầu đem lại trình diện là dành được điểm thắng.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58a75ff640e20017f2ee5d",
      "ten": "Dàn hòa tấu",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chia vòng tròn thành 4 nhóm nhỏ, mỗi nhóm là 1 loại nhạc cụ.\nKèn: Tò te tí\nĐàn: Từng tưng tứng\nTrống: Tùng cắc cheng\nHát: là la lá\nQuản trò sẽ bắt 1 bài hát, cả đoàn hát chung. Sau đó, quản trò chỉ tay vào 1 nhóm, nhóm đó sẽ hát theo nhạc cụ của mình (các nhóm khác im lặng).\nVí dụ: bài Kìa con bướm vàng, khi chỉ vào kèn, sẽ hát thành: tò te tí tò, tò te tí tò...\nLưu ý: Quản trò có thể chỉ 2,3 nhóm cùng lúc.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58a8eaf640e20017f2ee5e",
      "ten": "Thầy phù thủy",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Tất cả đứng thành vòng tròn, khoác tay lên vai nhau.\nQuản trò đứng giữa làm thầy phù thủy. Phù thủy có cây gậy phép, đầu gậy chứa thuốc độc, ai đụng vào thì phải chết. Phùy thủy giơ gậy lên thì tất cả phải ngã ngửa người ra để né (thẳng gối). Phù thủy chĩa gậy xuống đất thì tất cả phải nhảy lên.\nAi đụng trúng gậy hoặc buông tay khỏi vai bạn mình sẽ bị loại.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58aaa9f640e20017f2ee5f",
      "ten": "Thủy chiến (truyền tin)",
      "ki_nang": [
        0,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chia thành 2 đội. Mỗi đội vẽ 1 bản đồ 5x5 ô vuông. Trên mỗi ô là 1 chữ cái từ A đến Y (không có Z).\nMỗi đội bí mật bố trí 4 con tàu lên bản đồ: 1 tàu 3 ô, 2 tàu 2 ô và 1 tàu 1 ô (có thể đặt ngang hoặc dọc, không đặt chéo).\nLần lượt từng đội sẽ tấn công đội bên kia bằng cách thổi morse hoặc truyền semaphore vào ô mà mình nghi có đặt tàu của đối phương.\nĐội bị tấn công phải phản hồi bằng các ký tự sau: M (missed - hụt), H (hit - trúng), B (boom - nổ tàu).\nĐội bắn trúng sẽ được bắn tiếp. Bắn sai, mất lượt.\n\nLưu ý: Mỗi đội cần có 1 trọng tài giám sát.\n\nNâng cấp: Thay gì đánh ký tự từng ô. Có thể làm dạng tọa độ: Ngang A-B-C-D-E, dọc 1-2-3-4-5",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58abdbf640e20017f2ee60",
      "ten": "Trao khăn",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chuẩn bị 1 khăn quàng, cột 2 đầu khăn.\nĐoàn đứng thành vòng tròn, tất cả để 2 tay ra sau lưng, lòng bàn tay ngửa.\nQuản trò đi vòng quanh ngoài vòng tròn và bí mật đặt khăn vào lòng bàn tay của 1 bạn trong vòng tròn. Người đó sẽ dùng khăn quất nhẹ người bên phải mình. Người kia sẽ phải chạy 1 vòng quanh vòng tròn để về lại vị trí cũ mới thôi bị quất. Người cầm khăn sẽ tiếp tục đi trao khăn cho người khác.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58ac19f640e20017f2ee61",
      "ten": "Trao khăn (version Nút dây)",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chuẩn bị 1 khăn quàng, cột 2 đầu khăn.\nĐoàn đứng thành vòng tròn, tất cả để 2 tay ra sau lưng, lòng bàn tay ngửa.\nQuản trò đi vòng quanh ngoài vòng tròn và bí mật đặt khăn vào lòng bàn tay của 1 bạn trong vòng tròn. Người đó sẽ dùng khăn quất nhẹ người bên phải mình. Người kia sẽ phải chạy 1 vòng quanh vòng tròn, vừa chạy vừa làm nút dây, khi làm xong về lại vị trí cũ mới thôi bị quất. Người cầm khăn sẽ tiếp tục đi trao khăn cho người khác.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "2",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58ad46f640e20017f2ee62",
      "ten": "Tìm người yêu",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Tất cả ngồi thành vòng tròn. Quản trò mời 1 người ra khỏi vòng tròn sao cho không nghe hoặc nhìn thấy mọi người bàn bạc. Vòng tròn chọn 1 người làm Người Yêu.\nMời người kia quay lại. Người đó được hỏi tối đa 5 câu hỏi với 5 người khác nhau trong vòng tròn. Người trả lời chỉ trả lời có hoặc không.\nVí dụ: người ấy có phải là phụ nữ không?\nSau khi hết 5 câu, người đó phải đoán ra ai là người yêu của mình.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58add9f640e20017f2ee63",
      "ten": "Hiệp sĩ",
      "ki_nang": [
        1,
        0,
        0,
        1,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Chọn 1 em làm công chúa, và 1 em làm hiệp sĩ. Hiệp sĩ được trang bị 1 cái khiêng (bằng nắp nồi).\nCả vòng tròn làm quân địch. Quân địch sẽ chuyền nhau quả bóng để tấn công công chúa.\nCông chúa không được đụng vào bóng, chỉ được né tránh.\nHiệp sĩ dùng khiêng để bảo vệ công chúa.\nKhi công chúa bị trúng bóng, chọn cặp đôi khác vào thay.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58ae76f640e20017f2ee64",
      "ten": "Đấu thương",
      "ki_nang": [
        0,
        1,
        0,
        1,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Chọn 6-8 người, chia làm 3-4 cặp. Mỗi cặp, chọn người to hơn làm ngựa và người nhỏ hơn làm kỵ sĩ.\nMỗi cặp được cấp 1 gậy mét sáu và 1 nón bê rê gắn trên đỉnh gậy.\nKhi bắt đầu, tất cả kỵ sĩ lên ngựa và tìm cách làm rơi nón của đối phương.\nĐội còn lại sau cùng là chiến thắng.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58af1af640e20017f2ee65",
      "ten": "Cáo và gà",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Tất cả đứng thành vòng tròn. Nắm tay nhau.\nChọn 1 người làm cáo và 1 người làm gà. Cả 2 đều bị bịt mắt. Cáo tìm cách bắt gà trong vòng tròn.\nVòng tròn sẽ trợ giúp cả 2 bằng cách: Khi cáo đến gần gà (trong khoảng 3 bước chân), tất cả sẽ cùng tặc lưỡi.\nKhi gà tránh xa được cáo (trên 6 bước chân), tất cả sẽ cùng giậm gậy xuống đất.\nKhi cáo bắt được gà, chọn 2 người mới vào chơi.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f58b00cf640e20017f2ee66",
      "ten": "Thiên thần - ác quỷ",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Kẻ 3 vạch. 1 vạch ở giữa sân, và 2 vạch cuối sân (cách nhau 15m).\n1 đội là thiên thần và 1 đội là ác quỷ. 2 đội đứng quay lưng vào nhau ở giữa sân.\nKhi quản trò hô tên 1 đội, đội đó lập tức quay lưng lại tìm cách bắt đội kia trước khi đội kia về đích. Nếu số người bị bắt lớn hơn số người trốn thoát, đội bắt bớ sẽ thắng và ngược lại.\nLưu ý: Trò chơi nên chơi trên sân cỏ hoặc cát (tránh chơi sân xi măng).",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f59a147a3df85001774232c",
      "ten": "Tìm nhạc trưởng",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cả đoàn ngồi thành vòng tròn.\nQuản trò mời 1 bạn ra khỏi vòng tròn. Vòng tròn bí mật chọn ra 1 người làm nhạc trưởng. Người này có nhiệm vụ thay đổi các điệu vũ mới để cả đoàn cùng làm theo, và không để người bị mời ra phát hiện.\nKhi đã chỉ định xong, quản trò bắt 1 bài hát, nhạc trưởng sẽ cho cả đoàn làm động tác đầu tiên. Quản trò mời người kia trở lại vòng tròn, và đi vòng quanh, quan sát để đoán xem ai là nhạc trưởng.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59a29aa3df85001774232d",
      "ten": "Đường và hẻm",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò chia số lượng người chơi đứng thành 4 hàng dọc đều nhau, cách nhau 1 sải tay.\nChọn ra 2 người làm mèo và chuột.\nTất cả những người còn lại sẽ giang thẳng 2 tay. Mèo và chuột chỉ được rượt nhau qua những con đường trống, không được chen ngang vào giữa 2 tay.\nKhi quản trò hô Đường: tất cả cùng quay sang trái (vẫn giang tay).\nQT hô Hẻm: tất cả quay sang phải (vẫn giang tay).",
      "check": 1,
      "doi_hinh": "4",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59aca6a89e3c0017b09609",
      "ten": "Mèo đuổi chuột",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Cả đoàn đứng thành vòng tròn. Chia đoàn thành từng đôi 2 người. 2 người cạnh nhau đứng chống tay lên hông và đan tay vào nhau. \nChọn ra 2 người làm mèo và chuột. Mèo và chuột sẽ đuổi nhau quanh vòng tròn. Khi chuột muốn dừng lại, nhanh chóng chạy vào 1 đôi, và đan tay vào người kế bên mình. Nếu chuột đứng vào bên phải, thì người bên trái sẽ phải làm chuột và chạy trốn thật nhanh. Nếu chuột đứng vào bên trái, thì người bên phải sẽ làm chuột.\n",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59ad75a89e3c0017b0960a",
      "ten": "STOP",
      "ki_nang": [
        1,
        0,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vật dụng: 1 quả banh lông.\nTất cả đứng thành vòng tròn, sát nhau.\nQuản trò sẽ tung quả banh lên và hô tên 1 người. Người đó sẽ phải quay lại nhặt banh trong khi những người khác bỏ chạy càng xa càng tốt. Người được gọi tên sau khi nhặt được banh sẽ hô STOP và tất cả mọi người sẽ dừng lại. Người cầm banh sẽ chọn 1 người ở gần mình, gọi tên và chọi banh vào mục tiêu.\nNếu mục tiêu bị chọi trúng, hoặc né tránh khỏi tư thế ban đầu sẽ bị thua. Nếu hụt, người chọi banh sẽ bị thua.\nTrò chơi kết thúc khi có người bị thua 3 lần.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59ae5ea89e3c0017b0960b",
      "ten": "Giậm chân",
      "ki_nang": [
        1,
        0,
        0,
        1,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Chia đoàn thành 2 nhóm bằng nhau. Đếm số từng người trong nhóm.\nQuản trò kẻ 1 vòng tròn bán kính tầm 1.5m làm sàn đấu. Quản trò gọi 1 số, 2 người mang số đó sẽ bước ra thi đấu với nhau.\nCách thi đấu: 2 đấu sĩ đặt tay lên vai nhau. Khi có hiệu lệnh bắt đầu, 2 đấu sĩ tìm cách đạp bàn chân của người kia. Nếu đạp trúng sẽ dành chiến thắng.\nLưu ý: Không được rời chân khỏi sàn đấu.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59afaba89e3c0017b0960c",
      "ten": "Sống còn",
      "ki_nang": [
        1,
        0,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vật dụng: 1 quả banh nhựa hoặc banh da nhỏ.\nChia đoàn thành 2 nhóm.\nQuản trò kẻ 2 vòng tròn đồng tâm, 1 lớn, 1 nhỏ.\n1 đội tấn công sẽ đứng ở ngoài vòng tròn lớn. Đội phòng thủ sẽ đứng bên trong vòng tròn nhỏ.\nBắt đầu chơi, đội tấn công sẽ chuyền banh nhau để chọi vào đội phòng thủ. Ai bị trúng banh sẽ bị loại ra ngoài. Lượt tấn công kết thúc khi toàn đội phòng thủ bị loại. Sau đó 2 đội đổi chỗ cho nhau.\nQuản trò sẽ bấm giờ giữa mỗi lượt để xem đội tấn công nào tốn ít thời gian hơn.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59b077a89e3c0017b0960d",
      "ten": "Đạp bóng",
      "ki_nang": [
        1,
        0,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vật dụng: cấp cho mỗi người 1 bong bóng, 1 dây thun.\nMỗi người tự thổi bong bóng và buộc vào mắc cá chân của mình.\nQuản trò kẻ 1 vòng tròn trên mặt đất. Tất cả người chơi bước vào trong vòng tròn, ai ra ngoài là bị loại.\nKhi bắt đầu, tất cả sẽ tìm cách đạp bể bóng của người khác trong khi vẫn phải bảo vệ bóng của mình.\nAi bị bể bóng thì bị loại.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny",
      "pics": [
        "https://images2.imgbox.com/0c/48/0G6rORgq_o.jpg",
        "https://images2.imgbox.com/fa/2e/8C0Rs6PO_o.jpg",
        "https://images2.imgbox.com/83/fe/r7wGBDTU_o.jpg"
      ],
      "video": "oePxVLimdzE"
    },
    {
      "_id": "5f59d6ce09059500174d01e4",
      "ten": "Đẩy gậy",
      "ki_nang": [
        0,
        0,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Chia đoàn thành 2 đội có số lượng bằng nhau và có thể lực tương đồng.\nĐiểm số mỗi đội theo thứ tự từ thấp đến cao.\nQuản trò vẽ 1 vòng tròn trên sân. Quản trò gọi 1 số. 2 người mang số đó sẽ bước vào sàn đấu. Kẹp 1 gậy 1m6 vào trong nách và vào tư thế chuẩn bị. Khi có hiệu lệnh bắt đầu, cả 2 tìm cách dùng gậy đẩy để đối phương văng ra khỏi vòng tròn.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59d7c009059500174d01e5",
      "ten": "Ngược đời",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò sẽ chỉ vào 1 bộ phận trên cơ thể và nói tên 1 bộ phận khác. Ví dụ, chỉ vào mắt và nói: \"Đây là cằm của tôi\". Người đối diện phải nói và làm ngược lại, tức là chỉ vào cằm và nói \"Đây là mắt của tôi\". Ai nói sai sẽ bị loại, và ngồi xuống.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59d86109059500174d01e6",
      "ten": "Chim bay, gà bay",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò nhảy lên, quạt quạt 2 cánh tay và gọi tên 1 con vật. Ví dụ: Chim bay.\nNếu con đó bay được, tất cả vòng tròn sẽ cùng nhảy lên, quạt quạt và hô: Bay, bay.\nNếu con đó không bay được, ví dụ, \"Mèo bay\", thì tất cả đứng yên.\nAi làm sai sẽ bị mời vào trong vòng tròn.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        0,
        0
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59e0f109059500174d01e7",
      "ten": "Tôi cần",
      "ki_nang": [
        0,
        1,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Các đội đứng thành từng nhóm, xung quanh quản trò.\nQuản trò hô: Tôi cần, tôi cần.\nCả đoàn đáp: Cần gì, cần gì?\nQuản trò hô: Tôi cần những món đồ vật bắt đầu bằng chữ \"C\".\nTrong vòng 1 phút, các đội phải tìm càng nhiều đồ vật như vậy càng tốt: Ví dụ: Cặp, Còi, Ca, ...\n",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "confirm_user_a": "Kenny"
    },
    {
      "_id": "5f59ee9fcc8d040017d26e58",
      "ten": "Chọi tù binh",
      "ki_nang": [
        1,
        1,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vật dụng: Cầu đá, phấn\nChia đoàn thành 2 đội có số lượng bằng nhau.\nTrên sân vẽ 3 vạch. 1 vạch ở giữa phân chia 2 đội, và 2 vạch cuối sân, cách vạch giữa 5-7m làm mức tù binh.\n2 đội đứng vào 2 bên sân, không được vượt qua mức (vạch) giữa hoặc mức tù.\nQuản trò giao cầu cho 1 đội. 1 thành viên của đội cầm cầu chọi về phía đội bên kia.\nNếu có người trúng cầu thì bị bắt làm tù binh, phải chạy qua sau mức tù binh của đội bên kia.\nTrường hợp đội kia chụp được quả cầu, người chọi sẽ bị bắt làm tù binh.\nNếu cầu rơi vào phần đất của tù binh, các tù binh được dùng cầu để tấn công đội đối phương. Nếu chọi trúng đội kia, tù binh sẽ được thả về lại đội. Trong quá trình chạy về, phải cố tránh không để bị trúng cầu. Nếu trúng phải về lại mức tù binh. Người bị tù binh chọi trúng cũng sẽ bị bắt làm tù binh.\nTrò chơi kết thúc khi tất cả đội cùng bị bắt hoặc hết giờ (10 phút). Trường hợp hết giờ, đội nào còn nhiều người hơn thì chiến thắng.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Nai Tê Tê",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "confirm_user_a": "Kenny",
      "video": "p3e7_kX1uus"
    },
    {
      "_id": "5f5bb2e54e8b320017f2005c",
      "ten": "Cao bồi cưỡi ngựa",
      "ki_nang": [
        1,
        1,
        0,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Vật dụng: Ghế, bóng bay.\nChia nhóm 6 người, xếp thành hàng dọc. Mỗi người cầm trên tay 1 trái bóng đã thổi căng. \nĐặt trước mặt mỗi nhóm 1 cái ghế đẩu, cách hàng khoảng 4.5m đến 6m.\nKhi có hiệu lệnh bắt đầu, người đầu hàng (cao bồi) của mỗi đội kẹp trái bóng bằng đầu gối của mình và di chuyển lên phía cái ghế của đội mình. Khi đã tới nơi, cao bồi thả bóng lên ghế, và cố gắng làm cho nó nổ bằng cách ngồi lên nó (không được dùng tay để bóp). Sau khi bóng nổ, cao bồi chạy về hàng, đập tay người tiếp theo, và đứng cuối hàng. Người tiếp theo lên và cứ như vậy đến khi bóng nổ hết\nNhóm nào đập nổ hết bóng trước là thắng cuộc.\nLưu ý: Khi chạy lên ghế cao bồi không được làm rớt bóng. Nếu làm rớt thì phải xuất phát lại từ đầu.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bb5e44e8b320017f2005d",
      "ten": "Chiếm pháo đài",
      "ki_nang": [
        0,
        1,
        0,
        1,
        0
      ],
      "so_luong": "3",
      "mo_ta": "Chia người chơi thành 2 nhóm: Phòng Vệ và Tấn Công\nNhóm Phòng Vệ đứng quay lưng vào nhau, nắm tay tạo thành 1 vòng tròn và có 1 nhóm trưởng đứng ở giữa.\nNhóm Tấn Công đứng xung quanh, cách pháo đài khoảng 8-10 bước chân, sau đó sẽ cố gắng đá bóng vào bên trong pháo đài. Trái bóng có thể lăn vào giữa chân các người Phòng Vệ hoặc bay qua đầu họ. Nếu trái bóng bay bổng, Trưởng nhóm Phòng Vệ có thể bắt lấy và ném ra ngoài. Nhưng nếu trái bóng lăn vào trong vòng tròn, pháo đài bị chiếm giữ và 2 nhóm chơi đổi vai trò.\nLưu ý: Đá nhẹ, tránh làm bị thương nhóm Phòng vệ",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bb6294e8b320017f2005e",
      "ten": "Bong bóng Nhật Bản",
      "ki_nang": [
        0,
        0,
        0,
        1,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Tất cả đứng thành vòng tròn. Quản trò chuẩn bị 6 quả bong bóng. Trong mỗi quả bóng có nhét một thông điệp trước khi được thổi. Lần lượt, một quả bong bóng được truyền từ người này qua người kia quanh vòng tròn, cho đến khi quản trò thổi còi. Khi đó, người nào đang giữ bong bóng trong tay sẽ phải đi vào giữa vòng tròn. Người đó phải ngồi lên quả bong bóng cho đến khi nó vỡ, sau đó đọc thông điệp, và thực hiện yêu cầu nêu trong thông điệp (hành động / trả lời câu hỏi).\n",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bb6c04e8b320017f2005f",
      "ten": "Zip! Zap!",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Đứng thành vòng tròn với người quản trò chính giữa. Khi quản trò chỉ vào một người và hô “Zip!”, người đó phải nói tên người đứng bên phải mình trước khi quản trò đếm đến 3. Nêu quản trò hô “zap!”, người chơi phải nói tên nguời đứng bên trái. Ai nói sai tên hoặc đọc quá chậm sẽ bị loại hoặc trở thành quản trò",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bb7704e8b320017f20060",
      "ten": "The red Indian",
      "ki_nang": [
        0,
        0,
        1,
        0,
        1
      ],
      "so_luong": "2",
      "mo_ta": "1 người bịt mát đứng giữa vòng tròn. Bên cạnh là 1 khúc gỗ hoặc 1 vật cứng khác. Vòng tròn chia thành nhiêu đội, mỗi thành viên trong đội được phát 1 mảnh giấy màu mang màu riêng của đội mình. Những người chơi sẽ bò đến và dán mảnh giấy lên khúc gỗ 1 cách thật nhẹ nhàng và im lặng để không bị phát hiện. Nếu người bịt mắt nghe thấy tiếng động, anh ta sẽ hô lên: “Sói” (hoặc từ nào khác) và trỏ tay vào hướng phát ra âm thanh. Người bị phát hiện sẽ phải xuất phát lại từ đầu. Hết thời gian quy định, đội nào dán được nhiều giấy màu nhất sẽ thắng.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bb8c34e8b320017f20061",
      "ten": "Né bóng",
      "ki_nang": [
        1,
        0,
        0,
        1,
        1
      ],
      "so_luong": "3",
      "mo_ta": "Vật dụng: 1 quả bóng (bóng chuyền hoặc bóng nhựa)\nChia ngẫu nhiên người chơi thành 2 nhóm có số lượng đều nhau. 1 nhóm xếp thành vòng tròn lớn, nhóm còn lại đứng rải rác ở bên trong vòng tròn. Nhóm phía vòng tròn sẽ tìm cách ném bóng vào bất kì người nào trong nhóm đứng ở giữa. Người chơi có thể né bằng mọi cách, nhưng không được chạy ra khỏi vòng tròn. Bạn nào bị ném trúng thì ra nhóm vòng tròn. Người cuối cùng còn trụ lại là người thắng cuộc",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        0,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bba844e8b320017f20062",
      "ten": "Người canh giữ kho báu",
      "ki_nang": [
        0,
        0,
        1,
        1,
        1
      ],
      "so_luong": "2",
      "mo_ta": "Người chơi đứng thành vòng tròn. Chọn ra 1 bạn đứng giữa vòng tròn làm \"lính gác\". Bạn này có thể ngồi xuống và bịt mắt. Đặt giữa 2 chân người lính gác 1 món đồ (nón, khăn quàng, chìa khoá,...). Quản trò sẽ chỉ định 1 bạn bất kì tiến vào và cố gắng trộm lấy kho báu. Khi người lính gác nghe thấy tiếng động, bạn đó sẽ chỉ tay về phía đó. Nếu người ăn trộm bị chỉ tay thì thua (ra lại vòng tròn) hoặc trở thành lính gác mới.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bbc204e8b320017f20063",
      "ten": "Shopping",
      "ki_nang": [
        0,
        0,
        1,
        0,
        0
      ],
      "so_luong": "2",
      "mo_ta": "Quản trò chọn 1 bạn đi ra ngoài vòng tròn. Các bạn còn lại sẽ bàn bạc và quyết định 1 công việc (như làm cảnh sát, bác sĩ, trưởng hướng đạo,...). Sau khi đã bàn bạc xong người quản trò mời bạn kia vào. Lúc này bạn đó sẽ lần lượt hỏi từng người trong vòng tròn \"Tôi cần món gì?\". Người chơi sẽ trả lời 1 món đồ mà cần phải có để làm công việc được chọn (ví dụ làm cảnh sát: đồng phục, nón, phù hiệu, súng...). Khi đã hỏi hết tất cả mọi người, người đó sẽ có 2 lượt để đoán công việc của mình. Nếu không đoán trúng thì bạn đó bị phạt.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f5bbda74e8b320017f20064",
      "ten": "Đua bóng bóng",
      "ki_nang": [
        1,
        0,
        0,
        0,
        1
      ],
      "so_luong": "3",
      "mo_ta": "Chuẩn bị: bong bóng thổi thành 2 loại to và nhỏ\nChia thành nhóm có 6 đến 8 thành viên và xếp thành hàng dọc. Vẽ một vạch đích cách người chơi khoảng 15m đến 20m. Người đầu hàng giữ 2 trái bong bóng. Khi quản trò ra hiệu, người đầu hàng sẽ đặt quả bóng nhỏ lên trên quả bóng to và cố gắng giữa thăng bằng. Các người đầu hàng sẽ đua với người của các đội khác để về vạch đích. Đội nào có người về đích trước được cộng 1 điểm.\nLưu ý: Trên đường đi nếu làm rớt bóng thì phải quay lại vạch xuất phát",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "",
      "the_loai": "1",
      "child": [
        0,
        1,
        0
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f64c39128e9840017764222",
      "ten": "Săn voi",
      "ki_nang": [
        1,
        0,
        0,
        1,
        1
      ],
      "so_luong": "3",
      "mo_ta": "Chuẩn bị: Phấn và 1 quả bóng nhựa\nỞ giữa sân vẽ hai vạch trắng cách nhau khoảng 3m, đây sẽ là \"vương quốc voi\". Chọn ra 2 bạn làm thợ săn, các bạn còn lại làm voi. Các chú voi sẽ đứng trong vương quốc của mình. Thợ săn sẽ săn voi bằng cách chọi bóng làm sao để trúng vào phần dưới đầu gối của voi. Bạn nào bị dính bóng thì ra làm thợ săn. Trò chơi tiếp tục cho đến khi chỉ còn lại 1 con voi và là người chiến thắng.",
      "check": 1,
      "doi_hinh": "2",
      "dong_gop": "PolarDD",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5f8ba8fcd270a20017dce209",
      "ten": "Tung hứng bóng nước",
      "ki_nang": [
        1,
        1,
        0,
        0,
        1
      ],
      "so_luong": "1",
      "mo_ta": "Chuẩn bị: bóng nước, tấm khăn/vải.\nChia đội: gồm 2 đội chơi đứng 2 bên sân. 1 đội gồm 2 người trở lên, cùng nhau căng tấm khăn để tung hứng bóng nước.\nCách chơi:\n- Đội 1 đặt trái bóng vào trong khăn, tiếp theo dùng khăn tung/hất bóng về phía đội 2.\n- Đội 2 di chuyển và hứng bóng. Sau đó tung bóng về lại cho đội 1.\n- Đội nào làm bể/rớt bóng hoặc chuyền bóng ra ngoài sân thì thua.",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "HHY̤̮Đ",
      "the_loai": "1",
      "child": [
        1,
        1,
        1
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    },
    {
      "_id": "5fcc4064e9cbab00171ce62f",
      "ten": "Đi sao cho khéo",
      "ki_nang": [
        1,
        1,
        0,
        0,
        1
      ],
      "so_luong": "1",
      "mo_ta": "Set up:\nChia nhóm chơi thành nhiều đội, 1 đội 4-8 người, đánh số 1,2,3,4,... Người trong đội cùng nắm tay nhau thành vòng tròn.\nVẽ 1 đường thẳng dài trên đất, đường thẳng chia thành nhiều đoạn nhỏ, mỗi đoạn đánh 1 hoặc 1 vài số bất kì trong khoảng 1,2,3,4,... \n\nCách chơi:\nCác đội chưa tới lượt chơi sẽ ở ngoài cổ vũ và hát 1 bài hát. \nTrong thời gian 1 bài hát đó, đội chơi giữ nguyên vòng tròn nắm tay, cố gắng bước đi trên đường thẳng về đến đích, với điều kiện đoạn đánh số nào thì chỉ người số đó được bước lên thôi.\nVd: đoạn số 1, 3 thì chỉ người số 1, 3 bước lên vạch và di chuyển.\n\nCách tính điểm: \nĐi đc 1 đoạn = 10 điểm. \nBước ra ngoài vạch/ đi sai người,... 1 lần bị trừ 1 điểm.\n",
      "check": 1,
      "doi_hinh": "3",
      "dong_gop": "Hồng Hạc Yêu Đời",
      "the_loai": "1",
      "child": [
        1,
        1,
        0
      ],
      "video": null,
      "pics": [],
      "confirm_user_a": "Karhu"
    }
  ];

  export {gamesList};