# nodejs email nodemailer

## install

```sh
npm i nodemailer
npm i -D @types/nodemailer
```

## usage

```ts
import nodemailer from "nodemailer";

// 메일발송 객체
export const mailSender = {
  sender: "mailhyuil@gmail.com",
  password: "password",

  // 메일발송 함수
  sendGmail: function ({ to, subject, text }: { to: string; subject: string; text: string }) {
    // 메일 옵션
    const mailOptions = {
      from: senderInfo.user, // 보내는 메일의 주소
      to, // 수신할 이메일
      subject, // 메일 제목
      text, // 메일 내용
    };

    const transporter = nodemailer.createTransport({
      service: "gmail", // 메일 보내는 곳
      prot: 587,
      host: "smtp.gmail.com",
      secure: false,
      requireTLS: true,
      auth: {
        user: this.sender, // 보내는 메일의 주소
        pass: this.password, // 보내는 메일의 비밀번호
      },
    });

    // 메일 발송
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
```
