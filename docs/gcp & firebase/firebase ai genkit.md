# firebase ai genkit

## install

```sh
firebase init functions
cd functions
npm install @genkit-ai/ai @genkit-ai/googleai @genkit-ai/firebase
```

## functions/ai-agent.ts (cloud function typescript code)

```ts
import { genkit, z } from '@genkit-ai/ai';
import { googleAI, gemini15Flash } from '@genkit-ai/googleai';
import { onCallGenkit } from '@genkit-ai/firebase/functions';

const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash,
});

// AI 에이전트 플로우 정의
export const chatWithAgent = onCallGenkit( // onCallGenkit은 실시간 스트리밍을 지원하는 cloud function 훅
  ai.defineFlow({
    name: 'chatWithAgent',
    inputSchema: z.object({
      message: z.string(),
      history: z.array(z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })).optional(),
    }),
    outputSchema: z.string(),
  }, async (input) => {
    // 채팅 세션 시작
    const chat = ai.mainModel.startChat({
      history: input.history?.map(h => ({
        role: h.role,
        content: [{ text: h.content }],
      })),
    });

    const result = await chat.sendMessage(input.message);
    return result.text;
  })
);
```

## flutter

```dart
import 'package:cloud_functions/cloud_functions.dart';

class ChatService {
  final FirebaseFunctions functions = FirebaseFunctions.instance;

  Future<String> sendMessageToAgent(String message, List<Map<String, String>> history) async {
    try {
      // Genkit Flow 호출
      final HttpsCallable callable = functions.httpsCallable('chatWithAgent');
      
      final response = await callable.call({
        'message': message,
        'history': history, // 이전 대화 내용 전달
      });

      return response.data as String;
    } catch (e) {
      print('에러 발생: $e');
      return "죄송해요, 응답을 생성하는 중에 문제가 발생했습니다.";
    }
  }
  
  Stream<String> streamMessageToAgent(String message, List<Map<String, String>> history) async* {
    try {
      // 1. 함수 호출 (서버의 onCallGenkit 이름과 일치해야 함)
      final response = FirebaseFunctions.instance
          .httpsCallable('chatWithAgent')
          .stream({
            'message': message,
            'history': history,
          });
  
      String fullResponse = "";
  
      // 2. 스트림으로 들어오는 데이터를 순차적으로 처리
      await for (final chunk in response) {
        // Genkit에서 sendChunk로 보낸 데이터가 chunk.data에 담김
        final String textChunk = chunk.data.toString();
        
        fullResponse += textChunk;
        
        // 3. UI에 한 글자씩 전달
        yield fullResponse; 
      }
    } catch (e) {
      print('에러 발생: $e');
      yield "에러가 발생했습니다: $e";
    }
  }

}
```
