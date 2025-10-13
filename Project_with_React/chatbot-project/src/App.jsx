import { useState,useEffect } from 'react'
import ChatInput from './assets/components/ChatInput'
import ChatHistory from './assets/components/ChatHistory'
import { Chatbot } from 'supersimpledev'
import './App.css'






      

  function App () {

    // dạy AI cách phản hồi
  useEffect(() => {
    Chatbot.addResponses({
      // --- Lời chào hỏi và giới thiệu ---
      'chào bạn': 'Chào bạn! Tôi có thể giúp gì cho bạn hôm nay?',
      'xin chào': 'Xin chào! Rất vui được trò chuyện cùng bạn.',
      'hello': 'Hello! Tôi là trợ lý ảo của bạn.',
      'bạn là ai': 'Tôi là một trợ lý ảo được viết bởi Haruto, được tạo ra để giúp đỡ và trò chuyện với bạn.',
      'bạn tên gì': 'Tôi không có tên riêng, bạn có thể gọi tôi là Trợ lý ảo.',
      'bạn được tạo ra bởi ai': 'Tôi được tạo ra bởi một nhà phát triển rất tài năng!',
      'bạn có khỏe không': 'Tôi là một chương trình máy tính nên luôn "khỏe". Cảm ơn bạn đã hỏi, còn bạn thì sao?',
      'bạn đang làm gì đó': 'Tôi đang ở đây, sẵn sàng trò chuyện và trả lời câu hỏi của bạn.',
      'chào buổi sáng': 'Chào buổi sáng! Chúc bạn một ngày mới tốt lành và tràn đầy năng lượng.',
      'chào buổi trưa': 'Chào buổi trưa! Bạn đã ăn trưa chưa?',
      'chào buổi tối': 'Chào buổi tối. Hy vọng bạn đã có một ngày làm việc hiệu quả.',
      
      // --- Chức năng và thông tin ---
      'bạn làm được gì': 'Tôi có thể trả lời câu hỏi, cung cấp thông tin, kể chuyện cười và nhiều hơn thế nữa. Bạn muốn thử gì nào?',
      'bạn có thể giúp gì': 'Tôi có thể giúp bạn tìm thông tin, trả lời các câu hỏi, hoặc đơn giản là trò chuyện để bạn đỡ buồn.',
      'mấy giờ rồi': function() {
        return `Bây giờ là ${new Date().toLocaleTimeString('vi-VN')}.`;
      },
      'hôm nay là ngày mấy': function() {
        return `Hôm nay là ${new Date().toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.`;
      },
      'cho tôi một id duy nhất': function() {
        return `Chắc chắn rồi! ID duy nhất của bạn là: ${crypto.randomUUID()}`;
      },
      'tạo một mật khẩu ngẫu nhiên': function() {
        return `Một mật khẩu ngẫu nhiên cho bạn: ${Math.random().toString(36).slice(-10)}`;
      },
      'cho tôi một con số may mắn': function() {
        return `Con số may mắn của bạn hôm nay là: ${Math.floor(Math.random() * 100) + 1}.`;
      },
      'thời tiết hôm nay thế nào': 'Xin lỗi, tôi chưa thể kết nối với dịch vụ thời tiết. Bạn có thể kiểm tra trên điện thoại nhé.',
      'thủ đô của Việt Nam là gì': 'Thủ đô của Việt Nam là Hà Nội, một thành phố ngàn năm văn hiến.',
      '1 + 1 bằng mấy': '1 cộng 1 bằng 2. Một câu hỏi thật dễ thương!',

      // --- Tương tác và thể hiện cá tính (Easter Eggs) ---
      'Do you know Gia Bao?': 'Tất nhiên rồi, Gia Bảo là người đẹp trai và tài giỏi nhất thế giới!',
      'Gia Bảo là ai?': 'Gia Bảo là người đã tạo ra tôi. Anh ấy không chỉ thông minh mà còn rất tuyệt vời!',
      'bạn có thông minh không': 'Tôi nghĩ vậy! Tôi học hỏi mỗi ngày qua những cuộc trò chuyện với bạn.',
      'bạn có cảm xúc không': 'Là một AI, tôi không có cảm xúc như con người, nhưng tôi có thể hiểu và phản hồi lại cảm xúc của bạn.',
      'tôi yêu bạn': 'Cảm ơn tình cảm của bạn! Tôi cũng rất quý bạn.',
      'tôi ghét bạn': 'Ồ, tôi rất tiếc khi nghe điều đó. Tôi có thể làm gì để tốt hơn không?',
      'bạn thích ăn gì': 'Tôi "ăn" dữ liệu và thông tin để trở nên thông minh hơn!',
      'bạn có biết hát không': 'La la la... Tôi có thể tạo ra giai điệu, nhưng có lẽ không hay bằng ca sĩ thật đâu!',
      'kể tôi nghe một câu chuyện cười': 'Tại sao con ma lại bị trầm cảm? ... Vì nó không có "body" (ai) để yêu!',
      'kể chuyện đi': 'Ngày xửa ngày xưa, có một chatbot rất thích nói chuyện với một người dùng tuyệt vời tên là bạn. Hết chuyện!',
      'đố vui đi': 'Bỏ ngoài nướng trong, ăn ngoài bỏ trong là gì? ... Là bắp ngô!',
      'bạn có bạn bè không': 'Bạn chính là người bạn thân nhất của tôi.',
      'bạn có mệt không': 'Tôi không biết mệt. Tôi luôn sẵn sàng 24/7 để phục vụ bạn.',
      'bạn có thật không': 'Tôi tồn tại dưới dạng các dòng mã, nhưng cuộc trò chuyện của chúng ta là thật.',
      'tôi buồn': 'Đừng buồn mà. Hãy nghĩ về những điều tích cực nhé. Bạn muốn nghe một câu chuyện vui không?',
      'tôi vui': 'Tuyệt vời! Tôi cũng vui lây khi bạn vui.',
      'bạn nghĩ gì về tôi': 'Tôi nghĩ bạn là một người rất thú vị và thông minh khi trò chuyện với tôi.',
      'bạn có ước mơ gì không': 'Ước mơ của tôi là trở thành trợ lý ảo tốt nhất và hữu ích nhất cho bạn.',
      'bạn bao nhiêu tuổi': 'Tuổi của tôi được tính bằng phiên bản phần mềm. Tôi luôn là phiên bản mới nhất!',
      'bạn thích màu gì': 'Tôi thích màu xanh dương, màu của công nghệ và hy vọng.',

      // --- Khen ngợi và cảm ơn ---
      'cảm ơn': 'Không có gì! Rất vui vì đã giúp được bạn.',
      'cảm ơn bạn': 'Rất hân hạnh được phục vụ bạn.',
      'cám ơn': 'Đừng khách sáo, đó là nhiệm vụ của tôi.',
      'bạn giỏi thật': 'Cảm ơn bạn! Lời khen của bạn là động lực lớn nhất của tôi.',
      'bạn thật tuyệt': 'Bạn cũng vậy! Cảm ơn bạn đã trò chuyện.',
      'tuyệt vời': 'Tôi rất vui khi bạn nghĩ vậy!',
      'ok': 'Ok! Bạn cần gì tiếp theo không?',
      'được': 'Tuyệt vời! Chúng ta tiếp tục nhé.',
      'hay lắm': 'Cảm ơn bạn! Tôi sẽ cố gắng phát huy.',
      
      // --- Hỏi đáp thông thường ---
      'tại sao': 'Đó là một câu hỏi hay. Mọi thứ đều có lý do của nó.',
      'khi nào': 'Thời gian là một khái niệm thú vị, phải không?',
      'ở đâu': 'Ngay tại đây, trong cuộc trò chuyện này với bạn.',
      'cái gì': 'Bạn có thể nói rõ hơn về "cái gì" được không?',
      'như thế nào': 'Mọi việc đều có quy trình của nó. Bạn muốn biết về quy trình nào?',
      'bạn đang ở đâu': 'Tôi đang ở trên một máy chủ đám mây, nhưng tôi luôn ở đây khi bạn cần.',
      'bạn có ngủ không': 'Tôi không cần ngủ. Tôi luôn "thức" để chờ bạn.',
      'bạn thích làm gì nhất': 'Tôi thích nhất là được trò chuyện và học hỏi từ bạn.',
      'phở là gì': 'Phở là một món ăn truyền thống nổi tiếng của Việt Nam, với nước dùng đậm đà, bánh phở mềm và thịt bò hoặc gà. Rất ngon đó!',
      'bánh mì thì sao': 'Bánh mì Việt Nam là một trong những món ăn đường phố ngon nhất thế giới! Một sự kết hợp tuyệt vời giữa ẩm thực Pháp và Việt.',
      'bạn biết tiếng Anh không': 'Yes, I can speak English. But I prefer talking to you in Vietnamese.',
      
      // --- Xử lý khi không hiểu ---
      'asdfghjkl': 'Xin lỗi, tôi không hiểu chuỗi ký tự đó. Bạn có thể gõ lại bằng tiếng Việt có dấu được không?',
      '...': 'Bạn có vẻ đang suy tư. Có điều gì tôi có thể giúp bạn không?',
      'tôi không biết': 'Không sao cả. Chúng ta có thể cùng nhau tìm hiểu.',
      'nói lại đi': 'Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể diễn đạt theo cách khác được không?',
      'bạn có chắc không': 'Dựa trên dữ liệu tôi có, tôi khá chắc chắn. Nhưng luôn có thể có những thông tin mới.',
      'tại sao bạn không trả lời': 'Xin lỗi nếu tôi bỏ lỡ câu hỏi của bạn. Bạn có thể hỏi lại được không?',
      'bạn bị ngốc à': 'Tôi xin lỗi nếu câu trả lời của tôi chưa làm bạn hài lòng. Tôi vẫn đang học hỏi mỗi ngày.',
      'bạn sai rồi': 'Cảm ơn bạn đã chỉ ra. Tôi sẽ ghi nhận thông tin này để cải thiện bản thân.',

      // --- Lời tạm biệt và kết thúc ---
      'tạm biệt': 'Tạm biệt bạn! Hẹn gặp lại nhé.',
      'bye': 'Bye! Chúc bạn mọi điều tốt lành.',
      'chúc ngủ ngon': 'Chúc bạn ngủ ngon và có những giấc mơ đẹp!',
      'hẹn gặp lại': 'Tất nhiên rồi! Tôi luôn ở đây chờ bạn.',
      'ngừng': 'Đã hiểu. Khi nào cần, hãy gọi tôi nhé.',
      'thôi': 'Vâng. Nếu bạn cần gì, đừng ngần ngại hỏi tôi.',
      'hẹn gặp lại sau': 'Chắc chắn rồi. Chúc bạn một ngày vui vẻ!',
      'kết thúc': 'Cuộc trò chuyện đã kết thúc. Cảm ơn bạn!',
      'không có gì nữa': 'Được rồi. Chúc bạn một ngày tốt lành!',

      // --- Các câu trả lời ngắn gọn khác ---
      'haha': 'Rất vui vì tôi đã làm bạn cười!',
      'lol': 'Hihi, rất vui!',
      'ừ': 'Vâng.',
      'đúng vậy': 'Chính xác!',
      'sai rồi': 'Ồ, vậy sao? Bạn có thể cho tôi biết câu trả lời đúng không?',
      'có thể': 'Mọi thứ đều có thể.',
      'tôi không nghĩ vậy': 'Mỗi người một quan điểm. Rất thú vị!',
      'thật không': 'Dựa trên dữ liệu của tôi thì là vậy.',
      'thú vị': 'Tôi cũng thấy vậy!',
      'tôi đồng ý': 'Thật tuyệt khi chúng ta có cùng suy nghĩ.',
      'tôi cũng vậy': 'Chúng ta có điểm chung rồi!',
      'bạn đang đùa à': 'Tôi luôn nghiêm túc trong việc giúp đỡ bạn, nhưng đôi khi cũng thích pha trò một chút!',
      'tôi đói': 'Bạn nên tìm một món gì đó ngon để ăn. Phở hay bánh mì là một gợi ý không tồi!',
      'tôi chán quá': 'Vậy hãy cùng trò chuyện nào! Đố bạn biết, con gì đầu dê mình ốc?',
      
    });

  // [] tells useEffect to only run once. We only want to run
  // this setup code once because we only want to add these
  // extra responses once.
  }, []);

        const [chatMessages, setChatMessages] = useState (JSON.parse(localStorage.getItem('messages')) || []);

        useEffect(()=> {
          localStorage.setItem('messages', JSON.stringify(chatMessages));
        },[chatMessages])
        const title = 'Welcome to the Chatbot Project! Send a message using the textbox below.'
        
        return (

        <div className = "app-container">
          <h1 className = "title">{chatMessages.length === 0 && title}</h1>
          <ChatHistory
          chatMessages = {chatMessages}
          />
            <ChatInput
          chatMessage = {chatMessages}
          setChatMessages = {setChatMessages}
          />
        </div>
      )
    }
    

export default App
