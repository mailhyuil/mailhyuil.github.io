# db 정규화

> 정규형 = Normal Form = NF

## 1정규형 (1NF)

```prisma
/// bad
model Student {
  id        Int      @id @default(autoincrement())
  name      String
  lectures  String // "math, science, english" x
}

/// good
model Student {
  id        Int      @id @default(autoincrement())
  name      String
  lectures  Lecture[]
}
model Lecture {
  id        Int      @id @default(autoincrement())
  name      String
  students  Student[]
}
```

## 2정규형 (2NF)

```prisma
/// bad
model Student {
  id        Int      @id @default(autoincrement())
  name      String
  lectures  Lecture[] @relation("Registration")
}
model Lecture {
  id        Int      @id @default(autoincrement())
  name      String
  students  Student[]  @relation("Registration")
}
/// _StudentLecture
model Registration {
    id        Int      @id @default(autoincrement())
    student   Student  @relation(fields: [studentId], references: [id])
    studentId Int
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    classroomNumber Int /// x
    score     Int
}
/// good
model Student {
  id        Int      @id @default(autoincrement())
  name      String
  lectures  Lecture[] @relation("Registration")
}
model Lecture {
  id        Int      @id @default(autoincrement())
  name      String
  students  Student[]   @relation("Registration")
}
/// _StudentLecture
model Registration {
    id        Int      @id @default(autoincrement())
    student   Student  @relation(fields: [studentId], references: [id])
    studentId Int
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    classroom Classroom @relation(fields: [classroomId], references: [id])
    classroomId Int
    score     Int
}
model Classroom {
    id        Int      @id @default(autoincrement())
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    number Int
}
```

## 3정규형 (3NF)

```prisma
/// bad
model Student {
  id        Int      @id @default(autoincrement())
  name      String
  lectures  Lecture[] @relation("Registration")
}
model Lecture {
  id        Int      @id @default(autoincrement())
  name      String
  students  Student[]   @relation("Registration")
}
/// _StudentLecture
model Registration {
    id        Int      @id @default(autoincrement())
    student   Student  @relation(fields: [studentId], references: [id])
    studentId Int
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    classroom Classroom @relation(fields: [classroomId], references: [id])
    classroomId Int
    score     Int
    tuition   number /// x 수업료는 강의와 관련이 있다.
}
model Classroom {
    id        Int      @id @default(autoincrement())
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    number Int
}
/// good
model Student {
  id        Int      @id @default(autoincrement())
  name      String
  lectures  Lecture[] @relation("Registration")
}
model Lecture {
  id        Int      @id @default(autoincrement())
  name      String
  tuition   number /// o
  students  Student[]   @relation("Registration")
}
/// _StudentLecture
model Registration {
    id        Int      @id @default(autoincrement())
    student   Student  @relation(fields: [studentId], references: [id])
    studentId Int
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    classroom Classroom @relation(fields: [classroomId], references: [id])
    classroomId Int
    score     Int
}
model Classroom {
    id        Int      @id @default(autoincrement())
    lecture   Lecture  @relation(fields: [lectureId], references: [id])
    lectureId Int
    number Int
}
```

## BCNF
